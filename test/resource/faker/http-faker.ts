import { faker } from '@faker-js/faker'

const getFakeUrl = (): string => {
  return faker.internet.url();
}

export { getFakeUrl }