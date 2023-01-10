import { AccountModel } from '../model/account-model'

type AuthenticationParams = {
  email: string
  password: string
}

interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}

export { Authentication, AuthenticationParams }
