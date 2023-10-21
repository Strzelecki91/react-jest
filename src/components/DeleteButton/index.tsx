import { PostContext } from "../context/AppContext";
import { usePosts } from "../context/Hooks/usePosts";

export const DeleteButton = () => {
  const { post, deletePost } = usePosts();
  const { id, title, body, userId } = post;
  return (
    <>
      <button onClick={() => deletePost(id)}>Usuń post</button>
    </>
  );
};
