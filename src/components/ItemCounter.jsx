import React, { useContext, useState } from "react";
import { Button, Typography } from "@mui/material";
import { CartContext } from "../context/CartContext";

function ItemCounter({ id }) {
  const [counter, setCounter] = useState(1);
  const { addItem } = useContext(CartContext);

  const handleAddCounter = () => setCounter((prev) => prev + 1);
  const handleRemoveCounter = () =>
    counter > 1 && setCounter((prev) => prev - 1);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleRemoveCounter}
        >
          -
        </Button>
        <Typography variant="h5">{counter}</Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleAddCounter}
        >
          +
        </Button>
      </div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => addItem(id, counter)}
      >
        Añadir al carrito
      </Button>
    </div>
  );
}

export default ItemCounter;
