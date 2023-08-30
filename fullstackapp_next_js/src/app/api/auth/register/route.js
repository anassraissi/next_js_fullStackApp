
import { NextResponse } from 'next/server';
import USer from '../../../models/User';
import connect from '../../../utils/db';
import bcrypt from 'bcryptjs';

export const POST=async(request)=>{
const {name,email,password}=await request.json();
await connect();
const hashedpassword=await bcrypt.hash(password,5);
const newUser=new USer({
    name,email,
    password:hashedpassword
});

try{
    await newUser.save();
    return new NextResponse('User has been created',{
        status:201
})
}
catch(err){
    return NextResponse(err.message,{
        status:500
    })
}





}