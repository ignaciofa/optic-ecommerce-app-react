import React, { useContext, useEffect, useState } from "react";

import { CircularProgress, Grid, Typography } from "@mui/material";

import { getFirestore, collection, getDocs } from "firebase/firestore";
//import { ping } from 'ldrs';

import { Link } from "react-router-dom";

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsRef = collection(db, "items");

    getDocs(itemsRef)
      .then((res) => {
        if (res.size === 0) {
          console.log("No results");
        }
        setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // ping.register();

  return (
    <div>
      {loading ? (
        <CircularProgress size={80} color="secondary" />
      ) : (
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Link
                to={`/detail/${item.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div>
                  <Typography variant="h4">{item.name}</Typography>

                  <img
                    src={item.url}
                    alt={item.name}
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Home;
