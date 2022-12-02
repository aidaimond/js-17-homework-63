import React, {useState} from 'react';
import PostForm from "../../components/PostForm/PostForm";
import axiosApi from "../../axiosApi";
import {Post, PostFormType} from "../../types";
import {useNavigate} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const datetime = new Date().toString();

const Add = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (postForm: PostFormType) => {
    setLoading(true);
    const post = {
      ...postForm,
      datetime: datetime,
    };

    try {
      await axiosApi.post<Post>('/posts.json', post);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    loading ? <Spinner/> :
    <div className="row mt-2">
      <div className="col">
        <h1>Add new post</h1>
        <PostForm onSubmit={onFormSubmit}/>
      </div>
    </div>
  );
};

export default Add;