import React, { createContext } from 'react';
import all_product from "../Components/Assets/all_product";
import { useState } from 'react';

export const ShopContext = createContext(null);

//New Empty Array for Cart
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}  

const ShopContextProvider = (props) => {

    //useState to change the data cartItems
    const[cartItems, setCartItems] = useState(getDefaultCart())

    //add to Cart Function

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
    }

    //remove from Cart Function
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        // set the total amount to zero
        let totalAmount = 0;

        for(const item in cartItems)
        {
            // if items in cartitems is greater than zero =>
            if(cartItems[item]>0)
            {
                // item info is equal to find all the product then product id is equal to converted item to string
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                // to get total amount + the iteminfo's new_price multiply by the items in cart items
                totalAmount = totalAmount + itemInfo.new_price * cartItems[item]
            }
            //display the totalAmount now
        }
        return totalAmount;
    }

    //function to get the total number of items in cart
    const getTotalCartItems = () => {
        //total item is initialize to zero
        let totalItem = 0;
        //for our items in the cartitems
        for(const item in cartItems)
        {
            //if the item in the cartitems is greater than zero
            if(cartItems[item]>0)
            {
                //create totalItem variable to store the number of items in cartitems
                totalItem = totalItem + cartItems[item];
            }
        }
        //display the totalItem now
        return totalItem;
    }
   
    
    //this contextValue is equal to functions that will pass the functions 
    const contextValue = {getTotalCartItems, getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart};

    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;