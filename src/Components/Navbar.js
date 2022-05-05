import React from "react";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { useCart } from "../provider/CartProvider";
import { useNavigate } from "react-router-dom";
import { Menu } from "../Widgets/Menu";


export const Navbar = () =>{
    const { cart } = useCart();

    const navigate = useNavigate();

    const myOptions = [
        {
            title: 'hello world',
            action: ()=> alert('hello this  is a test')
        },{
            title: 'To cart',
            action: ()=> navigate('/cart')
        },
    ]

    return(
        <nav>
            <Menu options={myOptions} />
            <label onClick={()=>navigate('/checkout')}>Checkout</label>
            <span>
                <BsFillCartPlusFill onClick={()=>navigate('/cart')} />
                <div>{cart.length}</div>
            </span>
        </nav>
    )
}