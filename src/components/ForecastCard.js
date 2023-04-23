import {Image, Text, View} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {weatherCodeToWeatherObj} from '../utils/weatherCodeUtils';
import {useEffect, useState} from 'react';

function ForecastCard({date, weathercode}) {
  const [weatherObj, setWeatherObj] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const dateObj = new Date(date);
  const dayOfWeekName =
    dateObj !== null
      ? dateObj.toLocaleString('default', {weekday: 'short'})
      : 'Unknown date';

  useEffect(() => {
    setWeatherObj(weatherCodeToWeatherObj(weathercode));
  }, [weathercode]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card>
      <Card.Title title={dayOfWeekName} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <Card.Content>
          {weatherObj && weatherObj.iconImage && (
            <Image
              source={weatherObj.iconImage}
              style={{width: 35, height: 35}}
            />
          )}

          <Text> {weatherObj && weatherObj.description} </Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="text" onPress={toggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
        </Card.Actions>
      </View>

      {showMore && (
        <Card.Content>
          <Text>Weather Code: {weathercode}</Text>
        </Card.Content>
      )}
    </Card>
  );
}

export default ForecastCard;
