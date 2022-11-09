import React from "react";

function Header(props) {
  const { countCart } = props;
  return (
    <header className="row position-sticky top-0 bg-primary rounded mb-1 align-items-end">
      <div className="col-4">
        <a className="text-reset" href="#/">
          <div className="display-5 p-2 rounded-3">
            <i className="bi bi-shop"></i> CC Shop
          </div>
        </a>
      </div>
      <div className="col text-end me-2">
        <a className="text-reset" href="#">
          <div>
            <i className="display-2 bi bi-cart-fill position-relative">
              <span className=" fs-5 position-absolute shadow badge rounded-pill bg-warning">
                {countCart}
              </span>
            </i>
          </div>
        </a>
      </div>
    </header>
  );
}

export default Header;
