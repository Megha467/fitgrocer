import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import './Product.css';
import Salad from '../../assets/Salad.jpg';
const Product = () => {
    
    const menu_array = [
        {
            id:1,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Green Salad with mashed potatoes',
            price: '12.2'
        },
        {
            id:2,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Grilled Steak with Mushroom sauce',
            price: '12.2'
        },
        {
            id:3,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Fresh vegetable salad',
            price: '12.2'
        },
        {
            id:4,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Salad with strawberries and watermelon',
            price: '12.2'
        },
        {
            id:5,
            image: Salad,
            description: 'Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary. Savor the richness of our signature dishes, each crafted with passion and precision. From succulent grilled meats to delicate, aromatic herbs, our chefs curate an experience that transcends the ordinary',
            text: 'Vegan strawberry cake',
            price: '12.2'
        },
      
    ]
    
    
    const{id} = useParams();
    const product = menu_array.find(item => item.id == id);
    // console.log(matchedRecord);
    return(
        <div>
            <div className ="row ">    
            <div className = "col-md-6">
            <img src={product.image} alt = {product.text} height = "400px" width="400px"/>
            </div>

            <div className = "col-md-6 float-right">
            <h4 className = "text-uppercase text-black-50 my-2"> 
             <br/>
             <br/>
             {product.text}   
            </h4> 

            <p className="product_description my-2"> {product.description} </p>   
            <div className="align">
            <NavLink to={`/cart/${product.id}`}><button className="cart_button">Add to cart</button></NavLink>
            
            <h3 className ="display-6 fw-bold my-4 mx-4"> ${product.price} </h3>    
            </div>        
            </div>
            </div>
            </div>
    )
}

export default Product;