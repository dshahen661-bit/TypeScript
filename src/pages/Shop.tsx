import { useEffect, useState } from "react"
import Card from "../components/Card";

export default function Shop() {
    const [prods,setProds]=useState(null)

    useEffect(()=>{
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res=>setProds(res.products));
    },[])   
if (!prods) {
    return "Loading..."
}
  return (
    <div className="flex flex-wrap gap-6 max-w-360 mx-auto mt-10 justify-center items-center">
    {prods.map((e)=><Card imgUrl={e.images[0]} title={e.title} key={e.id} id={e.id} price={e.price} />)}
    </div>
  )
}
