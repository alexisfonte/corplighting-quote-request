import { useState, useEffect, createContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import TestPage from "./pages/TestPage";

export const UserContext = createContext("");
export const InventoryContext = createContext("");

function App() {
  const [user, setUser] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const navigate = useNavigate();

// CHECK TO SEE IF USER IS LOGGED IN
  useEffect(() => {
    fetch("/api/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          getInventory();
          getCategories();
        });
      } else {
        res.json().then((data) => {
          console.log(data)
          navigate('/login')
        });
      }
    });
  }, []);

  
  // IF USER IS LOGGED IN, GET EXISTING USER QUOTES
  // useEffect(() => {
  //   if (user !== null) {
  //     fetch(`/api/${user.id}/quotes`).then((res) => {
  //       if (res.ok) {
  //         res.json().then((myQuotes) => {
  //           setQuotes(myQuotes);
  //         });
  //       } else {
  //         res.json().then((data) => {
  //           console.log(data.errors);
  //         });
  //       }
  //     });
  //   }
  // }, [user]);
  
  const getInventory = () => {
    fetch("/api/inventory")
      .then((r) => r.json())
      .then((items) => {
        setInventory(items);
      });
  };

  const getCategories = () => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then((categories) => {
        // console.log(categories);
        setCategories(categories);
      });
  };

  const filter = (category) => {
    // console.log(category);
    fetch(`/api/categories/${category}/items`)
      .then((r) => r.json())
      .then((items) => {
        setInventory(items);
        setSubcategories(category);
      });
  };

  const getSubcategories = (id) => {
    fetch(`/api/categories/${id}`)
      .then((r) => r.json())
      .then((category) => {
        console.log(category)
        setSubcategories(category);
        // console.log(category);
      });
  };

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <InventoryContext.Provider value={{ inventory, categories, subcategories, getSubcategories }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Inventory />} >
              <Route path="/browse/:category?" element={<Inventory />} />
            </Route>
            <Route path="/test" element={<TestPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </InventoryContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
