import React from 'react';
import './styles.css';
//components
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeattherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind} = data;
    return (
        <div className='weatherDataCont'>
            <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
            <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    );
};

/*
class WeatherData extends Component{
    render{
        return(
            <div>Weather Data</div>
        )
    }
}
*/

export default WeattherData;