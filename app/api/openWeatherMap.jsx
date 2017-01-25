var axios = require('axios');

const OPEN_WEATHER_MAP_UR = 'http://api.openweathermap.org/data/2.5/weather?appid=07c4f0968db0815305dfa97002d3b29a&units=imperial';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requerstURL = `${OPEN_WEATHER_MAP_UR}&q=${encodedLocation}`;

    return axios.get(requerstURL).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }).catch(function(res){
      throw new Error("Unable to fetch weather for that location.");
    })
  }
}
