'use client'
import { verifyAuth } from "./action"
import UserMenu from "../UserMenu"
import { useRouter } from "next/navigation"
import Link from "next/link"


const Navbar = () => {

    const router = useRouter()

    return(
        <div id="wrap-navbar" className="sticky top-0 w-full py-3 px-4 bg-[#232d4f] opacity-90 text-[rgb(142,155,209)] z-10 shadow-sm print:hidden">

            <div id="wrap-flexItem" className="flex flex-row items-center justify-between mx-auto md:gap-3">

              <img
                onClick={() => router.push('/')}
                className="block cursor-pointer" 
                src="/logo.png" height="80" width="80" alt="Logo" 
              /> 
              {/* if use Image of next the optimization may make not update in dev env */}
 
              <div id="navigation-mid" className = "md:hidden">
                <ul className="gap-8">
                  <li className = "hover:cursor-pointer" 
                  onClick = {()=> {verifyAuth().then((isAuth) => {if(isAuth){router.push('/EditInfo')}})}} 
                  > 
                    Forms 
                  </li>
                  <li><Link href="./Activity"> Community </Link></li>
                  <li><Link href="./Gallery"> Gallery </Link></li>
                </ul>
              </div>

              <div id="navigation-right" >
                <ul className="gap-4">
                  <li className = "hover:cursor-pointer" onClick = {()=> router.push('/Login')}> Login </li>
                  <li> Extra </li>
                </ul>
              </div>

              <UserMenu/>
              
            </div>

        </div>
    )
}

export default Navbar