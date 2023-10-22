import React, { ChangeEvent, FormEvent } from "react";
import { usePosts } from "../Hooks/usePosts";

export type PostItemType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostContextType = {
  post: PostItemType;
  //   newPost: PostItemType;
  postList: PostItemType[];
  cartFav: PostItemType[];
  postItem: PostItemType[];
  setPostList: React.Dispatch<React.SetStateAction<PostItemType[]>>;
  setPost: React.Dispatch<React.SetStateAction<PostItemType>>;
  //   setNewPost: React.Dispatch<React.SetStateAction<PostItemType>>;
  getPostList: () => Promise<void>;
  addToFav: (id: number) => void;
  isVisible: (id: number) => boolean;

  getSinglePost: (id: string) => Promise<void>;
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

export const PostContext = React.createContext<PostContextType>(
  {} as PostContextType
);

type Props = {
  children: JSX.Element;
};
export const PostContextProvider = ({ children }: Props) => {
  const {
    post,
    cartFav,
    // newPost,
    postList,
    postItem,
    setPostList,
    setPost,
    addToFav,
    isVisible,
    // setNewPost,
    getPostList,
    getSinglePost,
    deletePost,
    // updatePost,
    handleSubmitNewPost,
    handleSubmit,
    handleInput,
  } = usePosts();

  return (
    <PostContext.Provider
      value={{
        post,
        cartFav,
        // newPost,
        postList,
        postItem,
        setPostList,
        setPost,
        addToFav,
        isVisible,
        // setNewPost,
        getPostList,
        getSinglePost,

        deletePost,
        // updatePost,
        handleSubmitNewPost,
        handleSubmit,
        handleInput,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
