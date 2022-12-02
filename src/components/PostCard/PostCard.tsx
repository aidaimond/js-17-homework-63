import React, {PropsWithChildren} from 'react';

interface Props extends PropsWithChildren {
  datetime: string;
  title: string;
  description?: string;
}

const PostCard: React.FC<Props> = (props) => {
  return (
    <div className="m-2 border border-2 rounded p-4">
      <p className="card-text text-opacity-25">{props.datetime}</p>
      <h3 className="card-title my-4">{props.title}</h3>
      <p className="card-text text-opacity-25">{props.description}</p>
      {props.children}
    </div>
  );
};

export default PostCard;