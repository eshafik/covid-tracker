import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const url_vt = 'https://api.thevirustracker.com/free-api?';

export const fetchData = async (country) => {
    let changableUrl = url;
    if (country) {
        changableUrl = `${url}/countries/${country}`
    }
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changableUrl);
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {

    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData
    }catch (error) {
        
    }
}


export const fetchCountries = async () => {
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        return countries
    }catch (error) {

    }
}

export const fetchDataFromVT = async (country) => {
    let changeableUrl = `${url_vt}countryTimeline=${country}`
    console.log("URL: ", changeableUrl);

    try {
        const {data:{timelineitems}} = await axios.get(changeableUrl);
        const data = Object.entries(timelineitems[0]).map((e) => ( { [e[0]]: e[1] } ));
        const modified_data =  data.map((obj) => {

            const key = Object.keys(obj)[0];

            const confirmed = obj[key].new_daily_cases;
            const deaths = obj[key].new_daily_deaths;
            return {confirmed: confirmed, deaths: deaths, date:key}
        })
        return modified_data
    } catch (error) {

    }
}

export const fetchCountryTotalFromVT = async (country) => {
    let changeableUrl = `${url_vt}countryTotal=${country}`

    try {
        const {data:{countrydata}} = await axios.get(changeableUrl);
        return countrydata[0]
    } catch (error) {

    }
}
