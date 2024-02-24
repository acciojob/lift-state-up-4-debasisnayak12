import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [itemName,setItemName] = useState("");
    const [itemPrice,setItemPrice] = useState("");
    const [cartItems,setcartItems] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        setcartItems([...cartItems,{ name:itemName, price:itemPrice }]);
        setItemName("");
        setItemPrice("");
    }
    // console.log("cart",cartItems);
    
    function handleRemove(i){
        setcartItems(cartItems.filter(item => item != i));
    }

    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" id="itemName" value={itemName}
          onChange={(e)=>setItemName(e.target.value)}/>
          <label htmlFor="itemPrice">Item Price:</label>
          <input type="number" id="itemPrice"  value={itemPrice}
          onChange={(e)=>setItemPrice(e.target.value)}/>
          <button type="submit">Add Item</button>
        </form>
        <Child cartItems={cartItems} onRemove={handleRemove}/>
        
      </div>
    );
}
export default Parent;