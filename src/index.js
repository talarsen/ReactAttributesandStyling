import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Random Lorem Picsum 
    </h1>
  <img src={img + "?grayscale"} alt="random black and white"/>

  <h1 className="heading-2" contentEditable="true" spellCheck="false">My Favorite Foods</h1>
  <img className="food-img" src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg" alt="pizza"/>
  <img className="food-img" src="https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9108-1.jpg" alt="taco"/>
  </div>,
  document.getElementById("root")
);
