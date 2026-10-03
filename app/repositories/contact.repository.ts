import type { ContactFormPayload } from '~/features/contact/types/contact.types'

export const contactRepository = {
  async sendContactMessage(payload: ContactFormPayload): Promise<{ success: boolean; message: string }> {
    const formData = new FormData()
    formData.append('name', payload.name)
    formData.append('email', payload.email)
    formData.append('subject', payload.subject)
    formData.append('message', payload.message)

    try {
      await $fetch('https://formspree.io/f/xldajzww', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      })

      return {
        success: true,
        message: 'Success! Your message has been sent.'
      }
    } catch {
      return {
        success: false,
        message: 'Error! Please try again.'
      }
    }
  }
}
