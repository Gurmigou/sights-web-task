import React, {useState} from "react";
import "../style/sightBlock.css";
import {Checkbox, FormControlLabel} from "@mui/material";
import {SightBlockProps} from "./App";

function SightBlock({title, image, description, price, index, setPriceHandler}: SightBlockProps & {index: number, setPriceHandler: any}) {
    const [checked, setChecked] = useState(false);

    return (
        <div className="sight-block">
            <h1>{(index + 1) + ") " + title}</h1>
            <div>
                <img src={image} alt={"no-picture"}/>
            </div>
            <p>{description}</p>
            <FormControlLabel control={<Checkbox checked={checked} onChange={() => {
                setChecked(!checked);
                setPriceHandler(checked ? -price : price);
            }}/>} label={`Ціна відвідування ${price}$`} />
        </div>
    );
}

export default SightBlock;