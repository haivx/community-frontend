import { postAuth } from '../axios'
import { END_POINT_API } from '@constants/common'
import { PostType } from "@model/post"

export const onCreatePost = (params: PostType): Promise<any> => {
  return postAuth(END_POINT_API.post, params)
}
