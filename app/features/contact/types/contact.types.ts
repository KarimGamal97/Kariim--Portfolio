export interface ContactFormPayload {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormState {
  status: string
  isSubmitting: boolean
}
