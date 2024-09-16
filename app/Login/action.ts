'use server'
import {redirect} from 'next/navigation'
import { cookies } from 'next/headers'

export default async function auth(formdata: FormData){
    console.log("checking...")
    const pass = formdata.get('pass')
    if (pass=='1234'){
        cookies().set('Cookie1','!@#$',{
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })
        redirect('/Archive/WordArt')
    }
}