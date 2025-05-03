import axios from 'axios';
import { WeatherData } from '../../src/types/Interface';

const API_KEY = 'ac77ccbeab6d373cafef3a3231a9b6d5';

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = response.data;

    return {
        city: data.name,
        temp: data.main.temp,
        condition: data.weather[0].main,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        humidity: data.main.humidity,
    };
};
