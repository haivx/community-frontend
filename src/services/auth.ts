import { postAuth } from './axios'
import { END_POINT_API } from '@constants/common'
import { SignInParams } from '@model/auth'

export const onSignIn = (params: SignInParams): Promise<any> => {
  return postAuth(END_POINT_API.login, params);
}
