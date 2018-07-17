import React from 'react';
import PropTypes from 'prop-types';
import { CLOUD, 
    CLOUDY, 
    SUN, 
    RAIN, 
    SNOW, 
    WINDY } from './../../../constants/weathers';
import './styles.css';

const stateToIconName = weatherState => {
    switch (weatherState) {
        case CLOUD:
            return "fas fa-cloud";
        case CLOUDY:
            return "fab fa-cloudversify";
        case SUN:
            return "fas fa-sun";
        case RAIN:
            return "fas fa-umbrella";
        case SNOW:
            return "far fa-snowflake";
        case WINDY:
            return "fas fa-umbrella-beach";
        default:
            return "fas fa-sun";  
    }
};

const getWeatherIcon = weatherState => {
    return (<i className={stateToIconName(weatherState)+' wicon'}></i>)
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
       <span className='temperature'>{` ${temperature}`}</span>
       <span className='temperatureType'>C°</span>
    </div>
);


/*
class WeatherTemperature extends Component {
    render{
        return(
            <div> weather temperature</div>
        )
    }
}
*/
WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string
};
export default WeatherTemperature;