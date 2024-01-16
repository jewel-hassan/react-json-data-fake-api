import React from "react";
import "./Cosmetic.css";
import { addTodb } from "../utiliti/Fakedb";

const Cosmetic = (props) => {
  const { id, price, product } = props.cosmetics;

  const addToCard =(id)=>{
    addTodb(id)
  }
  return (
    <div className="cosmetic">
        <h2>ID:{id}</h2>
      <h3>Bye this:{product}</h3>
      <h4>Only for:{price}</h4>
      <button onClick={()=> addToCard(id)}>Add to Card</button>
    </div>
  );
};

export default Cosmetic;
