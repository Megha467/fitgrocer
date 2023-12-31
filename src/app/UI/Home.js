import Salad from '../../assets/Salad.jpg';
import './Home.css';

import { NavLink } from "react-router-dom";
const Home = () => {
    const menu_array = [
        {
            id:1,
            image: Salad,
            text: 'Green Salad with mashed potatoes',
            price: '12.2'
        },
        {
            id:2,
            image: Salad,
            text: 'Grilled Steak with Mushroom sauce',
            price: '12.2'
        },
        {
            id:3,
            image: Salad,
            text: 'Fresh vegetable salad',
            price: '12.2'
        },
        {
            id:4,
            image: Salad,
            text: 'Salad with strawberries and watermelon',
            price: '12.2'
        },
        {
            id:5,
            image: Salad,
            text: 'Vegan strawberry cake',
            price: '12.2'
        },
      
    ]
    
    
    return(
        <>
        <div className="container mt-3 mb-3">
            <div className="row">
        {menu_array.map((item)=>{
            
            return(
                <>
                
                <div className="col-3">
                <div class="card" >
                <img src={item.image} class="card-img-top" alt="Not available"/>
                <div class="card-body">
                <p class="card_text">{item.text}</p>
                <div className='card_price'>
                <p className="card_text">${item.price}</p>
                <p>❤️</p>
                </div>
                <NavLink to={`/products/${item.id}`}><button>Buy Now</button></NavLink>
                
              </div>
            </div>  
            </div>
            </>
            )
           
        })}
     </div>
    </div>
        </>
    )
}
export default Home;