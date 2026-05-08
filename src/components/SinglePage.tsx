import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SinglePage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [bigImg, setBigImg] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setBigImg(data.images[0]);
      });
  }, [id]);

  if (!product) {
    return "Loading..."
  }

  return (
  <div className="max-w-360 mx-auto p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="flex flex-col gap-4">
        <div className="w-full overflow-hidden rounded-2xl border border-gray-100 ">
          <img 
            src={bigImg}  
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"/>
        </div>
        <div className="flex gap-3 overflow-x-auto py-2">
          {product.images.map((imgUrl: string,) => (
            <img 
              src={imgUrl} 
              onClick={() => setBigImg(imgUrl)}
              className={`w-20 h-20 cursor-pointer border-2 rounded-lg`}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{product.category}</span>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">{product.title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-emerald-700">${product.price}</span>
          <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
         {product.rating} Rating ★★★
          </div>
        </div>
        <div className=" border-gray-100 py-6">
          <h3 className="text-lg  text-gray-700 mb-2">Description</h3>
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

    </div>
  </div>
);
}
