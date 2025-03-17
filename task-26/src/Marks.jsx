import React from "react";

function Marks({ name, image, price }) {
  //   console.log(img);
  return (
    <div className="marks">
      <img src={image} style={{ width: "180px", height: "130px" }}></img>
      <h3>Name:{name}</h3>
      {/* <h4>Model:{model}</h4> */}
      <h4>Price:{price}</h4>
      {/* <h4>Year of launch:{manf}</h4> */}
      {/* <h4>Marks:</h4>
      {Object.entries(marks).map(([sub, ele], index) => (
        <h4 key={index}>
          {sub}:{ele}
        </h4>
      ))} */}
    </div>
  );
}

export default Marks;
