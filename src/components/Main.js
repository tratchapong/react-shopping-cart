import React from "react";
import Product from "./Product";

function Main(props) {
  const { products, onAdd, cartItems, onRemove } = props;
  const selectedId = cartItems.map((x) => x.id);

  return (
    <main className="col me-1 bg-warning rounded pt-3 pb-5">
      <h2 className="fs-3 fs-sm-5 border p-2 rounded ">Products</h2>
      <div className="row text-white">
        {products.map((product, i) => (
          <Product
            key={product.id}
            product={product}
            onAdd={onAdd}
            onRemove={onRemove}
            sel={selectedId.includes(product.id)}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
