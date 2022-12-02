import React, {useState} from 'react';
import {PostFormType} from "../../types";

interface Props {
  onSubmit: (postForm: PostFormType) => void;
  existingPost?: PostFormType;
}

const PostForm: React.FC<Props> = ({onSubmit, existingPost}) => {
  const initialState = existingPost ? existingPost : {
    title: '',
    description: '',
  };

  const [postForm, setPostForm] = useState(initialState);

  const postFormChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPostForm(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(postForm);
  };

  return (
    <form onSubmit={onFormSubmit}>
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