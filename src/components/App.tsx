import React, {useState} from 'react';
import CountrySelect from "./CountrySelect";
import "../style/App.css"
import SightBlock from "./SightBlock";
import {content, CountriesContent} from "../static/content";
import PriceBlock from "./PriceBlock";

export type SightBlockProps = {
    title: string,
    image: string,
    description: string,
    price: number
}

function App() {
    const mapper = (country: string): string => {
        switch (country) {
            case "Україна": return "ukraine";
            case "Великобританія": return "uk";
            case "США": return "usa";
            case "Польша": return "poland";
            case "Німеччина": return "germany";
            default: return "";
        }
    }

    const [country, setCountry] = useState("");
    const [price, setPrice] = useState(0);

    const priceCheckHandler = (toChangePrice: number) => {
        setPrice(price + toChangePrice);
    }

    return (
        <div className="App">
            <CountrySelect country={country} setCountry={setCountry} setPrice={setPrice} mapper={mapper}/>
            {!country && <p id="select-country-initial">Виберіть країну</p>}
            {country && <hr/>}
            <div>
                {
                    country && content[mapper(country) as keyof CountriesContent].content
                        .map((sight: SightBlockProps, index: number) =>
                        <SightBlock key={sight.title} index={index} title={sight.title} image={sight.image}
                                    description={sight.description} price={sight.price} setPriceHandler={priceCheckHandler}/>
                    )
                }
            </div>
            {country && <hr/>}
            {country && <PriceBlock price={price}/>}
        </div>
    );
}

export default App;