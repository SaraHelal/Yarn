"use client";
import { usePathname } from "next/navigation";
import { MenuLink, NavMenu, NavWrapper } from "../styles/global";
import Link from "next/link";

function NavBar() {
  const pathname = usePathname()
  return (
    <NavMenu>
      <Link href="/"><img src="./images/logo.png" alt="logo" width={150} height={150} /></Link>
      <NavWrapper style={{gap: '2rem'}}>
        <MenuLink href={"/"} $primary = {pathname ==="/" ? true : false} >
          Home
        </MenuLink>
        <MenuLink href={"/try-me"} $primary = {pathname ==="/try-me" ? true : false}>Try</MenuLink>
      </NavWrapper>
    </NavMenu>
  );
}

export default NavBar;
