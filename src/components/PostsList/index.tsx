import { useEffect } from "react";
import { usePosts } from "../context/Hooks/usePosts";

export const PostsList = () => {
  const { getPostList } = usePosts();

  useEffect(() => {
    getPostList();
  }, []);
  return <div></div>;
};
