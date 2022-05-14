import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import "../style/countrySelect.css"

type Country = {
    ukraine: string,
    uk: string,
    usa: string,
    poland: string,
    germany: string
}

function CountrySelect({country, setCountry, setPrice, mapper}: {country: string, setCountry: any, setPrice: any, mapper: (country: string) => string}) {
    const onCountryChange = (event: SelectChangeEvent): void => {
        setCountry(event.target.value as string);
        setPrice(0);
    };

    const flags: Country = {
        ukraine: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png?20100406171642",
        uk: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/1200px-Flag_of_the_United_Kingdom.png",
        usa: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/US_flag_large_51_stars.png/1024px-US_flag_large_51_stars.png",
        poland: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.svg.png",
        germany: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png?20070926182838"
    }

    const getCurFlag = (curCountry: string): string => {
        const latinCountry = mapper(curCountry);
        return flags[latinCountry as keyof Country];
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Країна</InputLabel>
            <Select value={country} label="Country" onChange={onCountryChange}>
                <MenuItem value={"Україна"}>Україна</MenuItem>
                <MenuItem value={"Великобританія"}>Великобританія</MenuItem>
                <MenuItem value={"США"}>США</MenuItem>
                <MenuItem value={"Польша"}>Польша</MenuItem>
                <MenuItem value={"Німеччина"}>Німеччина</MenuItem>
            </Select>
            <div className="select-country">
                <h1 id="country-label">{country}</h1>
                {country !== "" && <img id="country-flag" src={getCurFlag(country)} alt={"no-flag"}/>}
            </div>
        </FormControl>
    );
}

export default CountrySelect;