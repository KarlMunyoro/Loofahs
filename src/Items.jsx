import { useEffect } from "react";

function Items({name, price, image}){

return(
    <div className="item-card">
        <img src={image} alt={name} className="item-image"/>
        <h3>{name}</h3>
        <p>${price}</p>
    </div>
)
}

export default Items;