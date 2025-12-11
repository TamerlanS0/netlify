import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [searchterm, setSearchterm] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      setLoading(true);

      const res = await fetch("https://ilkinibadov.com/api/v1/products");

      if (res.ok) {
        const data = await res.json();
        setProducts(data.products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center py-5">
        <input
          className="border border-zinc-300 p-3 min-w-[300px]"
          placeholder="Search for products..."
          onChange={(e) => setSearchterm(e.target.value)}
        />
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full min-h-screen h-fit grid grid-cols-4 gap-5 p-5">
          {products
            .filter((p) =>
              p.title.toLowerCase().includes(searchterm.toLowerCase())
            )
            .map((product) => (
              <Card key={product._id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default App;
