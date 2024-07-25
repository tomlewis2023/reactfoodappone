import React from "react";

const Popup = (props) => {
  console.log("popup menu", props.menu);
  let Popuplists = props.menu
    .filter((listitems) => {
      return listitems.strMeal == props.displaypopuplist;
    })
    .map((listdishes) => {
      return (
        <div className="contain_pop">
          <img className="listdishes_pop" src={listdishes.strMealThumb} />
          <h2>{props.displaypopuplist}</h2>
          <h3>{listdishes.strTags}</h3>
        </div>
      );
    });

  return (
    <div className="pop_contain">
      <div className="pop_contain2">
        <div className="listdishes">{Popuplists}</div>

        
        <button className="popupbtn">Order now</button>
        <button onClick={props.popupclosehandler} className="popupbtn">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
