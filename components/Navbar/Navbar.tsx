import Container from "./Container"
import Logo from "../Elements/Logo"
import UserMenu from "./UserMenu"

const Navbar = () => {
    return(
        <div className="fixed w-full bg-white z-10 shadow-sm">
          <Container>
            <div 
              className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
            <Logo />
            <UserMenu/>
            </div>
          </Container>

        </div>
    )
}

export default Navbar