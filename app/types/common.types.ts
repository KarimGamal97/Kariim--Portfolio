export interface NavigationLink {
  title: string
  href: string
  scrollNav?: string
}

export interface SocialLink {
  name: string
  url: string
  icon?: string
  tippyContent: string
  isSvg?: boolean
  svgPath?: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}
