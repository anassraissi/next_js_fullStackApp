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