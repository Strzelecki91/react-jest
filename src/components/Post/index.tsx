import { useEffect, useState, useContext } from "react";

import { usePosts } from "../context/Hooks/usePosts";
import { PostContext, PostItemType } from "../context/AppContext";
import { useParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();
  const { postList, deletePost, handleInput, handleSubmit } =
    useContext(PostContext);

  const [post, setPost] = useState<PostItemType>({
    id: 0,
    title: "",
    body: "",
    userId: 0,
  });
  useEffect(() => {
    console.log(id, postList, "ds");
    if (id) {
      const [currentPost] = postList.filter(
        ({ id: postId }) => `${postId}` === id
      );
      if (currentPost) setPost(currentPost);
      console.log(postList + "post");
    }
  }, [id]);

  return (
    <>
      <p>
        {id} - {post.title} {post.userId}
      </p>
      {id ? (
        <div>
          <button onClick={() => deletePost(parseInt(id))}>Delete</button>
          <form onSubmit={(event) => handleSubmit(event, parseInt(id))}>
            <label htmlFor="title">
              Tytuł:
              <input
                type="text"
                id="title"
                name="title"
                value={post.title}
                onChange={handleInput}
              />
            </label>
            <label htmlFor="body">
              Treść postu:
              <input
                type="text"
                id="body"
                name="body"
                value={post.body}
                onChange={handleInput}
              />
            </label>
            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        <span>brak id</span>
      )}
    </>
  );
};
