import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl} from "@material-ui/core";

import {fetchCountries} from "../../api";

import styles from './CountryPicker_2.module.css';


const CountryPicker_2 = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())

        }
        fetchAPI();
    }, [setFetchedCountries]);


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="BD">Bangladesh</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country.iso2}>{country.name}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker_2;
