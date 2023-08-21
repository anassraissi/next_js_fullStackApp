import React from 'react'
import style from './style.module.css'

const footer = () => {
  return (
    <div className={style.container}>
        <div>Anass's Copyright 2023</div>
        <div className={style.socials} >
          <img src="../1.png" height={23} className={style.icon} width={23} alt="anass's facebook acount" />
          <img src="../2.png"  height={23}className={style.icon}  width={23} alt="anass's instagram acount" />
          <img src="../3.png" height={23} className={style.icon} width={23}  alt="anass's twitter acount" />
          <img src="../4.png"  height={23} className={style.icon} width={23} alt="anass's youtube acount" />

        </div>
        
    </div>
  )
}

export default footer