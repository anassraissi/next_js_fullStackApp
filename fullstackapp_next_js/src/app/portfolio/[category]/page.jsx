import React from "react";
import styles from "./style.module.css";
import Button from "../../components/Button/page";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const category = ({ params }) => {
    const data = getData(params.category);
    return (
      <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
  
        {data.map((item) => (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                fill={true} 
                //  This prop is likely used to control how the image should be sized within its container.
                 // Setting it to true might mean that the image should fill its container,
                // possibly maintaining its aspect ratio.
                src={item.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    );  
}

export default category