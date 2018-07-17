import React from 'react';
import './styles.css';
//Componentes
import Location from './Location';
import WeatherData from './WeatherData'

const WeatherLocation = () => (
   <div className='weatherLocationCont'>
       <Location city={'Buenos Aires!'}/>
       <WeatherData/>
   </div>
   
);

/*
class WeatherLocation extends Component {
    render(){
        return(
           <div>Weather Location</div>
        )
    }
}*/

export default WeatherLocation;