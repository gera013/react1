import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
        <span className='extraInfoText'>{`Humedad: ${humidity}%`}</span>
        <span className='extraInfoText'>{`Vientos: ${wind}`}</span>
    </div>
);

/*
class WeatherExtraInfo extends Component{
    render(){
        return(
            <div>Extra info</div>
        )
    }
}
*/
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;