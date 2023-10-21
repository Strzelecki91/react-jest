import { useEffect } from "react";
import { usePosts } from "../context/Hooks/usePosts";

export const Post = () => {
  const {
    post,
    setPost,
    newPost,
    // setNewPost,

    deletePost,
    handleInput,
    handleSubmit,
  } = usePosts();
  const { id, title, body, userId } = post;

  // useEffect(() => {
  //   setUserItem(user);
  //   setNewUserItem(user);
  // }, [setNewUserItem, setUserItem, user]);

  return (
    <>
      <p>
        {id} - {title} {userId}
      </p>
      <button onClick={() => deletePost(id)}>Delete</button>
      <form onSubmit={(event) => handleSubmit(event, id)}>
        <label htmlFor="title">
          Tytuł:
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="body">
          Treść postu:
          <input
            type="text"
            id="body"
            name="body"
            value={newPost.body}
            onChange={handleInput}
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </>
  );
};
