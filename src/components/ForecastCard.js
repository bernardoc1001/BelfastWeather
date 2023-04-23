import {Text} from 'react-native';

function ForecastCard({date, weathercode}) {
  return (
    <Text>
      Forecast {date} - {weathercode}
    </Text>
  );
}

export default ForecastCard;
