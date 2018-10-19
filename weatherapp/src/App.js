import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Componentes
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
  'Ensenada, Mx',
  'Bogotá, col',
  'Ciudad de México, mx',
  'Madrid, es',
  'Santiago, chile',

];
class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectionLocation ${city}`);
  }
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
            <AppBar title="Weather App"></AppBar>           
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div className="App">
                <LocationList cities={cities} 
                onSelectedLocation={this.handleSelectedLocation}/>
              </div>
            </Col>
            <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="detail">
                { 
                  this.state.city && 
                    <ForecastExtended city={ this.state.city }></ForecastExtended>
                }
              </div>
            </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
