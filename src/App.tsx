import React from "react";

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage";
import { HomePage } from "./components/HomePage";
import { Nav } from "./components/Nav";
import { PostsList } from "./components/PostsList";

function App() {
  return (
    <div className="App">
      <h1>Forum</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsList />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
