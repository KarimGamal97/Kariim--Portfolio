import type { ServiceItem } from '~/features/home/types/home.types'
import servicesData from '~/data/home/services.json'

export const servicesRepository = {
  async getServices(): Promise<ServiceItem[]> {
    return Promise.resolve(servicesData as ServiceItem[])
  }
}
