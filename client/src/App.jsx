import { useState, useEffect, createContext } from "react";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import TestPage from "./pages/TestPage";
import Account from "./pages/Account";
import Loading from "./pages/Loading";
import CategorySidebar from "./components/CategorySidebar";
import InventoryGrid from "./components/InventoryGrid";
import ProductDetails from "./pages/ProductDetails";

export const UserContext = createContext("");
export const InventoryContext = createContext("");
export const AppContext = createContext("");

function App() {
  const { category, page, itemId, itemName } = useParams()
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [product, setProduct] = useState(null)
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [cart, setCart] = useState(null)
  const navigate = useNavigate();

  // CHECK TO SEE IF USER IS LOGGED IN
  useEffect(() => {
    setIsLoading(true);
    fetch("/api/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsLoggedIn(true);
        });
      } else {
        res.json().then((data) => {
          console.log(data);
          setIsLoggedIn(false);
          // navigate('/login')
        });
      }
      getCategories();
      setIsLoading(false);
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

  const getInventory = (pg = 1) => {
    // setIsLoading(true)
    fetch(`/api/inventory/?page=${pg}`)
      .then((r) => r.json())
      .then((items) => {
        setInventory(items);
        // setIsLoading(false)
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

  const filter = (category, pg = 1) => {
    // console.log("heyyy");
    setIsLoading(true);
    // console.log(category);
    fetch(`/api/categories/${category}/items/?page=${pg}`)
      .then((r) => r.json())
      .then((items) => {
        // console.log(items);
        setInventory(items);
        // setSubcategories(category);
        setIsLoading(false);
      });
  };

  const getSubcategories = (path, pg) => {
    // setIsLoading(true)
    fetch(`/api/categories/${path}`).then((res) => {
      if (res.ok) {
        res.json().then((category) => {
          // console.log(category);
          setSubcategories(category);
          filter(category.path, pg);
        });
      } else {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };

  const getProduct = (item) => {
    console.log(item)
    fetch(`/api/items/${item}`).then((res) => {
      if (res.ok) {
        res.json().then((product) => {
          setProduct(product)
        })
      } else {
        res.json().then((data) => {
          console.log(data)
        })
      }
    })
  }

  const getSimilarProducts = (item, pg = 1) => {
    fetch(`/api/similar-items/${item}/?page=${pg}`).then((res) => {
      if (res.ok) {
        res.json().then((product) => {
          console.log(product)
        })
      } else {
        res.json().then((data) => {
          console.log(data)
        })
      }
    })
  }

  if (isLoggedIn === null || isLoading) return <Loading />;

  return (
    <div>
      <AppContext.Provider value={{ isLoading, setIsLoading }}>
        <UserContext.Provider
          value={{ user, setUser, isLoggedIn, setIsLoggedIn }}
        >
          <InventoryContext.Provider
            value={{
              inventory,
              categories,
              subcategories,
              product, 
              getProduct,
              getSimilarProducts,
              getSubcategories,
              filter,
              getInventory,
            }}
          >
            <Routes>
              <Route
                path="/login"
                element={
                  !isLoggedIn ? <Login /> : <Navigate to="/browse/inventory" />
                }
              />
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Inventory />}>
                <Route path="inventory" element={<InventoryGrid />} />
                <Route path=":category" element={<CategorySidebar />}>
                  <Route path=":page" element={<CategorySidebar />} />
                </Route>
              </Route>
              <Route path="/products/:itemId/:itemName" element={<ProductDetails/>} />
              <Route path="/test" element={<TestPage/>} />
              <Route
                path="/my-account"
                element={isLoggedIn ? <Account /> : <Navigate to="/login" />}
              />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </InventoryContext.Provider>
        </UserContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
