import { HttpPostClientSpy } from '../../../resource/moch/moch-http-client'
import { RemoteAuthentication } from '../../../../src/data/usecase/authentication/remote-authentication'

describe('data :: usecase :: authentication :: RemoteAuthentication', () => {
  test('Should call HttClient with correct URL', async () => {

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
