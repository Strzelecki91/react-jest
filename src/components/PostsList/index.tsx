import { useEffect, useState, useContext } from "react";
import { usePosts } from "../context/Hooks/usePosts";
import { Link, useParams } from "react-router-dom";
import { DeleteButton } from "../DeleteButton";

import { Post } from "../Post";
import { PostContext } from "../context/AppContext";
import { Favourites } from "../Favourites";

export const PostsList = () => {
  // const { id } = useParams();
  const { cartFav, addToFav, isVisible, postList } = useContext(PostContext);

  return (
    <div>
      <ul>
        {postList.map((post) => {
          return (
            <li key={post.id}>
              {/* <Post /> */}
              {post.id}
              {post.title}
              {/* {post.body}

              {post.userId} */}
              <button
                onClick={() => addToFav(post.id)}
                disabled={isVisible(post.id)}
              >
                Dodaj do ulubinych
              </button>
              <Link to={`/posts/${post.id}`}>Post</Link>
            </li>
          );
        })}
      </ul>
      <Favourites />
      <Link to="/posts/addPost">Dodaj post</Link>
    </div>
  );
};
