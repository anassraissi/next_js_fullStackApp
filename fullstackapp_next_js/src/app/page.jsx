import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from './components/Button/page'



export default function Home() {
  //class Image built-in in next-js
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <h1 className={styles.title}>
        Better design for your digital products
      </h1>
      <p className={styles.desc}>
          Turning your idea into Reality. we bring together the teams from th global tech industry.
      </p>  
      <Button url='/portfolio' text='See our work' ></Button>
      </div>
      <div className={styles.item}>
      <Image src={Hero} height={500} width={500} alt="" />
      </div>
    </div>
    
  )
}
