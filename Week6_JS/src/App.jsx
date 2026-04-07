import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NotFound from "./components/NotFound"
import ProductDetail from "./components/ProductDetail"
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile"
import Orders from "./components/Orders"
import Setting from "./components/Setting"
import DashboardHome from "./components/DashboardHome"
import Checkout from "./components/Checkout"
import UserProvider from "./components/UserProvider"
import Login from "./components/Login"

const App = () => {
  const items = ['Iphone', 'Samsung', 'Laptop']
  return (
    <BrowserRouter>
      <UserProvider>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </UserProvider>
    </BrowserRouter>



    // <BrowserRouter>
    //   <div>
    //     {items.map((item, index) => {
    //       return (
    //         <Link key={index} to={`/products/${index}`} style={{ display: "flex", gap: "20px" }}>Product {index}</Link>
    //       )
    //     })}
    //   </div>
    //   <Routes>
    //     <Route path="/products/:id" element={<ProductDetail />}></Route>
    //     <Route path="/checkout" element={<Checkout />}></Route>
    //   </Routes>

    /* <Routes>

        <Route path="/" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="setting" element={<Setting />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes> */



    //   </BrowserRouter>

  )


}

export default App