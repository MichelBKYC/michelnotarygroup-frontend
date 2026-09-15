import nodemailer from 'nodemailer'

const allowedServices = new Set([
  'General Notarization', 'Powers of Attorney', 'Affidavits',
  'Hospital & Nursing Facility Visits', 'Estate Document Notarization',
  'Vehicle Documents', 'Consent Forms', 'Business Documents', 'Not sure / Other',
])

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const invalid = () => createError({ statusCode: 400, statusMessage: 'Please check your enquiry details.' })
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw invalid()
  // Honeypot; automated submissions are not emailed.
  if (body.website) throw invalid()
  function field(key: string, limit: number, required = false): string {
    const value = body[key]
    if (value !== undefined && typeof value !== 'string') throw invalid()
    const text = (value ?? '').trim()
    if (text.length > limit || (required && !text)) throw invalid()
    return text
  }
  const name = field('name', 100, true)
  const email = field('email', 254)
  const phone = field('phone', 40)
  const city = field('city', 100)
  const preferredDate = field('preferredDate', 10)
  const message = field('message', 5000, true)
  const contactMethod = field('contactMethod', 10, true)
  if (!email && !phone) throw invalid()
  if (email && !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) throw invalid()
  if (phone && !/^[+\d\s().x-]{7,40}$/i.test(phone)) throw invalid()
  if (!['email', 'phone'].includes(contactMethod)) throw invalid()
  if ((contactMethod === 'email' && !email) || (contactMethod === 'phone' && !phone)) throw invalid()
  if (preferredDate && (!/^\d{4}-\d{2}-\d{2}$/.test(preferredDate) || Number.isNaN(Date.parse(preferredDate)) || new Date(preferredDate).toISOString().slice(0, 10) !== preferredDate)) throw invalid()
  if (!Array.isArray(body.services) || !body.services.length || body.services.length > allowedServices.size) throw invalid()
  // Legal advice is deliberately not accepted, including direct API submissions.
  if (body.services.some((service: unknown) => typeof service !== 'string' || !allowedServices.has(service))) throw invalid()
  const services = [...new Set<string>(body.services)]
  const config = useRuntimeConfig(event)
  const port = Number(config.enquirySmtpPort)
  if (!config.enquirySmtpHost || !config.enquirySmtpUser || !config.enquirySmtpPassword || !config.enquiryFrom || !config.enquiryTo || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw createError({ statusCode: 503, statusMessage: 'Enquiry email is not configured.' })
  }
  const now = new Date()
  const date = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', month: 'short', day: 'numeric', year: 'numeric' }).format(now)
  const time = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }).format(now)
  const singleLine = (value: string) => value.replace(/[\r\n\u0000-\u001f\u007f|]/g, ' ').replace(/\s+/g, ' ').trim()
  const subject = [date, time, services.join(' + '), singleLine(name), singleLine(city)].filter(Boolean).join(' | ')
  const transporter = nodemailer.createTransport({
    host: String(config.enquirySmtpHost), port, secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: String(config.enquirySmtpUser), pass: String(config.enquirySmtpPassword) },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000,
  })
  try {
    const result = await transporter.sendMail({
      from: String(config.enquiryFrom), to: String(config.enquiryTo),
      ...(email ? { replyTo: { name: singleLine(name), address: email } } : {}),
      subject,
      text: [
        'NEW WEBSITE ENQUIRY', `Submitted: ${date} | ${time}`,
        '', `Name: ${name}`, `Email: ${email || 'Not provided'}`, `Phone: ${phone || 'Not provided'}`,
        `Preferred contact method: ${contactMethod}`, `Services: ${services.join(', ')}`,
        `City / ZIP: ${city || 'Not provided'}`, `Preferred date: ${preferredDate || 'Flexible / not provided'}`,
        '', 'MESSAGE', message, '', 'This is an enquiry, not a confirmed appointment.',
      ].join('\n'),
    })
    if (!result.accepted?.length) throw new Error('Mail was not accepted')
    return { ok: true }
  } catch {
    // Do not expose credentials, mail-provider details, or enquiry contents.
    throw createError({ statusCode: 502, statusMessage: 'Unable to send enquiry. Please try again.' })
  } finally { transporter.close() }
})
