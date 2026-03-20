import { useEffect, useState } from "react"
import ProductList from "./components/ProductList";
import SearchItem from "./components/SearchItem";
import FillterProduct from "./components/FillterProduct";

function App() {


  const [items, setItems] = useState(() => {
    try {
      const data = localStorage.getItem("items");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error("Lỗi parse localStorage:", error);
      return [];
    }
  });


  const [filterData, setFilterData] = useState([]);


  const [keyword, setKeyword] = useState("");

  const [selected, setSelected] = useState('all')

  const url = "https://fakestoreapi.com/products";


  useEffect(() => {
    if (items.length > 0) return;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);


  useEffect(() => {
    if (!keyword.trim() && selected === 'all') {
      setFilterData(items);
    }
    else if (keyword.trim() && selected === 'all') {
      const result = items.filter(item =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilterData(result);
    }
    else {
      const result = items.filter(item =>
        item.title.toLowerCase().includes(keyword.toLowerCase()) && item.category === selected
      );
      setFilterData(result);
    }
  }, [items, keyword, selected]);


  const handleDelete = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };


  const handleSearch = (kw) => {
    setKeyword(kw);
  };

  const handleFilter = (selected) => {
    setSelected(selected)
  }

  return (
    <div className="mx-5 ">
      <div className="flex justify-center gap-6">
        <SearchItem handleSearch={handleSearch} />
        <FillterProduct items={items} handleFilter={handleFilter} />
      </div>


      <ProductList items={filterData} handleDelete={handleDelete} />
    </div>
  )
}

export default App;