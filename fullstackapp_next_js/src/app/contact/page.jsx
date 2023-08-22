'use client'  //for showig js tips in browse  console.log('hello anass'); it's shows in browser.
import React from 'react'
import styles from './style.module.css'
import Image from "next/image";
import Button from "../components/Button/page";

const contact = () => {
  console.log('hello anass');
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            width={500}
            height={500}
            className={styles.image}
            priority={false} // {false} | {true}

          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div> 
   )
}

export default contact