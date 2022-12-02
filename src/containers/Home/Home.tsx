import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {Post, PostsList} from "../../types";
import PostCard from "../../components/PostCard/PostCard";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const postsResponse = await axiosApi.get<PostsList>('/posts.json');
      let postList = null;
      if (postsResponse.data !== null) {
        postList = Object.keys(postsResponse.data).map(key => {
          const post = postsResponse.data[key];
          post.id = key
          return post;
        });
      }
      setPosts(postList);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts().catch(console.error);
  }, [fetchPosts]);

  let homePost: Post | ReactNode = (
    <h5>No posts yet</h5>
  );

  if (posts) {
    homePost = (posts.map(post => (
        <PostCard key={post.id} datetime={post.datetime} title={post.title}>
          <Link to={"/posts/" + post.id} className="btn btn-outline-secondary">Read more</Link>
        </PostCard>
      ))
    );
  }

  return (
    loading ? <Spinner/> :
      <div>
        {homePost}
      </div>
  );
};

export default Home;