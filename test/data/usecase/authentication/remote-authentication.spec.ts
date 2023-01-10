import { RemoteAuthentication } from '../../../../src/data/usecase/authentication/remote-authentication'
import { HttpPostClientSpy } from '../../../resource/mock/mock-http-client';
import { getFakeUrl } from '../../../resource/faker/http-faker'
import { getAuthenticationFake } from '../../../resource/faker/authentication-faker'

type SubTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = getFakeUrl()): SubTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('data :: usecase :: authentication :: RemoteAuthentication', () => {
  test('Should call HttClient with correct URL', async () => {
    const url = getFakeUrl()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(getAuthenticationFake())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const params = getAuthenticationFake()
    await sut.auth(params)
    expect(httpPostClientSpy.body).toEqual(params)
  })
})
