import { ref, computed } from 'vue'
import type { ContactFormPayload } from '~/features/contact/types/contact.types'
import { contactRepository } from '~/repositories/contact.repository'

export function useContact() {
  const form = ref<ContactFormPayload>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const status = ref<string>('')
  const isSubmitting = ref<boolean>(false)

  const statusClass = computed(() => {
    return status.value.includes('Success') ? 'text-success' : 'text-danger'
  })

  const submitForm = async () => {
    isSubmitting.value = true
    status.value = ''

    try {
      const response = await contactRepository.sendContactMessage(form.value)
      status.value = response.message

      if (response.success) {
        form.value = {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      }
    } catch {
      status.value = 'Error! Please try again.'
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    status,
    statusClass,
    isSubmitting,
    submitForm
  }
}
