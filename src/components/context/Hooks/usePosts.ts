import { useState } from "react";
import { PostItemType } from "../AppContext";
export type Data = {
  post: PostItemType;
  postList: PostItemType[];
  setPostList: React.Dispatch<React.SetStateAction<PostItemType[]>>;
  setPost: React.Dispatch<React.SetStateAction<PostItemType>>;
  getPostList: () => Promise<void>;
};
export const usePosts = (): Data => {
  const [postList, setPostList] = useState<PostItemType[]>([]);
  const [post, setPost] = useState<PostItemType>({
    id: 0,
    title: "",
    body: "",
    userId: 0,
  });
  const { id, title, body, userId } = post;

  const getPostList = async () => {
    const url = "https://dummyjson.com/posts";

    try {
      const data = await fetch(url);
      if (!data.ok) throw new Error("Something goes wrong");
      const posts = await data.json();
      console.log(posts);
      setPostList(posts.posts);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    post,
    postList,
    setPostList,
    setPost,
    getPostList,
  };
};
