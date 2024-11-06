'use client'
import { verifyAuth } from "./action"
import Container from "./Container"
import Logo from "./Logo"
import UserMenu from "./UserMenu"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Navbar = () => {

    const router = useRouter()

    return(
        <div className="sticky top-0 w-full py-3 bg-purpleBg opacity-90 text-purpleTxt z-10 shadow-sm print:hidden">
          <Container>
            <div className="flex flex-row items-center justify-between md:gap-3">
              <Logo />
              <div className = "md:hidden">
                <ul className="gap-8">
                  <li className = "hover:cursor-pointer" onClick = {()=> {verifyAuth().then((isAuth) => {if(isAuth){router.push('/EditInfo')}})}} > Forms </li>
                  <li><Link href="./Activity" > Community </Link></li>
                  <li><Link href="./Gallery" >Gallery </Link></li>
                </ul>
              </div>
              <div >
                <ul className="gap-4">
                  <li className = "hover:cursor-pointer" onClick = {()=> router.push('/Login')}> Login </li>
                  <li> Extra </li>
                </ul>
              </div>
              <UserMenu/>
            </div>
          </Container>
        </div>
    )
}

export default Navbar