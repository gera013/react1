import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { SUN, WINDY } from './../../constants/weathers';
//Componentes
import Location from './Location';
import WeatherData from './WeatherData'

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',

};

const data2 = {
    temperature: 18,
    weatherState: WINDY,
    humidity: 5,
    wind: '19 m/s',

};

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1
        };
    }

    handleUpdateClick = () =>{
        this.setState({
            city: 'Buenos Aires',
            data: data2
        });
    }

    render(){
        const { city, data } = this.state;
        return(
            <div className='weatherLocationCont'>
                <Location city={city}/>
                <WeatherData data= { data }/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
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

export default WeatherLocation; 