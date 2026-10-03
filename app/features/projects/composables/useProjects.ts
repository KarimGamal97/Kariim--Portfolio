import { ref, onMounted } from 'vue'
import type { ProjectItem } from '~/features/projects/types/project.types'
import { projectsRepository } from '~/repositories/projects.repository'

export function useProjects() {
  const projects = ref<ProjectItem[]>([])
  const isLoading = ref<boolean>(false)

  const loadProjects = async () => {
    isLoading.value = true
    try {
      projects.value = await projectsRepository.getAllProjects()
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    loadProjects()
  })

  return {
    projects,
    isLoading,
    loadProjects
  }
}
