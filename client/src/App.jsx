import { useState, useEffect, createContext } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import TestPage from "./pages/TestPage";
import Account from "./pages/Account";
import Loading from "./components/Loading";
import CategorySidebar from "./components/CategorySidebar";
import InventoryGrid from "./components/InventoryGrid";
import ProductDetails from "./pages/ProductDetails";
import Nav from "./components/navbar/Nav";

export const UserContext = createContext("");
export const InventoryContext = createContext("");
export const AppContext = createContext("");

function App() {
  const { category, page, itemId, itemName } = useParams();
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([])
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [cart, setCart] = useState([]);
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
        });
      }
      getCategories();
      getCart();
      setIsLoading(false);
    });
  }, []);
  
  // GET CART SESSION
  const getCart = () => {
      fetch("/api/cart").then((res) => {
        if (res.ok) {
          res.json().then((cart) => {
            setCart(cart.cart.cart_items)
            console.log(cart.cart.cart_items.length)
          });
        } else {
          res.json().then((data) => {
            console.log(data);
          });
        }
      });
  }

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
          console.log(category);
          setSubcategories(category);
          filter(category.id, pg);
        });
      } else {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };

  const getProduct = (item) => {
    // console.log(item);
    fetch(`/api/items/${item}`).then((res) => {
      if (res.ok) {
        res.json().then((product) => {
          setProduct(product);
          setSubcategories(product.category);
        });
      } else {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };

  const getSimilarProducts = (item, pg = 1) => {
    fetch(`/api/similar-items/${item}/?page=${pg}`).then((res) => {
      if (res.ok) {
        res.json().then((product) => {
          setSimilarProducts(product)
        });
      } else {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
  };

  const handleAddToCart = (e, productId, quantity) => {
    e.preventDefault(); 
    
    fetch(`/api/cart/add/${productId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quantity: quantity
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((cart) => {
          setCart(cart.cart)
          getCart();
        });
      }
    });
  };

  const handleUpdateCart = (productId, quantity) => {
    fetch(`/api/cart/update/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quantity: quantity
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((cart) => {
          setCart(cart.cart.cart_items)
          getCart();
        });
      }
    });
  };

  const handleRemoveFromCart = (productId) => {
    fetch(`/api/cart/remove/${productId}`, { method: "DELETE" }).then((res) => {
      res.json().then((data) => {
        setCart(data.cart.cart_items)
        getCart();
      })
    });
  }

  if (isLoggedIn === null || isLoading) return <Loading />;

  return (
    <div>
      <AppContext.Provider value={{ isLoading, setIsLoading }}>
        <UserContext.Provider
          value={{ user, setUser, isLoggedIn, setIsLoggedIn, cart, setCart, handleAddToCart, handleUpdateCart, handleRemoveFromCart }}
        >
          <InventoryContext.Provider
            value={{
              inventory,
              categories,
              subcategories,
              product,
              similarProducts,
              setSubcategories,
              getProduct,
              getSimilarProducts,
              getSubcategories,
              filter,
              getInventory,
            }}
          >
            {/* <Nav/> */}
            <Routes>
              <Route
                path="/login"
                element={
                  !isLoggedIn ? <Login /> : <Navigate to="/browse" />
                }
              />
              <Route path="/" element={<Home />} />
              <Route element={<Inventory />}>
                <Route path="/browse" element={<CategorySidebar />} />
                <Route path="/search" element={<CategorySidebar />} />
              </Route>
              <Route
                path="/p/:product_name"
                element={<ProductDetails />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/my-account"
                element={isLoggedIn ? <Account /> : <Navigate to="/login" />}
              />
              <Route path="/test" element={<Inventory />} />
            </Routes>
          </InventoryContext.Provider>
        </UserContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
