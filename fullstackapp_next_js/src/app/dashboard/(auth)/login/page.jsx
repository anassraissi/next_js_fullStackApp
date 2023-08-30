"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const page = () => {
  return (
    <div>page

      <button onClick={()=>signIn("google")}>Login with google</button>
    </div>
  )
}

export default page