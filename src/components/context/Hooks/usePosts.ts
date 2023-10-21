import { ChangeEvent, FormEvent, useState } from "react";
import { PostItemType } from "../AppContext";
import { DeleteButton } from "../../DeleteButton";
export type Data = {
  post: PostItemType;
  //   newPost: PostItemType;
  postList: PostItemType[];
  setPostList: React.Dispatch<React.SetStateAction<PostItemType[]>>;
  //   setPost: React.Dispatch<React.SetStateAction<PostItemType>>;
  //   setNewPost: React.Dispatch<React.SetStateAction<PostItemType>>;
  getPostList: () => Promise<void>;
  deletePost: (postId: number) => Promise<void>;
  //   updatePost: (postId: number) => Promise<void>;
  handleSubmitNewPost: (
    event: FormEvent<HTMLFormElement>,
    id: number,
    title: string,
    body: string
  ) => Promise<void>;
  handleSubmit: (event: FormEvent<HTMLFormElement>, postId: number) => void;
  handleInput: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const usePosts = (
  setList?: React.Dispatch<React.SetStateAction<PostItemType[]>>
): Data => {
  const [postList, setPostList] = useState<PostItemType[]>([]);
  const [post, setPost] = useState<PostItemType>({
    id: 0,
    title: "",
    body: "",
    userId: 0,
  });

  const { id, title, body, userId } = post;
  const url = "https://dummyjson.com/posts";
  const getPostList = async () => {
    try {
      const data = await fetch(`${url}?limit=10`);
      if (!data.ok) throw new Error("Something goes wrong");
      const posts = await data.json();
      console.log(posts);
      setPostList(posts.posts);
    } catch (error) {
      console.log(error);
    }
  };
  const addNewPost = async (id: number, title: string, body: string) => {
    try {
      const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          title,
          body,
        }),
      });

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId: number) => {
    if (postId <= 100) {
      try {
        const data = await fetch(`${url}/${postId}`, {
          method: "DELETE",
        });
        if (!data.ok) throw new Error("Something goes wrong");
        const posts = await data.json();
        console.log(posts);
        alert("usunięto");
      } catch (error) {
        console.log(error);
      }
    }
    setList?.((prev) => prev.filter(({ id }) => id !== postId));
    console.log(postList);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>, postId: number) => {
    event.preventDefault();

    // updatePost(postId);
  };

  const handleSubmitNewPost = async (
    event: FormEvent<HTMLFormElement>,
    id: number,
    title: string,
    body: string
  ) => {
    event.preventDefault();

    if (title.length > 2) {
      const newPost = await addNewPost(id, title, body);
      setPostList((prev) => [...prev, newPost]);
    }
  };

  return {
    post,
    // newPost,
    postList,

    // setPost,
    // setNewPost,
    getPostList,
    deletePost,
    setPostList,
    // updatePost,
    handleSubmitNewPost,
    handleSubmit,
    handleInput,
  };
};
