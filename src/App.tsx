import React from "react";

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage";
import { HomePage } from "./components/HomePage";
import { Nav } from "./components/Nav";
import { AddPost } from "./components/AddPost";
import { PostsList } from "./components/PostsList";
import { LoginPage } from "./components/LoginPage";
import { PostContextProvider } from "./components/context/AppContext";
import { Post } from "./components/Post";
import { Favourites } from "./components/Favourites";
import { doubleValue } from "./components/Helpers/doubleValue";

function App() {
  return (
    <PostContextProvider>
      <div className="App">
        <h1>Forum</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/addPost" element={<AddPost />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts/fav" element={<Favourites />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="/double" element={<doubleValue />} /> */}
        </Routes>
      </div>
    </PostContextProvider>
  );
}

export default App;
