import React from "react";

import {Cards, Chart, CountryPicker} from './components';
import style from './App.module.css';
import {fetchData} from "./api";
import coronaImage from './assets/covid_image.png'

// import Cards from "./components/Cards/Cards";
// import Chart from "./components/Chart/Chart";
// import CountryPicker from "./components/CountryPicker/CountryPicker";


class App extends React.Component{

    state = {
        data: {},
        country: "",
    }

    handleCountryChange = async (country) => {
        console.log("Country Name: ", country);
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country});

    }

    async componentDidMount() {
        console.log("did mount...")
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
        console.log("fetched data:", fetchedData);
    }

    render() {
        const {data, country} = this.state
        return (
            <div className={style.container}>
                <img className={style.image} src={coronaImage} alt="covid-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;