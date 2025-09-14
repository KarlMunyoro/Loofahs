import { useEffect, useState } from "react";
import Items from "./Items";

function ItemList(){
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch("/db.json")
        .then((res) => res.json())
        .then((data) => setItems(data.products));
    }, []);

    return(
        <div className="item-grid">
            {items.map((item) => (
                <Items
                key={item.id}
                name = {item.name}
                price = {item.price}
                image = {item.image}
                />
            ))}
        </div>
    )
}

export default ItemList;