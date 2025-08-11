import { useState, useEffect } from "react";
import ProductCard from "../components/productcard";
import ImageSlider from "../components/ImageSlider";

const Home = ({ addToCart, searchedItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products"); // Your backend endpoint
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredItems = products.filter(product =>
    product.name.toLowerCase().includes(searchedItems.toLowerCase())
  );

  return (
    <>
      <ImageSlider />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 lg:ml-60 lg:mr-60">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">Loading products...</p>
        ) : filteredItems.length > 0 ? (
          filteredItems.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No products found.</p>
        )}
      </div>
    </>
  );
};

export default Home;
