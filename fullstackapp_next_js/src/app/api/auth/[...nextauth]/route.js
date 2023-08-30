import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from '../../../utils/db';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';


const handler=NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({

      id:'credentials',
      name:'credentials',
      async authorize(credentials){
        await connect();
        try{
            const user=await User.findOne({email:credentials.email});
            if(user){
              //check password
              const isPasswordCorrect=await bcrypt.compare(
                credentials.password,
                user.password
                );
                if(isPasswordCorrect){
                  return user
                }
                else{ 
                  //ghayaffichiha f url 
                  throw new Error('wrong credentails')
                }
            }
            else{
              throw new Error('User not found')
            }
        }
        catch(err){
            throw new Error(err)
        }
      }
}),
  ],
  pages: { 
     //yraja3na lpage dashboard/login ila kan chi error.
    error: "/dashboard/login",
  },
})
export {handler as GET, handler as POST};