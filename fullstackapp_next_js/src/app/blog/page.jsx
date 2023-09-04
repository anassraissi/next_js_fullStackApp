"use client"
import React from 'react'
import styles from './style.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";



async function getData(){
  const res=await fetch('http://localhost:3000/api/posts',{

    cache: "no-store", // data changable each request no make data cach in browser..
    // { cache: 'force-cache' }  // make data cach in web browser imediatly cause is not changable it's static
    // fetch('https://...', { next: { revalidate: 3600 } }) Revalidating Data make cach store each second semi dynamic

  })
  if(!res.ok){
      return notFound()
  }
  return res.json();
}

const blog = async() => {
  const router=useRouter();
  const session=useSession();
  
  if(session.status==='authenticated'){
    router?.push('/blog')
  }
  if(session.status==='loading'){
     <p>Loading...</p>  
  }
  if(session.status==='unauthenticated'){
    router?.push('/dashboard/login')
  }

  const data=await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div> 
     )
}

export default blog