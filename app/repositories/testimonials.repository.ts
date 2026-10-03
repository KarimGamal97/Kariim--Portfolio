import type { TestimonialItem } from '~/features/home/types/home.types'

const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Fernando J Marcano',
    role: 'Upwork customer',
    quote: 'Karim helped us to optimize our html code with success. Thank you for your time and help!',
    rating: 5,
    reviewCount: 10,
    avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Blank&hairColor=BrownDark&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown'
  },
  {
    id: '2',
    name: 'Abdullah Almolhem',
    role: 'Upwork customer',
    quote: 'Very good designer. Finished work fast and he solved all the problems we faced during the project. I highly recommend him. Thank you so much!',
    rating: 5,
    reviewCount: 26,
    avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Kurt&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=White&graphicType=Skull&eyeType=Surprised&eyebrowType=FlatNatural&mouthType=Default&skinColor=Brown'
  },
  {
    id: '3',
    name: 'Trippie Fady',
    role: 'Upwork customer',
    quote: 'Great developer, worked perfectly on my emergency project and quickly mastered everything I needed. Respectable, we will work together again soon.',
    rating: 5,
    reviewCount: 26,
    avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Prescription02&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Close&eyebrowType=SadConcerned&mouthType=Twinkle&skinColor=Tanned'
  }
]

export const testimonialsRepository = {
  async getTestimonials(): Promise<TestimonialItem[]> {
    return Promise.resolve(TESTIMONIALS_DATA)
  }
}
