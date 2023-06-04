import cloudy from '../assets/animated/cloudy-day-3.svg';
import rainy from '../assets/animated/rainy-6.svg';
import sunny from '../assets/animated/day.svg';

export type ForecastType = {
  weekday: string;
  date: string;
  temp: string;
  image?: string;
  weather: string;
};

export const forecastList: ForecastType[] = [
  {
    weekday: 'Monday',
    date: 'JAN 1',
    temp: '25°',
    image: cloudy,
    weather: 'Cloudy',
  },
  {
    weekday: 'Tuesday',
    date: 'JAN 2',
    temp: '32°',
    image: sunny,
    weather: 'Sunny',
  },
  {
    weekday: 'Wednesday',
    date: 'JAN 3',
    temp: '26°',
    image: 'https://raw.githubusercontent.com/betrybe/images/main/weather/thunder.svg',
    weather: 'Thunderstorm',
  },
  {
    weekday: 'Thursday',
    date: 'JAN 4',
    temp: '24°',
    image: rainy,
    weather: 'Rainy',
  },
  {
    weekday: 'Friday',
    date: 'JAN 5',
    temp: '25°',
    weather: 'Cloudy',
  },
  {
    weekday: 'Saturday',
    date: 'JAN 6',
    temp: '27°',
    image: sunny,
    weather: 'Sunny',
  },
];
