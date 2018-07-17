import React from 'react';
import { SUN } from './../../../constants/weathers';
import './styles.css';
//components
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeattherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={20} weatherState={SUN}/>
        <WeatherExtraInfo humidity={40} wind={'10m/s'}/>
    </div>
);

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