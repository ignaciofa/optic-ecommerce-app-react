import React, { useContext } from "react";
import { Badge, Typography } from "@mui/material";
import { CartContext } from "../context/CartContext";

function CartWidget() {
  const { itemsInCart } = useContext(CartContext);

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Typography variant="h6">🛒</Typography>
      <Badge badgeContent={itemsInCart} color="secondary">
        <Typography variant="body1">{itemsInCart}</Typography>
      </Badge>
    </div>
  );
}

export default CartWidget;
