import { Products } from "../mockdata/data"
import ProductCard from "../components/productcard"


const Home = () => {


    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 lg:ml-60 lg:mr-60">
            {Products.map(product =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Home