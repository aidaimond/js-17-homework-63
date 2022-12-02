import React from 'react';

interface Props {
  title: string;
  text: string;
}

const ContactCard: React.FC<Props> = (props) => {
  return (
    <div className="col p-4 m-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;