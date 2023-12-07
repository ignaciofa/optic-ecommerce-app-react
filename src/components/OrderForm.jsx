import React, { useContext, useRef } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";

function OrderForm() {
  const { cartItems, totalPrice } = useContext(CartContext);

  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getFirestore();

    const collectionRef = collection(db, "orders");

    const order = {
      userName: userNameRef.current.value,
      userEmail: userEmailRef.current.value,
      items: cartItems,
      totalPrice: totalPrice,
    };

    addDoc(collectionRef, order).then((res) =>
      alert(`La orden ha sido enviada con éxito, su orden es: ${res.id}`)
    );
  };

  return (
    <div>
      <br></br>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 items-center"
      >
        <TextField
          inputRef={userNameRef}
          type="text"
          label="Ingrese su nombre completo"
          variant="outlined"
          className="w-[600px] text-black"
          size="small"
          required
        />
        <br></br> <br></br>
        <TextField
          inputRef={userEmailRef}
          type="email"
          label="Ingrese su email"
          variant="outlined"
          className="w-[600px] text-black"
          size="small"
          required
        />
          <br></br> <br></br>
        <Button type="submit" variant="contained" color="primary">
          Enviar orden
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;
