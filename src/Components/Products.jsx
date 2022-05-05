import React, { useState } from "react";
import { useCart } from "../provider/CartProvider";
import data from "../Rservices/Productsservice";
import { Navbar } from "./Navbar";
import Product from './Product';


const Products = () =>{
    const { addToCart } = useCart();

    const addCart = (product) =>{
        addToCart(product);
    }

    return(
        <main>
            <Navbar />
            <h1>Teen and Adults Heels</h1>
            <div id="test">hi there</div>
            <div>
                {data.products.map((product)=>(
                    <Product key={product.id} onAdd={addCart} product={product}/>
                ))}
            </div>
        </main>
    )
}

export default Products;