
const { NextResponse } = require("next/server");
import Post from "@/app/models/Post";
import connect from "@/app/utils/db";

export const GET=async(request)=>{
    try{
        const url=new URL(request.url);
        const username=url.searchParams.get('username');
                await connect();
            const posts=await Post.find(username &&  {username});
            return new NextResponse(JSON.stringify(posts),{status:200});

    }
    catch(err){
        return new NextResponse("Database error",{status:500});

    }

}
export const POST =async(request)=>{
    console.log('ok');
const body=await request.json();
const newPost=new Post(body);
    try{
        await connect();
        await newPost.save();
        return new NextResponse("post has been created",{status:201});
    }
    catch(err){
        return new NextResponse("Database error",{status:500});
    }

}