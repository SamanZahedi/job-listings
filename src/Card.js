import React from "react";
import { useState } from "react";
import data from "./data.json";

const Card = () => {
  const [info, setInfo] = useState(data);
  return info.map((el) => {
    return (
      <div className="card">
        <img src={el.logo} alt="" />
        <div className="job">
          <div className="row1">
            <span className="company">{el.company}</span>
            {el.new && <span className="new">NEW!</span>}
            {el.featured && <span className="featured">FEATURED</span>}
          </div>
          <div className="row2">{el.position}</div>
          <div className="row3">
            <span>{el.postedAt}</span>
            <span>・</span>
            <span>{el.contract}</span>
            <span>・</span>
            <span>{el.location}</span>
          </div>
        </div>
        <div className="skills">
           {el.languages.map( lang => <span>{lang}</span>)}
     
        </div>
      </div>
    );
  });
};

export default Card;
