export interface ServiceItem {
  icon: string
  title: string
  description: string
}

export interface SkillItem {
  photo: string
  title: string
  persent: string
}

export interface TestimonialItem {
  id: string
  name: string
  role: string
  quote: string
  rating: number
  reviewCount: number
  avatar: string
}

export interface ProfileStats {
  yearsExperience: number
  clientsWorldwide: number
  resumeUrl: string
}
