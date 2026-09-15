export function useContactEnquiry() {
  const isOpen = useState<boolean>('contact-enquiry-open', () => false)
  const suggestedService = useState<string>('contact-enquiry-service', () => '')
  function open(service = '') {
    suggestedService.value = service
    isOpen.value = true
  }
  function close() { isOpen.value = false }
  return { isOpen, suggestedService, open, close }
}
