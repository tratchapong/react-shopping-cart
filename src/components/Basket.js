import React from "react";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  let itemPrices = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  let tax = itemPrices * 0.07;
  let shipping = itemPrices === 0 || itemPrices > 3000 ? 0 : 50;
  let total = itemPrices + tax + shipping;

  return (
    <aside className="col-4 bg-info rounded pt-3 pb-5 fs-5">
      <h2 className="fw-light fs-3 border p-2 rounded  mb-3">
        Cart Items
      </h2>
      <div> {cartItems.length === 0 && <div>Cart is Empty</div>} </div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-5">{item.name}</div>
          <div className="col-3">
            <button
              className="btn btn-sm btn-outline-secondary me-1"
              onClick={() => onAdd(item)}
            >
              +
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => onRemove(item)}
            >
              -
            </button>
          </div>
          <div className="col text-end">
            {item.qty} x ${item.price}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col">Items Price</div>
            <div className="col text-end">${itemPrices.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col">Tax</div>
            <div className="col text-end">${tax.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col">Shipping</div>
            <div className="col text-end">${shipping.toFixed(2)}</div>
          </div>
          <div className="row fw-bold">
            <div className="col">Total</div>
            <div className="col text-end border rounded-3">
              ${total.toFixed(2)}
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

export default Basket;
