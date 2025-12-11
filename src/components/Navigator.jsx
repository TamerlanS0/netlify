import { Routes, Route } from "react-router-dom"
import Products from "../pages/Products"
import ProductDetails from "../pages/ProductDetails"
import NotFound from "../pages/NotFound"
import UserLayout from "../UserLayout"
import UserAccount from "../pages/UserAccount"
import UserDetails from "../pages/UserDetails"

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
      
      <Route path="/users" element={<UserLayout />}>
        <Route path="details" element={<UserDetails />} />
        <Route path="account" element={<UserAccount />} />
      </Route>
      
    </Routes>
  )
}

export default Navigator