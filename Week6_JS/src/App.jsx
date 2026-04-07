import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <div>

        <div className="app">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="*" element={<NotFound />} />
        </Routes>


      </div>

    </BrowserRouter>

  )
}

export default App