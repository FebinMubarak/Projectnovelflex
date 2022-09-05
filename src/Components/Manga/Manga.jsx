import React, { useState } from 'react';
import home from "../../images/home.png";
import "./Manga.css";
import { baseUrl } from '../../Constants/Constants';

import axios from "../../axios";


const Products = ({props}) => {
    const[state,setstate] = useState([])

    const Books = (id)=>{
        console.log(id)
        axios.get(baseUrl).then(response=>{
            if(response.data.results.length!==0){
                console.log(response.data)
            }else{
                console.log("Empty Array")
            }
            
        })
    }
  return (
    <div id='Manga'>
    <div className='product-card'>
         <img
          width={250}
          height={250}
          className='product-image' src={props} alt="" />
          <p className="product-name" >Book Name</p>
          <p className='product-description'>Description</p>
    </div>
    </div>
  )
}

export default Products;