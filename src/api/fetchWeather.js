import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '04f2e2726f2ee1b6a902947126162cc5';

const fetchWeather = async (query) => {
    const  data  = await axios.get(URL,  {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
        
    })
;
    return data;
}

export default fetchWeather


    
