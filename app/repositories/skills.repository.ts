import type { SkillItem } from '~/features/home/types/home.types'
import skillsData from '~/data/home/skills.json'

export const skillsRepository = {
  async getSkills(): Promise<SkillItem[]> {
    return Promise.resolve(skillsData as SkillItem[])
  }
}
