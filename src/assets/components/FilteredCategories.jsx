import { useState } from "react";
import Pagination from "./Pagination";
import Carddishes from "./Carddishes";

function FilteredCategories(props) {
  
  let [FilterCategory, setFilterCategory] = useState([]);
  let [activebtn, setactivebtn] = useState();
  let [currentpage, setcurrentpage] = useState(1);
  let [itemsperpage, setitemsperpage] = useState(4);

  let indexoflastDish = currentpage * itemsperpage;
  //1 * 4 =  4
  //2 * 4 = 8
  //3 * 4 = 12

  let indexoffirstDish = indexoflastDish - itemsperpage;
  //4-4 =  0
  //8-4 = 4
  //12 -4 = 8

  let ShowtheseDishes = FilterCategory.slice(indexoffirstDish,indexoflastDish)


  

  //categories while loading
  let loadcatlist = props.loadcat.map((items,index) => {
    let Totalmenu = 10;
    if(index < Totalmenu){
      return (
        <Carddishes items={items}/>  //moved to Card component
      );

    }

   
  });
  

  function AllCategorylist(category) {
    console.log("this is category", category);
    props.setloadcat([]);
    setactivebtn(category);

    let filterallCategory = props.Filtermenu.filter((item) => {
      return item.strCategory == category; //all category and clicked category compared iterated and passed via map
    }).map((item) => {
      
      
      return (
        
        
           <li key={item.idCategory}>
          <img className="imgfilter" src={item.strMealThumb} />
          <p className="sp_p">{item.strMeal}</p>
        </li>

        
       
      );
    });

    setFilterCategory(filterallCategory);
  }

  console.log("filtered cat ", props);
  let filterCatlist = props.Filterprops.map((itemcat) => {
    return (
      <div>
        <li key={itemcat.idCategory}>
          <button
            onClick={() => {
              AllCategorylist(itemcat.strCategory); //onclick initiated and category passed to function
            }}
            className={
              itemcat.strCategory == activebtn ? "activebtn" : "filter_btn"
            } //button click background color change
            // className="filter_btn"
          >
            {itemcat.strCategory}
          </button>
        </li>
      </div>
    );
  });

  return (
    <div className="contain_sp">
      <h2 className="sp_h2">Choose your dishes</h2>
      <p sp_p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, facilis
        nobis quis quae at harum reprehenderit asperiores eveniet maxime autem!
      </p>

      <div className="filter_cat">{filterCatlist}</div>
      <div>
        <li className="listdishes">{loadcatlist}</li>
        {/* {FilterCategory} */}
        {loadcatlist !=0 || FilterCategory.length != 0 ? (
          <li className="listdishes"> {ShowtheseDishes}</li>
        ) : (
          <div>
            <h1 className="sp_h2"> Please select from our menu</h1>
          </div>
        )}

        {/* category no dishes display */}
        {/* || <div><h1 className="sp_h2">Sorry, Please select from our menu</h1></div> */}
        {/* <li className="listdishes">{FilterCategory}</li>  */}
         
         <Pagination FilterCategory={FilterCategory} itemsperpage={itemsperpage} currentpage={currentpage} setcurrentpage={setcurrentpage} />

         
        
      </div>
    </div>
  );
}

export default FilteredCategories;
