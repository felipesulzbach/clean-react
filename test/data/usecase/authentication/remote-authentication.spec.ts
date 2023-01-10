import { RemoteAuthentication } from '../../../../src/data/usecase/authentication/remote-authentication'
import { HttpPostClientSpy } from '../../../resource/moch/moch-http-client';

type SubTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SubTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('data :: usecase :: authentication :: RemoteAuthentication', () => {
  test('Should call HttClient with correct URL', async () => {

    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
