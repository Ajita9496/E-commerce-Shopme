import React, { useState } from 'react';
import Nav from './nav';
import Rout from './rout';
import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Productdetail from './productdetail';
import Toast from './toast'; // Import the Toast component

const App = () => {
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(Productdetail);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const searchbtn = (searchTerm) => {
    const filteredProducts = Productdetail.filter((product) =>
      product.Cat.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProduct(filteredProducts);
  };

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  const addtocart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setToastMessage('This Product is already added to cart');
      setShowToast(true);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      setToastMessage('Product is added to cart');
      setShowToast(true);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        <Footer />
      </BrowserRouter>
      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
    </>
  );
};

export default App;
