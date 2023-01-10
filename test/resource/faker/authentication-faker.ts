import { AuthenticationParams } from '../../../src/usecase/authentication'
import { faker } from "@faker-js/faker"

const getAuthenticationFake = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export { getAuthenticationFake }
