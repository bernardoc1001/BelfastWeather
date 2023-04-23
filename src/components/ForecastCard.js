import {Image, StyleSheet, Text, View} from 'react-native';
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
    <Card style={styles.card}>
      <Card.Title title={dayOfWeekName} />
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    marginBottom: 8,
  },
});

export default ForecastCard;
