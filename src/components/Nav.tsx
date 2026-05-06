import type { NavItemProps } from "./NavItem"
import NavItem from "./NavItem";

interface NavProps{
    navItems:NavItemProps[];
}
export default function Nav({navItems}:NavProps) {
  return (
    <nav>
        <ul className="flex justify-center gap-6 bg-orange-400 max-w-100% py-5">
            {navItems.map((e)=><NavItem key={e.id} path={e.path} title={e.title} />)}
        </ul>
    </nav>
  )
}
