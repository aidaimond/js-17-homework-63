import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {Post} from "../../types";

const datetime = new Date().toString();

const PostForm = () => {
  const navigate = useNavigate();

  const [postForm, setPostForm] = useState({
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);

  const postFormChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPostForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
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
      <form onSubmit={onFormSubmit}>
        <h1>Add new post</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title" type="text" name="title"
            className="form-control"
            onChange={postFormChanged}
            value={postForm.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description" name="description"
            className="form-control"
            onChange={postFormChanged}
            value={postForm.description}
          />
        </div>
        <button type="submit" className="btn btn-primary my-4">
          Save
        </button>
      </form>
  );
};

export default PostForm;