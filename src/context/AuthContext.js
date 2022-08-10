import { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

const AuthContext = createContext()
export function AuthContextProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>
}
