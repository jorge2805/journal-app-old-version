import React from 'react'
import { Route, Routes } from 'react-router-dom'


import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
  return (
    <>
        <div className='container'>
          <Routes>
              <Route path="Login" element={<LoginScreen />} />
              <Route path="Register" element={<RegisterScreen />} />

              <Route path="/" element={<LoginScreen />} />
          </Routes>
        </div>
    </>
  )
}