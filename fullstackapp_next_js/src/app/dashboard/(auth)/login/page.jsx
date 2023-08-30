"use client"
import { signIn } from 'next-auth/react'
import styles from './style.module.css'
import React from 'react'

const page = () => {

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