'use client'

import Container from "./Container"
import Logo from "./Logo"
import UserMenu from "./UserMenu"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Navbar = () => {

    const router = useRouter()

    return(
        <div className="sticky top-0 w-full bg-purpleBg opacity-90 text-purpleTxt z-10 shadow-sm print:hidden">
          <Container>
            <div className="flex flex-row items-center justify-between gap-0 md:gap-3">
              <Logo />
              <div className = "flex flex-row justify-between md:hidden">
                <ul>
                  <li><Link href="/EditInfo" > Forms </Link></li>
                  <li><Link href="/Activity" > Community </Link></li>
                  <li><Link href="/MediaCreate" > Media Make </Link></li>
                </ul>
              </div>
                <ul>
                  <li className = "hover:cursor-pointer" onClick = {()=> router.push('/Login')}> Login </li>
                  <li> Extra </li>
                </ul>
              <UserMenu/>
            </div>
          </Container>
        </div>
    )
}

export default Navbar