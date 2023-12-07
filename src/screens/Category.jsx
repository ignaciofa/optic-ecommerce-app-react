import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CircularProgress, Grid, Typography } from "@mui/material";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
//import { ping } from 'ldrs';

function Category() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryFilter = query(
      collection(db, "items"),
      where("category", "==", idCategory)
    );

    getDocs(queryFilter)
      .then((res) => {
        if (res.size === 0) {
          console.log("No results");
        }
        setItems(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [idCategory]);

  //  ping.register();

  return (
    <div>
      <Typography variant="h6">Usted está buscando: {idCategory}</Typography>
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
                  <Typography variant="h6">{item.name}</Typography>
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

export default Category;
