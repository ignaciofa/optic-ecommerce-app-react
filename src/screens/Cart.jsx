import React, { useContext, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { CartContext } from "../context/CartContext";
import OrderForm from "../components/OrderForm";

function Cart() {
  const { cart, totalPrice, cartItems, fetchCartItems, emptyCart, removeItem } =
    useContext(CartContext);

  useEffect(() => {
    if (cart.length > 0) {
      fetchCartItems();
    }
  }, []);

  return (
    <div>
      {cartItems?.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">{item.name}</Typography>
          <img src={item.url} alt={item.name} />
          <Typography variant="h4">{item.price}</Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={() => removeItem(item.id)}
          >
            🗑️
          </Button>
        </div>
      ))}
      <br></br>
      <Typography variant="h4">Precio total : {totalPrice}</Typography>
      <Button variant="contained" color="secondary" onClick={emptyCart}>
        Vaciar carrito
      </Button>
      <br></br>
      <OrderForm />
      <br></br>
    </div>
  );
}

export default Cart;
