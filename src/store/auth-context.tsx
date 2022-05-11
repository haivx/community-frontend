import React, { useState, createContext } from 'react'
import { User, SignInParams } from '@model/auth'
import { onSignIn } from '@services/auth'
import { save, load } from '@common/utils/storage'

interface AuthContextType {
  user: any
  signIn: (user: SignInParams, callback?: VoidFunction) => void
}

export const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<User>(load("user"));
  const signIn = (data: SignInParams): Promise<void> =>
    new Promise((resolve, reject) => {
      onSignIn(data)
        .then((res) => {
          const dataUser = res.data;
          save('user', dataUser);
          setUser(dataUser);
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
    user,
    signIn,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
