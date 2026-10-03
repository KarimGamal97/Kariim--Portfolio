import { ref, onMounted } from 'vue'
import type { ServiceItem, SkillItem, TestimonialItem } from '~/features/home/types/home.types'
import type { ProjectItem } from '~/features/projects/types/project.types'
import { servicesRepository } from '~/repositories/services.repository'
import { skillsRepository } from '~/repositories/skills.repository'
import { projectsRepository } from '~/repositories/projects.repository'
import { testimonialsRepository } from '~/repositories/testimonials.repository'

export function useHome() {
  const services = ref<ServiceItem[]>([])
  const skills = ref<SkillItem[]>([])
  const featuredProjects = ref<ProjectItem[]>([])
  const testimonials = ref<TestimonialItem[]>([])
  const isLoading = ref<boolean>(false)

  const loadHomeData = async () => {
    isLoading.value = true
    try {
      const [servicesData, skillsData, projectsData, testimonialsData] = await Promise.all([
        servicesRepository.getServices(),
        skillsRepository.getSkills(),
        projectsRepository.getFeaturedProjects(),
        testimonialsRepository.getTestimonials()
      ])

      services.value = servicesData
      skills.value = skillsData
      featuredProjects.value = projectsData
      testimonials.value = testimonialsData
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    loadHomeData()
  })

  return {
    services,
    skills,
    featuredProjects,
    testimonials,
    isLoading,
    loadHomeData
  }
}
