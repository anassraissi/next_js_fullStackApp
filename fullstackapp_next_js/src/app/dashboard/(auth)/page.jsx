'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"
import styles from './style.module.css'
import useSWR from 'swr'





const page = () => {
   //exp of swr

  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  // console.log(data);

  //reel use
  const session=useSession();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`../../../api/posts/${session?.data?.user.name}`, fetcher)
     console.log(data);

  console.log(session)
  const router=useRouter();
  if(session.status==='loading'){
    return <p>Loading...</p>  
  }
  if(session.status==='unauthenticated'){
      router?.push('/dashboard/login')
  }
  if(session.status==='authenticated'){
    return <div className="styles.container">Dashboard</div>
  }
}

export default page;