"use client"
import Link from 'next/link'
import React from 'react'
import style from './style.module.css'
import DarkModeToggle from '../darkmodeToggle/darkModeToggle'
import { signOut, useSession } from 'next-auth/react'
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
  const session=useSession();
  return (
      <div className={style.container}>
        <Link href='./' className={style.logo}>Anass's</Link>
        <div className={style.links}>
        <DarkModeToggle/>
        {links.map((link)=>(
        <Link key={link.id} href={link.url} className={style.link}>{link.title}</Link>

        ))}
        { 
            //new version of if conditions
          session.status==="authenticated" &&(
          <button className={style.logout} onClick={signOut}>Log out</button>
        )}

        </div>

        
    </div>
  )
}

export default navbar