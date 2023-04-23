import React, {useEffect, useState} from 'react';
// react-native-get-random-values is used to make nanoid work in react native,
// see https://github.com/ai/nanoid#react-native for details
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import ForecastCard from './ForecastCard';
import {Card} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

const BELFAST_FORECAST_ENDPOINT =
  'https://api.open-meteo.com/v1/forecast?latitude=54.60&longitude=-5.93&daily=weathercode&timezone=GMT&forecast_days=5';

function FiveDayForecast() {
  const [forecastData, setForecastData] = useState(null);

  const getForecast = async (url, setData) => {
    try {
      axios
        .get(url)
        .then(apiResponse => {
          console.log(apiResponse.data);
          setData(apiResponse.data);
        })
        .catch(error => {
          // todo error handling
          console.error(error);
        });
    } catch (error) {
      // todo error handling
      console.error(error);
    }
  };

  useEffect(() => {
    getForecast(BELFAST_FORECAST_ENDPOINT, setForecastData);
  }, []);

  return (
    <Card>
      <Card.Title
        title="Five Day Forecast for Belfast"
        titleStyle={styles.titleStyle}
      />
      <Card.Content>
        {forecastData == null ? (
          <LoadingSpinner />
        ) : (
          <View style={styles.container}>
            {forecastData.daily.time.map((date, index) => {
              return (
                <ForecastCard
                  key={nanoid()}
                  date={date}
                  weathercode={forecastData.daily.weathercode[index]}
                />
              );
            })}
          </View>
        )}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  titleStyle: {alignSelf: 'center'},
});

export default FiveDayForecast;
