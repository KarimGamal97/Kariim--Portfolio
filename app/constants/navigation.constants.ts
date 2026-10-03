import type { NavigationLink } from '~/types/common.types'

export const NAVIGATION_LINKS: NavigationLink[] = [
  { title: 'Home', href: '#0' },
  { title: 'Services', href: '#0', scrollNav: '1' },
  { title: 'About', href: '#0', scrollNav: '2' },
  { title: 'Portfolio', href: '#0', scrollNav: '3' },
  { title: 'Contact', href: '#0', scrollNav: '5' }
]

export const EXTERNAL_NAV_LINKS: NavigationLink[] = [
  { title: 'Home', href: '/' },
  { title: 'Services', href: '/' },
  { title: 'About', href: '/' },
  { title: 'Portfolio', href: '/' },
  { title: 'Contact', href: '/' }
]
