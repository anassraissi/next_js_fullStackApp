
const { NextResponse } = require("next/server");
import Post from "@/app/models/Post";
import connect from "@/app/utils/db";

export const GET=async(request)=>{
    try{
                await connect();
            const post=await Post.find();
            return new NextResponse(post,{status:200});

    }
    catch(err){
        return new NextResponse("Database error",{status:500});

    }

}