import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = (props) => {
    const { city } = props; //emmaScript destructuring
    return(
        <div className='locationCont'>
            <h1>{ city }</h1>
        </div>
    )
};

/*
class Location extends Component {
    render(){
        return(
            <div>
                <h1>{ this.props.city }</h1>
            </div>
        )
    }
}*/

Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;