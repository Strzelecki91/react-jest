import React from "react";
import { usePosts } from "../Hooks/usePosts";
export type PostItemType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostContextType = {
  post: PostItemType;
};

export const PostContext = React.createContext<PostContextType>(
  {} as PostContextType
);

type Props = {
  children: JSX.Element;
};
export const PostContextProvider = ({ children }: Props) => {
  const { post } = usePosts();

  return (
    <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>
  );
};
