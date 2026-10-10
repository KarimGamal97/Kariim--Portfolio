import type { SocialLink } from '~/types/common.types'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/KarimGamal97',
    icon: 'fab fa-github',
    tippyContent: 'github'
  },
  {
    name: 'Codewars',
    url: 'https://www.codewars.com/users/KarimGamal97',
    isSvg: true,
    svgPath: '/assets/imgs/header/codewars.svg',
    tippyContent: 'codewars',
    placement: 'bottom'
  }
]

export const PROFILE_SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+201094123678',
    icon: 'fab fa-whatsapp',
    tippyContent: 'whatsapp',
    placement: 'bottom'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/karim-gamal-415b45126/',
    icon: 'fab fa-linkedin-in',
    tippyContent: 'linkedin'
  },
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~0135c4f6a4f1fb875c',
    isSvg: true,
    svgPath: '/assets/imgs/header/upwork.svg',
    tippyContent: 'upwork',
    placement: 'bottom'
  }
]

export const CONTACT_INFO = {
  email: 'kariimgamal1997@gmail.com',
  phone: '+(20)10 9412 3678',
  whatsappUrl: 'https://wa.me/+201094123678',
  author: 'Karim Gamal',
  resumeUrl: 'https://drive.google.com/file/d/1fXhJfS01ig9fUlk_VwsVrwhoDS8-VNwD/view?usp=sharing'
} as const
