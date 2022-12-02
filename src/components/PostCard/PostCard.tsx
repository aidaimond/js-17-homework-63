import React from 'react';

interface Props {
  datetime: string;
  title: string;
}

const PostCard: React.FC<Props> = (props) => {
  return (
    <div className="m-2 border border-2 rounded p-4">
      <p className="card-text text-opacity-25">{props.datetime}</p>
      <h3 className="card-title my-4">{props.title}</h3>
      <button className="btn btn-outline-secondary">Read more</button>
    </div>
  );
};

export default PostCard;