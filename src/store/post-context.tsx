import { PostType } from '@model/post'
import React, { useState, createContext } from 'react'

interface PostContextType {
    onSetDraftPost: (data: PostType) => void;
    draftPost: PostType
}

export const PostContext = createContext<PostContextType>(null!)

export function PostContextProvider ({ children}: { children: React.ReactNode}) {
    const [draftPost, setDraftPost] = useState<PostType>(null!)
    const onSetDraftPost = (data: PostType) => {
        setDraftPost(data);
    }
    const value = {
        onSetDraftPost,
        draftPost
    }

    return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

