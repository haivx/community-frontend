import React from 'react'
import { PostContext } from '@store/post-context';

export function usePost() {
  return React.useContext(PostContext);
}