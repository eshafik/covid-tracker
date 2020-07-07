import React from "react";

import Main from './router/Main'
import {Nav} from "./components";
import {Cards, Chart, CountryPicker} from './components';
import style from './App.module.css';
import {fetchData} from "./api";
import coronaImage from './assets/covid_image.png'

// import Cards_2 from "./components/Cards_2/Cards_2";
// import Chart_2 from "./components/Chart_2/Chart_2";
// import CountryPicker_2 from "./components/CountryPicker_2/CountryPicker_2";


class App extends React.Component{

    render() {
        return (
            <div className={style.container}>
                <Nav/>
                <Main/>
            </div>
        );
    }
}

export default App;