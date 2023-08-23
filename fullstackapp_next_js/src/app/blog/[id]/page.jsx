import React from 'react'
import styles from '../style.module.css'
import { notFound } from 'next/navigation'

async function getData(id){
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if(!res.ok){
    return notFound()
  }
  return res.json();  
}

const postblog = async({params}) => {
  const data=await getData(params.id)
  console.log(data)
  return (
    <div>
                  <div className={styles.content}>
                  <h1 className={styles.title}>{data.title}</h1>
                  <p className={styles.desc}>{data.desc}</p>
                  </div>



    </div>

  )
}

export default postblog