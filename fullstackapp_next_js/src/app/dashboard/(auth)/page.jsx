'use client'
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"




const page = () => {
  const session=useSession();
  console.log(session)

  return (
    <div>

    </div>
  )
}

export default page