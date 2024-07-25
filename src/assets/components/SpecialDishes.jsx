import { useState } from "react";
import Carddishes from "./Carddishes";
import Popup from "./Popup";


function SpecialDishes(props) {
  console.log(props.Menuprops);
  let [popupdish,setpopupdish] = useState(false) //state for pop up open close
  let[displaypopuplist,setdisplaypopuplist] =useState('');  //state for popuplist

  function popuphandler(items){  //popup child open fn
    
    setpopupdish(true)
    setdisplaypopuplist(items)
}

function popupclosehandler(){//popup child close fn
  setpopupdish(false)
}

  let Totalmenu = 12;

  let listMenus = props.Menuprops.map((items,index) => {//parent props iterated via map fn
    

    if(index < Totalmenu){
      return (

        
          <Carddishes items={items} popuphandler={popuphandler}/>  //Moved to card component

        
        // Add children
        
      );

    }
    
  });

  return (
    <div>
      <div className="contain_sp">
        {popupdish && <Popup popupclosehandler ={popupclosehandler}  displaypopuplist={displaypopuplist} menu ={props.Menuprops} />}
        <h2 className="sp_h2">Our Special Dishes</h2>
        <p className="sp_p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sed
          nostrum labore? Doloremque pariatur consectetur sapiente, hic
          voluptates a dolore.
        </p>
      </div>
      <div className="listdishes">{listMenus}</div>
    </div>
  );
}

export default SpecialDishes;
