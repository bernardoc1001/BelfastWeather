export function weatherCodeToWeatherObj(weatherCode) {
  let weatherObj = {};
  switch (weatherCode) {
    case 0:
      weatherObj.description = 'Clear Sky';
      weatherObj.iconImage = require('../assets/sun.png');
      break;
    case 1:
      weatherObj.description = 'Mainly Clear';
      weatherObj.iconImage = require('../assets/cloudy.png');
      break;
    case 2:
      weatherObj.description = 'Partly Cloudy';
      weatherObj.iconImage = require('../assets/cloudy.png');
      break;
    case 3:
      weatherObj.description = 'Overcast';
      weatherObj.iconImage = require('../assets/cloudy.png');
      break;
    case 45:
      weatherObj.description = 'Fog';
      weatherObj.iconImage = require('../assets/fog.png');
      break;
    case 48:
      weatherObj.description = 'Depositing Rime Fog';
      weatherObj.iconImage = require('../assets/fog.png');
      break;
    case 51:
      weatherObj.description = 'Light Drizzle';
      weatherObj.iconImage = require('../assets/drizzle.png');
      break;
    case 53:
      weatherObj.description = 'Moderate Drizzle';
      weatherObj.iconImage = require('../assets/drizzle.png');
      break;
    case 55:
      weatherObj.description = 'Dense Drizzle';
      weatherObj.iconImage = require('../assets/drizzle.png');
      break;
    case 56:
      weatherObj.description = 'Light Freezing Drizzle';
      weatherObj.iconImage = require('../assets/freezing-rain.png');
      break;
    case 57:
      weatherObj.description = 'Dense Freezing Drizzle';
      weatherObj.iconImage = require('../assets/freezing-rain.png');
      break;
    case 61:
      weatherObj.description = 'Slight Rain';
      weatherObj.iconImage = require('../assets/rain.png');
      break;
    case 63:
      weatherObj.description = 'Moderate Rain';
      weatherObj.iconImage = require('../assets/rain.png');
      break;
    case 65:
      weatherObj.description = 'Heavy Rain';
      weatherObj.iconImage = require('../assets/rain.png');
      break;
    case 66:
      weatherObj.description = 'Light Freezing Rain';
      weatherObj.iconImage = require('../assets/freezing-rain.png');
      break;
    case 67:
      weatherObj.description = 'Heavy Freezing Rain';
      weatherObj.iconImage = require('../assets/freezing-rain.png');
      break;
    case 71:
      weatherObj.description = 'Slight Snow Fall';
      weatherObj.iconImage = require('../assets/snow.png');
      break;
    case 73:
      weatherObj.description = 'Moderate Snow Fall';
      weatherObj.iconImage = require('../assets/snow.png');
      break;
    case 75:
      weatherObj.description = 'Heavy Snow Fall';
      weatherObj.iconImage = require('../assets/snow.png');
      break;
    case 77:
      weatherObj.description = 'Snow Grains';
      weatherObj.iconImage = require('../assets/snow.png');
      break;
    case 80:
      weatherObj.description = 'Slight Rain Showers';
      weatherObj.iconImage = require('../assets/rain.png');
      break;
    case 81:
      weatherObj.description = 'Moderate Rain Showers';
      weatherObj.iconImage = require('../assets/rain.png');
      break;
    case 82:
      weatherObj.description = 'Violent Rain Showers';
      weatherObj.iconImage = require('../assets/rain.png');
      break;
    case 85:
      weatherObj.description = 'Slight Snow Showers';
      weatherObj.iconImage = require('../assets/snow.png');
      break;
    case 86:
      weatherObj.description = 'Heavy Snow Showers';
      weatherObj.iconImage = require('../assets/snow.png');
      break;
    case 95:
      weatherObj.description = 'Slight to Moderate Thunderstorm';
      weatherObj.iconImage = require('../assets/thunder.png');
      break;
    case 96:
      weatherObj.description = 'Thunderstorm with Slight Hail';
      weatherObj.iconImage = require('../assets/thunder-hail.png');
      break;
    case 99:
      weatherObj.description = 'Thunderstorm with Heavy Hail';
      weatherObj.iconImage = require('../assets/thunder-hail.png');
      break;
    default:
      weatherObj.description = 'UNKNOWN';
      weatherObj.iconImage = require('../assets/unknown.png');
  }
  return weatherObj;
}
