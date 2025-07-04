import { Products } from "../mockdata/data"
import ProductCard from "../components/productcard"
import ImageSlider from "../components/ImageSlider"

const Home = ({ addToCart, searchedItems }) => {

  const filteredItems = Products.filter(product => 
    product.name.toLowerCase().includes(searchedItems.toLowerCase())
  );

  return (
    <>
      <ImageSlider />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 lg:ml-60 lg:mr-60">
        {filteredItems.length > 0 ? (
          filteredItems.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </>
  )
}

export default Home
