import React from 'react';

interface Props {
  title: string;
  text: string;
}

const AboutCard: React.FC<Props> = (props) => {
  return (
    <div className="m-2 border-bottom pb-4">
      <h3 className="card-title my-4">{props.title}</h3>
      <p className="card-text"><strong>{props.text}</strong></p>
    </div>
  );
};

export default AboutCard;