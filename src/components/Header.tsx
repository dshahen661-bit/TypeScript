import { Link } from "react-router-dom"
import type { NavItemProps } from "./NavItem"
import Nav from "./Nav"

const menuItems:NavItemProps[]=[
    {id:1,path:"/",title:"Home"},
    {id:2,path:"/shop",title:"Shop"},
    {id:3,path:"/about",title:"About"},
]

export default function Header() {
  return (
    <header>
        <div>
            <Link to={"/"}>Logo</Link>
        </div>
        <Nav navItems={menuItems} />
    </header>
  )
}
