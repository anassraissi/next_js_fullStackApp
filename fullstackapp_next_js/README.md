This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# github project code source
https://github.com/safak/nextjs-tutorial

# example of useEffect in react js => save a data aside in components.

  ```

  const [data,setData]=useState([]);
  const [err,setErr]=useState(false);
  const [isLoading,setIsLoading]=useState(false);
  useEffect(()=>{
          const getData=async()=>{
            setIsLoading(true);
            const res=await fetch("https://jsonplaceholder.typicode.com/posts",{
              cache:'no-store',
            });
          
        if(!res.ok){
          setErr(true)
        }
        const data=await res.json();
        setData(data);
        setIsLoading(false);
      }
      getData();
  },[]);
  console.log(data)
```


## create a response htpp in nextjs
```

const { NextResponse } = require("next/server");

export const GET=async(request)=>{

    return new NextResponse("it's works",{status:200});
}

```
 `must be the file named route.js`

# connect with mongodb compass offline
```
// instead of this
const url = "mongodb://localhost:27017";

// Just Replace
const url = "mongodb://127.0.0.1:27017";
```

# Client-side data fetching with SWR
```
React hook library for data fetching called SWR. It is highly recommended if you are fetching data on the client-side. It handles caching, revalidation, focus tracking, refetching on intervals, and more.
```
## Swr use
```

import useSWR from 'swr'
 
const fetcher = (...args) => fetch(...args).then((res) => res.json())
 
function Profile() {
  const { data, error } = useSWR('/api/profile-data', fetcher)
 
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
 
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
```

```
useSWR: This is a hook provided by the SWR library (Stale-While-Revalidate). It is used for data fetching and caching in React applications. SWR makes it easy to fetch data from various sources, including APIs, and automatically handles caching and revalidation.
```
# why on use '?' in query fech api.
```
The ? is used to start the query string, and it's followed by a dynamically generated parameter based on the user's name obtained from session?.data?.user.name. This allows you to send a specific user's name as a parameter when making the HTTP request to the /api/posts endpoint.
```
# why && in javascript
```
In JavaScript, the && operator is a logical operator that returns the value of its second operand if the first operand is truthy, and it returns the first operand if it is falsy.
exp

const posts = await Post.find(username && { username });

So, essentially, the && operator is used here to conditionally include the { username } object in the query based on whether username has a value. If username has a value, it filters the posts by that username; otherwise, it returns all posts (since the right-hand side of && is not evaluated when username is falsy).
if a username has a value.
  
const posts = await Post.find({username}); 
```





