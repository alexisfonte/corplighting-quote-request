import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const [user, setUser] = useState(null)
  // const [count, setCount] = useState(0);
  // const [inventory, setInventory] = useState([]);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch("api/me").then((res) => {
    //   if (res.ok) {
    //     res.json().then((user) => {
    //       setUser(user);
    //       fetchCategories();
    //       fetchItems();
    //     });
    //   } else {
    //     res.json().then((data) => {
    //       setErrors(data.errors);
    //     });
    //   }
    // });
  // }, []);

  // const getInventory = () => {
  //   fetch("/api/items")
  //     .then((r) => r.json())
  //     .then((items) => {
  //       setInventory(items);
  //     });
  // };

  // const getCategories = () => {
  //   fetch("/api/categories")
  //     .then((r) => r.json())
  //     .then((categories) => {
  //       console.log(categories);
  //       setCategories(categories);
  //     });
  // };

  // const filter = (category) => {
  //   console.log(category);
  //   fetch(`/api/categories/${category}/items`)
  //     .then((r) => r.json())
  //     .then((items) => {
  //       // setCategories(category)
  //       setInventory(items);
  //       getSubcategories(category);
  //     });
  // };

  // const getSubcategories = (id) => {
  //   fetch(`/api/categories/${id}`)
  //     .then((r) => r.json())
  //     .then((category) => {
  //       setCategories([category]);
  //       console.log([category]);
  //     });
  // };

  // console.log(inventory);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/browse" element={<Inventory/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
  );
}

export default App;
