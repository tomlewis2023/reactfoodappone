import React from 'react'

const Carddishes = (props) => {
    console.log(props.popuphandler);

   
  return (
    <div>
        
        <li>
            <a href="Javascript:;" onClick={(()=>props.popuphandler(props.items.strMeal))}>
          <img  className="sp_listdishes" src={props.items.strMealThumb}  />
          <p className="sp_p">{props.items.strMeal}</p>
          </a>
        </li>
        

      </div>
  )
}

export default Carddishes