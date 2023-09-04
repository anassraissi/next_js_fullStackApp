'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"
import styles from './style.module.css'
import useSWR from 'swr'
import Image from "next/image";
const page = () => {
   //exp of swr

  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  // console.log(data);

  //reel use
  const session=useSession();
    const fetcher = (...args) => fetch(...args).then(res =>  res.json())
    const { data, error, isLoading, mutate } = useSWR(`/api/posts?${session?.data?.user.name}`, fetcher)

    //The ${session?.data?.user.name} part retrieves the user's name from the session object.
    // This is a common pattern to include dynamic values in the URL when making API requests.
     console.log(data);


  console.log(session)
  const router=useRouter();
  if(session.status==='loading'){
    return <p>Loading...</p>  
  }
  if(session.status==='unauthenticated'){
      router?.push('/dashboard/login')
  }
  const handleSubmit = async (e) => {
    e.preventDefault();  // we dont want refesh page befor get data from inputs.
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("./api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();

    //The `mutate` function in the `useSWR` hook can be used to manually trigger a refetch of the data.
    //  This can be useful in a number of situations, such as when the user wants to refresh the data,
    //   or when the data has changed and the user wants to see the latest version.

    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete=async(id)=>{
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();

    //The `mutate` function in the `useSWR` hook can be used to manually trigger a refetch of the data.
    //  This can be useful in a number of situations, such as when the user wants to refresh the data,
    //   or when the data has changed and the user wants to see the latest version.

    } catch (err) {
      console.log(err);
    }
  }
  if(session.status==='authenticated'){
    return (
      <div className={styles.container}>
      <div className={styles.posts}>
        
        {isLoading        //expression means that if status is loading show as console loading else if data is true try show datas.
          ? "loading"
          : data?.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image src={post.img} alt="" width={200} height={100} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post._id)}
                >
                  X
                </span>
              </div>
            ))}
      </div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea
          placeholder="Content"
          className={styles.textArea}
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div> 
    )
  }
}

export default page;