import { HttpPostClient, HttpPostParams } from "../../../src/data/usecase/authentication/protocol/http/http-post-client"

class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post(params: HttpPostParams): Promise<void> {
    this.url = params.url
    return Promise.resolve()
  }
}

export { HttpPostClientSpy }
