"use client"
import { signIn, useSession } from 'next-auth/react'
import styles from './style.module.css'
import React from 'react'
import { useRouter } from "next/navigation";

const page = () => {
  const session=useSession();
  const router=useRouter();
  if(session.status==='authenticated'){
    //this ?.push handle id object router is null or undefinded will w'ont throw the error  ==> feature new in js
    router?.push('/dashboard')
  }
  if(session.status==='loading'){
    return <p>...Loading</p>
  }


const handleSubmit=async(e)=>{

  e.preventDefault();
  const email=e.target[0].value;
  const password=e.target[1].value;
  
  signIn("credentials", {
    email,
    password,
  });

}

  return (
    <div className={styles.container}>
          <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Email"
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className={styles.input}
            />
            <button className={styles.button}>Register</button>       
          </form>
          <button onClick={()=>signIn('google')}>Login with google</button>
        </div>
  )
}

export default page