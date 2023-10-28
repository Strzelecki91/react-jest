import { useEffect, useContext } from "react";
import { PostContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { usePosts } from "../context/Hooks/usePosts";
import { Post } from "../Post";

export const Favourites = () => {
  const { id } = useParams();
  const { cartFav, handleInput, deletePost, getSinglePost, handleSubmit } =
    useContext(PostContext);
  useEffect(() => {
    // console.log(id, postList, "ds");
    if (id) {
      getSinglePost(id);
      // getPostList();
      //   const [currentPost] = postList.filter(
      //     ({ id: postId }) => `${postId}` === id
      //   );
      //   if (currentPost) setPost(currentPost);
      // console.log(id, title, "?");
    }

    // console.log(postList + "post");
  }, []);
  return (
    <>
      <h2>Ulubione</h2>
      {cartFav.map((item) => (
        <li key={item.id}>
          {/* {item.id} {item.title} */}
          <form
            className="form_box"
            onSubmit={(event) => handleSubmit(event, item.id)}
          >
            <label htmlFor="title">
              Tytuł:
              <input
                type="text"
                id="title"
                name="title"
                value={item.title}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="body">
              Treść postu:
              <textarea
                name="body"
                id="body"
                defaultValue={item.body}
                cols={80}
                rows={10}
              ></textarea>
            </label>
            <div>
              <button type="submit">Update</button>
              <button onClick={() => deletePost(item.id)}>Delete</button>
            </div>
          </form>
        </li>
      ))}
    </>
  );
};
