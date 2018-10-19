import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import transformWeather from './../../services/transformWeather';


//Componentes
import Location from './Location';
import WeatherData from './WeatherData'
import { CircularProgress } from 'material-ui';


const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "f15d144a05f91d476517eb4efca3a368";



class WeatherLocation extends Component {

    constructor({city}){
        super();
        this.state = {
            city,
            data: null
        };
    }
   

    handleUpdateClick = () =>{
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({data});
        });
    }
    componentWillMount(){
        this.handleUpdateClick();
    }
    render(){
        const { onWeatherLocationClick } = this.props
        const { city, data } = this.state;
        return(
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? <WeatherData data= { data }/> : 
                <CircularProgress size={60} thickness={7} />}
    
            </div>
        );
    }
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
WeatherLocation.propTypes = {
    city:PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation; 