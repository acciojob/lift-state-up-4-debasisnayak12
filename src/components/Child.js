import React from "react";

const Child = ({ cartItems, onRemove }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <ul>
        {cartItems.map((item,index) => (
            <div key={index} className="list">
            <li>
              {item.name} - ${item.price}
            </li>
            <button onClick={()=>onRemove(item)}>Remove</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Child;