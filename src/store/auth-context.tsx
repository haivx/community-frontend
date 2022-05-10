import React, { useState, createContext } from 'react'
import { User, SignInParams } from '@model/auth';
import {onSignIn} from "@services/auth"

interface AuthContextType {
  user: any
  signIn: (user: SignInParams, callback?: VoidFunction) => void
}

export const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<User>(null!)

  const signIn = async (data: SignInParams) => {
    try {
        const response = await onSignIn(data);
        console.log(response)
    } catch(err) {
        console.log(err)
    }
  }

  const value = {
    user,
    signIn,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
