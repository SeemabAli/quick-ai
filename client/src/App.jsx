import React from "react";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import WriteArticle from "./pages/WriteArticle.jsx";
import RemoveBackground from "./pages/RemoveBackground.jsx";
import GenerateImages from "./pages/GenerateImages.jsx";
import Community from "./pages/Community.jsx";
import BlogTitles from "./pages/BlogTitles.jsx";
import Layout from "./pages/Layout.jsx";
import { Routes, Route } from "react-router";
import ReviewResume from "./pages/Reviewresume.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="review-resume" element={<ReviewResume />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="remove-background" element={<RemoveBackground />} />
          <Route path="generate-images" element={<GenerateImages />} />
          <Route path="community" element={<Community />} />
          <Route path="blog-titles" element={<BlogTitles />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
