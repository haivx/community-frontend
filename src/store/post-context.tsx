import React, { createContext } from 'react'
import { save, load } from '@common/utils'
import { PostType } from '@model/post'
import { createPost } from '@services/posts/create-post'

interface PostContextType {
  onSetDraftPost: (data: PostType) => void
  onCreatePost: (data: PostType) => void
  draftPost: PostType
}

export const PostContext = createContext<PostContextType>(null!)

export function PostContextProvider({ children }: { children: React.ReactNode }) {
  const draftPost = load('draftpost') || {}
  const onSetDraftPost = (data: PostType) => {
    save('draftpost', {...draftPost, ...data})
  }
  const onCreatePost = (data: PostType): Promise<void> =>
    new Promise((resolve, reject) => {
      return createPost(data)
        .then(() => {
          resolve()
        })
        .catch((error) => {
          if (error.response) {
            return reject(error.response.data.message)
          }
          reject(error)
        })
    })

  const value = {
    onSetDraftPost,
    draftPost,
    onCreatePost,
  }

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}
