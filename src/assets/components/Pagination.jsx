import React from 'react'

const Pagination = (props) => {
    console.log("Paginat",props.FilterCategory);
    let numOfPages = [];
    for(let i=1;i<= Math.ceil(props.FilterCategory.length / props.itemsperpage) ;i++){
        numOfPages.push(i)
        
    }

     function shownextdishes(event){
        console.log(event.target.id);
        props.setcurrentpage(event.target.id)


     }

    let pages = numOfPages.map((list)=>{
        return(

            //give css to return statement of map

            // <li className='pagination_1'>{list}</li>
            <button id={list} onClick={shownextdishes} className='pagination_1'>{list}</button>

        )
    

        

    })
    console.log("num of pages",numOfPages);
  return (
    <div className='pagination_2'>
        {pages}
         {/* <li className='pagination_1'></li> */}

    </div>
  
        
  )
}

export default Pagination