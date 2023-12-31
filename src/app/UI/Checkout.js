import './Checkout.css';
import Rider from '../../assets/rider.png';
import { NavLink } from "react-router-dom";
const Checkout = () => {
    return(
        <div>
       
        <p className='checkout_heading'>"Congratulations! Your   Order Has Been Placed!"</p>
        <img src={Rider} />
        <p className='checkout_text'>Thank you for choosing our services! Your order has been successfully placed and is now being 
            processed. We appreciate your trust in us and look forward to serving you.</p>

            <NavLink to={`/`}><button className="return_home">Return Home</button></NavLink>
        </div>
    )
}
export default Checkout;