var React = require('react');

var WeatherMessage = ({temp, location}) => {
    if(temp && location){
  return (<h3 className="text-center">It's it {temp}ºC in {location}.</h3>);
  }else{
    return('');
  }
}

module.exports = WeatherMessage;
