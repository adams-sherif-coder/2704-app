import { useState, useEffect } from "react";

export default function Products() {
  console.log("products component rendered");
  const [products, setProducts] = useState([]);
  console.log("products", products);

  const get_products = async () => {

    const url = "https://dummyjson.com/products"; // Example valid API
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);

  };

  console.log("before use effect");
  useEffect(() => {
    console.log("in effect");
    get_products();
    console.log("after use effect");
  }, []);

  return (
    <div>

      {products.map((product) => (
        <div key={product.id} >
          <img src={product.thumbnail} alt={product.title} />
          <div >{product.title}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
}