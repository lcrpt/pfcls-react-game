import React from 'react';

const Card = (props) => {
  const cardIcon = {
    'width': '80px',
    'line-height': '80px',
    'height': '80px',
  };
  const cardTitle = {
    'margin-top': '10px',
  };

  return (
    <div className={props.col}>
      <div className="card card-pricing">
        <div className={`content content-${props.data.color}`}>
          <div className="icon">
            <i className="material-icons" style={cardIcon}>{props.data.icon}</i>
          </div>
          <h3 className="card-title" style={cardTitle}>{props.data.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
