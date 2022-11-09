import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import products from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    console.log(product)
    const idx = cartItems.findIndex((x) => x.id === product.id);
    const newCart = [...cartItems];
    if (idx > -1) {
      newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
    } else {
      newCart.push({ ...product, qty: 1 });
    }
    setCartItems(newCart);
  };

  const onRemove = (product) => {
    // const exist = cartItems.find(x => x.id === product.id)
    if (product.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...product, qty: product.qty - 1 } : x
        )
      );
    }
  };

  const onRemove2 = (product) => {
    const idx = cartItems.findIndex(x => x.id === product.id)
    if(idx === -1) return
    setCartItems(cartItems.filter(x=> x.id !== product.id))
  }

 

  return (
    <div className="App container-fluid text-light mt-1">
      <Header countCart={cartItems.length} />
      <div className="row">
        <Main cartItems={cartItems} products={products} onAdd={onAdd} onRemove={onRemove2} />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default App;
