import { useEffect, useContext } from "react";
import { PostContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { usePosts } from "../context/Hooks/usePosts";

export const Favourites = () => {
  const { cartFav } = useContext(PostContext);

  return (
    <>
      <h2>Ulubione</h2>
      {cartFav.map((item) => (
        <li key={item.id}>
          {item.id} {item.title}
        </li>
      ))}
    </>
  );
};
