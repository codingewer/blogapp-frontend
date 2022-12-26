import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../bars/Navbar";
import PostCard from "../Post/PostCard";
import { resetResult } from "../Redux/Media/MediaSlice";
import { GetAllPosts } from "../Redux/Posts/PostSlice";
import "./HomePage.css";
import Leftpage from "./Leftpage";
import PopularPosts from "./PopularPosts";
import Bottombar from "../bars/Bottombar"

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    dispatch(GetAllPosts());
    dispatch(resetResult());
  }, [dispatch]);
  document.title = "Studblog | Teras";
  return (
    <>
      <Leftpage />
      <Navbar />
      <div id="home-page">
          {posts.map((post) => (
            <div key={post.ID}>
              <PostCard
                title={post.title}
                authorpp={post.sender.user_image.url}
                imgurl={post.image.url}
                authorname={post.sender.name}
                authorId={post.sender.ID}
                postId={post.ID}
              />
            </div>
          ))}
      </div>
        <PopularPosts />
        <Bottombar/>
    </>
  );
}

export default React.memo(Home);
