import React from "react";


import {Cards_2, Chart_2, CountryPicker_2} from '../components'
import style from '../App.module.css';
import {fetchDataFromVT, fetchCountryTotalFromVT} from "../api";
import coronaImage from '../assets/covid_image.png'



class Bangladesh extends React.Component{

    state = {
        data: {},
        total: {},
        country: "BD",
    }

    handleCountryChange = async (country) => {
        console.log("Country Name: ", country);
        const fetchedData = await fetchDataFromVT(country);
        const fetchedTotalData = await fetchCountryTotalFromVT(country);
        this.setState({total: fetchedTotalData, data: fetchedData, country:country});

    }

    async componentDidMount() {
        const fetchedData = await fetchDataFromVT(this.state.country);
        const fetchedTotalData = await fetchCountryTotalFromVT(this.state.country);
        this.setState({total: fetchedTotalData, data: fetchedData});
    }

    render() {
        const {data, total, country} = this.state
        return (
            <div className={style.container}>
                <img className={style.image} src={coronaImage} alt="covid-19"/>
                <Cards_2 data={total} country={this.state.country}/>
                <CountryPicker_2 handleCountryChange={this.handleCountryChange}/>
                <Chart_2 data={data} country={country}/>
            </div>
        );
    }
}

export default Bangladesh;