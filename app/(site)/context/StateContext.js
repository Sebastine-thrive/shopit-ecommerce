"use client";
import React, { useState, createContext, useContext } from "react";
import { toast } from "react-hot-toast";

export const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const productExistsInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);

    if (productExistsInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
      setQty(1);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantity(
      (prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    let updatedItem;
    if (value === "increase") {
      updatedItem = { ...foundProduct, quantity: foundProduct.quantity + 1 };
    } else if (value === "decrease") {
      if (foundProduct.quantity > 1) {
        updatedItem = { ...foundProduct, quantity: foundProduct.quantity - 1 };
      }
    }

    if (updatedItem) {
      const updatedCartItems = [...newCartItems, updatedItem];
      const sortedCartItems = updatedCartItems.sort((a, b) =>
        a._id.localeCompare(b._id)
      );

      setCartItems(sortedCartItems);
      setTotalPrice((prevTotalPrice) => {
        const priceChange =
          value === "increase" ? foundProduct.price : -foundProduct.price;
        return prevTotalPrice + priceChange;
      });
      setTotalQuantity(
        (prevTotalQuantity) =>
          prevTotalQuantity + (value === "increase" ? 1 : -1)
      );
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantity,
        setTotalQuantity,
        qty,
        incQty,
        decQty,
        onAdd,
        onRemove,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
// export const ContextDataProvider = useContext(Context);
