import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Typography } from "@mui/material";
import ItemCounter from "../components/ItemCounter";

function Detail() {
  const [item, setItem] = useState({});
  const { idProduct } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", idProduct);

    getDoc(itemRef).then((res) => {
      if (res.exists()) {
        setItem({ id: res.id, ...res.data() });
      }
    });
  }, [idProduct]);

  return (
    <div>
      <Typography variant="h3">{item.name}</Typography>
      <img src={item.url} alt={item.name} />
      <Typography variant="h4">${item.price}</Typography>
      <Typography variant="h5">{item.desc}</Typography>
      <ItemCounter id={item.id} />
    </div>
  );
}

export default Detail;
