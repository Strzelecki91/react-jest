import { usePosts } from "../context/Hooks/usePosts";

export const AddPost = () => {
  const { newPost, handleInput, handleSubmitNewPost } = usePosts();
  const { title, body } = newPost;
  return (
    <>
      <form onSubmit={(event) => handleSubmitNewPost(event, title, body)}>
        <label htmlFor="title">
          tytuł:
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="last-name">
          treść postu:
          <input
            type="text"
            id="body"
            name="body"
            value={body}
            onChange={handleInput}
          />
        </label>
        <button type="submit">Add Post</button>
      </form>
    </>
  );
};
