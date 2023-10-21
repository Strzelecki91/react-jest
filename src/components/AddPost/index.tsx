import { usePosts } from "../context/Hooks/usePosts";

export const AddPost = () => {
  //   const { newPost, setPost, handleInput, handleSubmitNewPost } = usePosts();
  //   const { id, title, body } = newPost;
  //   const url = "https://dummyjson.com/posts";
  //   const updatePost = async (postId: number) => {
  //     if (postId <= 100) {
  //       try {
  //         const response = await fetch(`${url}/${postId}`, {
  //           method: "PUT",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             title: newPost.title,
  //             body: newPost.body,
  //           }),
  //         });

  //         if (!response.ok)
  //           throw new Error("Something went wrong while updating user");

  //         const data = await response.json();
  //         console.log(data);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }

  //     setPost(newPost);
  //   };
  return (
    <>
      {/* <form onSubmit={(event) => handleSubmitNewPost(event, id, title, body)}>
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
      </form> */}
    </>
  );
};
