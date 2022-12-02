import React, {useCallback, useEffect, useState} from 'react';
import PostForm from "../../components/PostForm/PostForm";
import axiosApi from "../../axiosApi";
import {useNavigate, useParams} from "react-router-dom";
import {PostFormType} from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const EditPost = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState<PostFormType | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOnePost = useCallback(async () => {
    setLoading(true);
    try {
      const postResponse = await axiosApi.get<PostFormType>('/posts/' + id + '.json');
      setPost(postResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchOnePost().catch(console.error);
  }, [fetchOnePost]);

  const updatePost = async (post: PostFormType) => {
    try {
      await axiosApi.put('/posts/' + id + '.json', post);
      navigate('/');
    } finally {
    }
  };

  return (
    loading ? <Spinner/> :
      <div className="row mt-2">
        <div className="col">
          <h1>Edit post</h1>
          {post && (
            <PostForm onSubmit={updatePost} existingPost={post}/>
          )}
        </div>
      </div>
  );
};

export default EditPost;