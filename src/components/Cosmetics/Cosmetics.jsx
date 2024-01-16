import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import "./Cosmetics.css";

const Cosmetics = () => {
 const[cosmetics,setCosmetics]=useState([]);

 useEffect(() => {
    fetch("https://cosmatic.free.beeceptor.com/")
    .then(res => res.json())
    .then(data => setCosmetics(data))
  
 }, [])
 
  return (
  <div>
    <h1>welcome to our cosmetics shop</h1>
      <div className="cosmetics">
          {cosmetics.map((cosmetic) => {
        return (
          <div key={cosmetic.id}>
            <Cosmetic cosmetics={cosmetic} />
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default Cosmetics;
