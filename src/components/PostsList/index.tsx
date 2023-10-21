import { useEffect } from "react";
import { usePosts } from "../context/Hooks/usePosts";
import { Link } from "react-router-dom";
import { DeleteButton } from "../DeleteButton";
import { Post } from "../Post";

export const PostsList = () => {
  const { postList, getPostList } = usePosts();

  useEffect(() => {
    getPostList();
  }, []);
  return (
    <div>
      <ul>
        {postList.map((post) => {
          return (
            <li key={post.id}>
              <Post />
              {/* {post.id} {post.title} {post.body} {post.userId} */}
            </li>
          );
        })}
      </ul>
      <Link to="/posts/addPost">Dodaj post</Link>
    </div>
  );
};
