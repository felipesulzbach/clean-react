import { HttpPostClient } from "../../../src/data/usecase/authentication/protocol/http/http-post-client"

export class HttpPostClientSpy implements HttpPostClient {
  url?: string

  async post(url: string): Promise<void> {
    this.url = url
    return Promise.resolve()
  }
}
