import { HttpPostClient } from '../../../../src/data/usecase/authentication/protocol/http/http-post-client'
import { RemoteAuthentication } from '../../../../src/data/usecase/authentication/remote-authentication'

describe('data :: usecase :: authentication :: RemoteAuthentication', () => {
  test('Should call HttClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
