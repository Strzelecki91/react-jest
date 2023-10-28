import { useEffect, useState, useContext } from "react";
import "../Post/post.scss";
import { usePosts } from "../context/Hooks/usePosts";
import { PostContext, PostItemType } from "../context/AppContext";
import { useParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();
  const {
    post,
    setPost,
    postList,
    getSinglePost,
    deletePost,
    getPostList,
    handleInput,
    handleSubmit,
  } = useContext(PostContext);

  // const [post, setPost] = useState<PostItemType>();
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
  // console.log(id, title);
  return (
    <>
      <p>
        {id} -{post.title} {post.userId}
      </p>
      {id ? (
        <div>
          <form
            className="form_box"
            onSubmit={(event) => handleSubmit(event, parseInt(id))}
          >
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
              <textarea
                name="body"
                id="body"
                defaultValue={post.body}
                cols={80}
                rows={10}
              ></textarea>
            </label>
          </form>
          <button type="submit">Update</button>
          <button onClick={() => deletePost(parseInt(id))}>Delete</button>
        </div>
      ) : (
        <span>brak id</span>
      )}
    </>
  );
};
