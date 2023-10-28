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

  const addLike = () => {};
  return (
    <div>
      <ul>
        {postList.map((post) => {
          return (
            <li key={post.id}>
              {/* <Post /> */}
              <form className="form_box">
                <label>
                  <input type="text" defaultValue={post.title} />
                </label>{" "}
                <label>
                  <textarea
                    name=""
                    id=""
                    cols={80}
                    rows={10}
                    defaultValue={post.body}
                  ></textarea>
                </label>
                <div>
                  <button
                    onClick={() => addToFav(post.id)}
                    disabled={isVisible(post.id)}
                  >
                    Dodaj do ulubionych
                  </button>
                  <button
                    onClick={() => addLike()}
                    disabled={isVisible(post.id)}
                  >
                    Polub
                  </button>
                  <Link to={`/posts/${post.id}`}>Post</Link>
                </div>
              </form>
              {post.id}
              {/* {post.title} */}
              {/* {post.body}

              {post.userId} */}
            </li>
          );
        })}
      </ul>
      <Favourites />
      <Link to="/posts/addPost">Dodaj post</Link>
    </div>
  );
};
