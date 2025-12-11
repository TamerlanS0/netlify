import Loading from "../components/Loading";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { useDarkmode } from "../stores/darkmodeStore";

const Products = () => {
  const { isDarkmodeActive, toggleDarkmode } = useDarkmode();

  const [loading, setLoading] = useState(false);
  const [searchterm, setSearchterm] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Məhsullar yüklənərkən xəta:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {}, 300);

    return () => clearTimeout(timer);
  }, [searchterm]);

  return (
    <>
      <div className="w-full flex justify-center py-5">
        <input
          className={`border ${isDarkmodeActive ? "border-zinc-700 bg-zinc-800 text-white" : "border-zinc-300"} p-3 min-w-[300px] rounded-lg outline-none`}
          placeholder="Search for any product..."
          type="text"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />
        <button
          onClick={toggleDarkmode}
          className="bg-red-600 text-white px-4 py-2 ml-4 rounded hover:bg-red-700 hover:cursor-pointer transition"
        >
          {isDarkmodeActive ? "Disable" : "Enable"} Darkmode
        </button>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full min-h-screen h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;