const Card = ({ product }) => {
  return (
    <div className="w-[300px] border border-gray-300 p-4 rounded-lg shadow-lg">
        <img className="w-full h-[200px] object-contain" src={product.images[0]} alt="" />
        <h2 className="text-2xl font-semibold mt-3">{product.title}</h2>
        <p className="my-4">{product.description}</p>
        <p className="text-red-600 font-medium">{product.currency}{product.price}</p>
    </div>
  )
}

export default Card