import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import ProductDetail from "./components/ProductDetail"

const App = () => {
  const items = ['Iphone', 'Samsung', 'Laptop']
  return (
    // <BrowserRouter>
    //   <div>

    //     <div className="app">
    //       <Link to="/">Home</Link>
    //       <Link to="/about">About</Link>
    //       <Link to="/contact">Contact</Link>
    //     </div>

    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Routes>


    //   </div>

    // </BrowserRouter>



    <BrowserRouter>
      <div>
        {items.map((item, index) => {
          return (
            <Link key={index} to={`/products/${index}`}>Product {index}</Link>
          )
        })}
      </div>
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
      </Routes>


    </BrowserRouter>

  )
}

export default App