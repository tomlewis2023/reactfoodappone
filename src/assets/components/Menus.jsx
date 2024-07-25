import { useEffect, useState } from "react";
import Hero from "./Hero"
import SpecialDishes from "./SpecialDishes"
import FilteredCategories from "./FilteredCategories";
import Header from "./Header";
import Products from "./Products";



//Main parent page children linked here


function Menus() {
  let [menu, setmenu] = useState([]);
  let [filtercat,setfiltercat] = useState([]);
  let [loadcat,setloadcat] = useState([]);
  //conditional rendering
  let [loading ,setloading] = useState(false)

  async function getAllImages() { //get all dishes
    setloading(true); //loading condition is set as true
    let APPURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(APPURL);
    let data = await response.json();
    setmenu(data.meals);
    console.log(data.meals);
    setloading(false); //after loading condition is setas fault

   
  }

  async function allFilteredCat(){//get group dishes list

    let appurl  = "https://www.themealdb.com/api/json/v1/1/categories.php"
    let response = await fetch(appurl);
    let Alldata = await response.json()    
    setfiltercat(Alldata.categories)
    console.log(Alldata.categories);
    

  } 

  //load categories

  async function loadcategories(){
    let response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")
    let loaddatacat = await response.json();
    setloadcat(loaddatacat.meals)
    console.log("load",loaddatacat.meals);

  }
  



   //useeffect used for initial load

  useEffect(() => {
    getAllImages();
    allFilteredCat();
    loadcategories();
  }, []);

  //props passed to children

  return (
  
  <div>
    
 
 
 
 <Hero/>
 

 
 

 
 {!loading ? <SpecialDishes  Menuprops={menu}/> : <h1>Loading....</h1> }
 {!loading ? <FilteredCategories  Filterprops = {filtercat}  Filtermenu = {menu}  loadcat={loadcat} setloadcat={setloadcat}/> : null}


  </div>

  
)}

export default Menus
