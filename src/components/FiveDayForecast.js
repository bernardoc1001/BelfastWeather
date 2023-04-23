import React, {useEffect, useState} from 'react';
// react-native-get-random-values is used to make nanoid work in react native,
// see https://github.com/ai/nanoid#react-native for details
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import ForecastCard from './ForecastCard';

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
    <>
      {forecastData == null ? (
        <LoadingSpinner />
      ) : (
        forecastData.daily.time.map((date, index) => {
          return (
            <ForecastCard
              key={nanoid()}
              date={date}
              weathercode={forecastData.daily.weathercode[index]}
            />
          );
        })
      )}
    </>
  );
}

export default FiveDayForecast;
