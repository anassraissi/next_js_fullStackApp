"use client"
import Link from 'next/link'
import React from 'react'
import style from './style.module.css'
import DarkModeToggle from '../darkmodeToggle/darkModeToggle'
const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

const navbar = () => {
  return (
      <div className={style.container}>
        <Link href='./' className={style.logo}>Anass's</Link>
        <div className={style.links}>
        <DarkModeToggle/>
        {links.map((link)=>(
        <Link key={link.id} href={link.url} className={style.link}>{link.title}</Link>

        ))}
         <button className={style.logout} onClick={()=>{
        }}>Log out</button>

        </div>

        
    </div>
  )
}

export default navbar