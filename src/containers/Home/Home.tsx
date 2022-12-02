import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {Post, PostsList} from "../../types";
import PostCard from "../../components/PostCard/PostCard";

const Home = () => {

  const {id} = useParams();
  const [posts, setPosts] = useState<Post[] | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      const postsResponse = await axiosApi.get<PostsList>('/posts.json');
      const postList = Object.keys(postsResponse.data).map(key => {
        const post = postsResponse.data[key];
        post.id = key
        return post;
      });
      setPosts(postList);
    } finally {
      //setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPosts().catch(console.error);
  }, [fetchPosts]);

  return (
    <div>
      {posts && (
        posts.map(post => (
          <PostCard key={post.id} datetime={post.datetime} title={post.title}/>
        ))
      )}
    </div>
  );
};

export default Home;