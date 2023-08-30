'use client'
import React, { useState } from 'react'
import styles from './style.module.css'
import { useRouter } from "next/navigation";
import Link from 'next/link';

const page = () => {
const [err,setErr]=useState(false);
const Router=useRouter();
const handleSubmit=async(e)=>{

  e.preventDefault();
  const name=e.target[0].value;
  const email=e.target[1].value;
  const password=e.target[2].value;
  try{
      const res=await fetch("../../api/auth/register",{
        method:'POST',
        headers:{
          "Content-type":'application/json', 
        },
        body:JSON.stringify({
          name,email,password
        }),
      });
        // if true redirect to dashboard/login  with message success in url.
      res.status===201 && Router.push('/dashboard/login?success=Account has been created')
      
        }
  catch(err){
    setErr(true);
  }
}

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
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
        {err && "Something went wrong!"}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  )
}

export default page