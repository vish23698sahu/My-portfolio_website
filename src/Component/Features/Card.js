import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className="box btn_shadow">
        {/* <img src={props.image} height='50px' width='50px' alt="can't load" /> */}
        <i class={props.classes} ></i>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="#">
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;