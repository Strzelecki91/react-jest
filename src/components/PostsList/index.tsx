import { useEffect, useState } from "react";
import { usePosts } from "../context/Hooks/usePosts";
import { Link, useParams } from "react-router-dom";
import { DeleteButton } from "../DeleteButton";

import { Post } from "../Post";
import { PostContext } from "../context/AppContext";
export type CartFavType = {
  id: number;
  title: string;
  body: string;
};
type PostFavItemProps = {
  postItem: CartFavType;
};
export const PostsList = () => {
  // const { id } = useParams();
  const [cartFav, setCartFav] = useState<CartFavType[]>([]);
  const { post, postList, getSinglePost, getPostList } = usePosts();
  console.log(post);
  const isVisible = (id: number) => {
    const isInCartFav = cartFav.some((favElement) => favElement.id === id);
    return isInCartFav;
  };
  const addToFav = (id: number) => {
    const [postItem] = postList.filter((postItem) => postItem.id === id);
    const isContainFavArray = cartFav.some(
      (favElement) => favElement.id === postItem.id
    );
    if (!isContainFavArray) setCartFav((prev) => [...prev, postItem]);
  };
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
                disabled={cartFav.some(
                  (favElement) => favElement.id === post.id
                )}
              >
                Dodaj do ulubinych
              </button>
              <Link to={`/posts/${post.id}`}>Post</Link>
            </li>
          );
        })}
      </ul>

      <Link to="/posts/addPost">Dodaj post</Link>
    </div>
  );
};
