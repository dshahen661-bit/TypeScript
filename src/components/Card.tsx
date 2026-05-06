
export interface Prods{
    title:string,
    imgUrl:string,
    id:number
}

export default function Card({title,imgUrl,id}:Prods) {
  return (
   <div className="flex flex-col gap-5 text-center">
    <div className="max-w-96">
        <img src={imgUrl} alt={title} />
    </div>
    <h3>{title}</h3>
   </div>
  )
}
