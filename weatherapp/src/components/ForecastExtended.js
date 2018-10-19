import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Components
import ForecastItem from './ForcastItem';
//services
import transformForecast from './../services/transformForecast';
import './style.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}*/
const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "f15d144a05f91d476517eb4efca3a368";

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount(){
        //fetch or axios
       this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({ forecastData: null })
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData })
            }
        );
    }

    renderForcastItemDays(forecastData){
        return forecastData.map( forecast => (
            <ForecastItem 
                key = {`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>));
    }

    renderProgress() {
        return <h3>Cargando Pronóstico Extendido...</h3>;
    }

    render(){
        //const city = this.props.city;
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forcast-title'>Pronóstico Extendido para { city }</h2>
                { forecastData ? 
                    this.renderForcastItemDays(forecastData):
                    this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;