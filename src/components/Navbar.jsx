import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "darkgray" }}>
      <Toolbar>
        <Typography
          variant="h4"
          component={Link}
          to="/"
          sx={{ color: "black", textDecoration: "mark" }}
        >
          Home
        </Typography>
        <NavLink
          to="/category/sun"
          style={{ color: "black", textDecoration: "strong", marginLeft: "190px" }}
        >
          SOL
        </NavLink>
        <NavLink
          to="/category/read"
          style={{ color: "black", textDecoration: "none", marginLeft: "80px" }}
        >
          LECTURA
        </NavLink>
        <NavLink
          to="/category/sport"
          style={{ color: "black", textDecoration: "none", marginLeft: "80px" }}
        >
          DEPORTES
        </NavLink>
        <div style={{ flexGrow: 1 }} />
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
