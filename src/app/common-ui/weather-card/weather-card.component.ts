import { Component, Input } from '@angular/core';
import { Weather } from '../../data/interfaces/weather.interface';

@Component({
  selector: 'app-weather-card',
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  @Input() weather!: Weather;

  specificWeatherIcons: { [key: number]: string } = {
    0: 'sunny.webp',
    1: 'partly_cloudy.webp',
    2: 'cloudy.webp',
    3: 'cloudy.webp',
  };

  weatherCategoryIcons: { [key: string]: string } = {
    fog: 'foggy.webp',
    rain: 'rainy.webp',
    snow: 'snowy.webp',
    thunderstorm: 'storm.webp',
    sleet: 'sleet.webp',
  };

  getWeatherIcon(weatherCode: number): string {
    if (this.specificWeatherIcons[weatherCode]) {
      return this.specificWeatherIcons[weatherCode];
    }

    if ([45, 48].includes(weatherCode)) {
      return this.weatherCategoryIcons['fog'];
    } else if ([51, 53, 55, 56, 57].includes(weatherCode)) {
      return this.weatherCategoryIcons['rain'];
    } else if ([61, 63, 65].includes(weatherCode)) {
      return this.weatherCategoryIcons['snow'];
    } else if ([66, 67].includes(weatherCode)) {
      return this.weatherCategoryIcons['sleet'];
    } else if ([71, 73, 75, 77, 80, 81, 82, 95, 96, 99].includes(weatherCode)) {
      return this.weatherCategoryIcons['thunderstorm'];
    }

    return 'warm.svg';
  }

  getMinTemperature(): number | null {
    return this.weather.daily?.temperature_2m_min
      ? Math.min(...this.weather.daily.temperature_2m_min)
      : null;
  }

  getMaxTemperature(): number | null {
    return this.weather.daily?.temperature_2m_max
      ? Math.max(...this.weather.daily.temperature_2m_max)
      : null;
  }
}
