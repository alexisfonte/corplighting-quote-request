import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function App() {
  const [count, setCount] = useState(0);
  const [inventory, setInventory] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  const getInventory = () => {
    fetch("/api/items")
      .then((r) => r.json())
      .then((items) => {
        setInventory(items);
      });
  };

  const getCategories = () => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then((categories) => {
        console.log(categories);
        setCategories(categories);
      });
  };

  const filter = (category) => {
    console.log(category);
    fetch(`/api/categories/${category}/items`)
      .then((r) => r.json())
      .then((items) => {
        // setCategories(category)
        setInventory(items);
        getSubcategories(category);
      });
  };

  const getSubcategories = (id) => {
    fetch(`/api/categories/${id}`)
      .then((r) => r.json())
      .then((category) => {
        setCategories([category]);
        console.log([category]);
      });
  };

  console.log(inventory);
  return (
    <div className="">
      <div className="">
        <div className="">
          <button onClick={() => getCategories()}>Get Categories</button>
          <ul>
            {categories.map(function (cat) {
              console.log(cat);
              if (cat.subcategories) {
                return (
                  <>
                    <li key={cat.id} onClick={(e) => filter(cat.id)}>
                      {cat.name}
                    </li>
                    <ul>
                      {cat.subcategories.map((sub) => (
                        <li key={sub.id} onClick={(e) => filter(sub.id)}>
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  </>
                );
              } else {
                return (
                  <li key={cat.id} onClick={(e) => filter(cat.id)}>
                    {cat.name}
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="">
          <button onClick={() => getInventory()}>Get Inventory</button>
          {inventory.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
