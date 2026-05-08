import { Link } from "react-router-dom"

export interface Prods{
    title:string,
    imgUrl:string,
    id:number,
    price:number
}

export default function Card({title,imgUrl,id,price}:Prods) {
  return (
   <Link to={`/shop/${id}`}>
    <div className="w-60 p-5 rounded shadow-2xl">
    <img src={imgUrl} alt={title} />
    <h3>{title}</h3>
    <span>{price}$</span>
    </div>
   </Link>
  )
}
