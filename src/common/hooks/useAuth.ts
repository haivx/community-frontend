import React from 'react'
import { AuthContext } from '../../index';

export function useAuth() {
  return React.useContext(AuthContext);
}