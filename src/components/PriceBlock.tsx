import React from "react";
import "../style/price.css";

function PriceBlock({price}: {price: number}) {
    return (
       <div id="price-block">
           <p>{`Загальна ціна вашого білету: ${price}$`}</p>
       </div>
    );
}

export default PriceBlock;