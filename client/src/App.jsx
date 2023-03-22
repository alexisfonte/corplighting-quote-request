import { useState, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  // const [count, setCount] = useState(0);
  // const [inventory, setInventory] = useState([]);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch("/api/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
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
      {/* <Home/> */}
      <Inventory/>
      {/* <NotFound/> */}
      {/* <Cart/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </>
  );
}

export default App;
