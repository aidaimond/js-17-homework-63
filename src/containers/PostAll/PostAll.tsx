import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {Post} from "../../types";
import axiosApi from "../../axiosApi";
import PostCard from "../../components/PostCard/PostCard";
import Spinner from "../../components/Spinner/Spinner";

const PostAll = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState<Post | null>(null);

  const fetchOnePost = useCallback(async () => {
    try {
      const postResponse = await axiosApi.get<Post>('/posts/' + id + '.json');
      setPost(postResponse.data);
    } finally {
    }
  }, [id]);

  useEffect(() => {
    fetchOnePost().catch(console.error);
  }, [fetchOnePost]);

  const remove = async () => {
    await axiosApi.delete('/posts/' + id + '.json');
    navigate('/');
  };

  return (
    <div>
      {post ? (
        <PostCard datetime={post.datetime} title={post.title} description={post.description}>
          <button className="btn btn-outline-secondary m-2" onClick={remove}>Remove</button>
          <Link to={"/posts/" + id + "/edit"} className="btn btn-outline-secondary m-2">Edit</Link>
        </PostCard>
      ): <Spinner/>}
    </div>
  );
};

export default PostAll;