import { Link } from "react-router-dom";

export interface NavItemProps{
    id?:number,
    path:string,
    title:string,
}

export default function NavItem({path,title}:NavItemProps) {
  return (
    <li>
        <Link to={path}>{title}</Link>
    </li>
  )
}
