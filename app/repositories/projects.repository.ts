import type { ProjectItem } from '~/features/projects/types/project.types'
import worksData from '~/data/home/works.json'
import lessWorksData from '~/data/home/less-works.json'

export const projectsRepository = {
  async getAllProjects(): Promise<ProjectItem[]> {
    return Promise.resolve(worksData as ProjectItem[])
  },

  async getFeaturedProjects(): Promise<ProjectItem[]> {
    return Promise.resolve(lessWorksData as ProjectItem[])
  }
}
