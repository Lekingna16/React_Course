import { useState, useMemo } from "react";

const products = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: "Product " + i,
  price: Math.floor(Math.random() * 1000)
}));

function ProductFilter() {

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  console.time("filter");

  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      p.price >= minPrice &&
      p.price <= maxPrice
    );
  }, [search, minPrice, maxPrice]);

  const total = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  console.timeEnd("filter");

  return (
    <div>

      <h2>Product Filter (useMemo)</h2>

      <input
        placeholder="Search name"
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min price"
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="Max price"
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />

      <h3>Total: {total}</h3>

      <ul>
        {filteredProducts.slice(0, 20).map(p => (
          <li key={p.id}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ProductFilter;