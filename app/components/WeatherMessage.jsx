var React = require('react');

var WeatherMessage = ({temp, location}) => {
    if(temp && location){
  return (<h3>It's it {temp} in {location}.</h3>);
  }else{
    return('');
  }
}

module.exports = WeatherMessage;
