import { postAuth, getAuth, putAuth, deleteAuth } from './axios'
import { END_POINT_API } from '@constants/common'

const onLogin = (params: any): Promise<any> => {
  return postAuth(END_POINT_API.login, params)
}

export default {
  onLogin,
}
