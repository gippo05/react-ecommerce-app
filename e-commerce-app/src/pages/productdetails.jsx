import { useParams } from "react-router-dom"
import { Products } from "../mockdata/data";

const ProductDetails = () => {
    const { id } = useParams();
    const product = Products.find(p => p.id === Number(id));

    return(
       <div className="p-6 flex-col">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p>Product ID: {id}</p>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="h-100"/>
      {/* Later: display full product info based on ID */}
    </div>
    )
}

export default ProductDetails