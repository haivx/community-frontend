import React from 'react'
import { AuthContext } from '@store/auth-context';

export function useAuth() {
  return React.useContext(AuthContext);
}