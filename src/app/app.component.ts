import { CurrentWeather } from './data/interfaces/weather.interface';
import { ProfileService } from './data/services/profile.service';
import { Component, inject } from '@angular/core';
import { UserCardComponent } from './common-ui/user-card/user-card.component';
import { Profile, Result } from './data/interfaces/profile.interface';
import { WeatherService } from './data/services/weather.service';
import { WeatherCardComponent } from './common-ui/weather-card/weather-card.component';

@Component({
  selector: 'app-root',
  imports: [UserCardComponent, WeatherCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  profileService = inject(ProfileService);
  profile: Result | null = null;

  weatherService = inject(WeatherService);
  weatherData: any = null;

  constructor() {
    this.profileService.getUserInfo().subscribe((val: Profile) => {
      this.profile = val.results[0];
      if (this.profile) {
        const { latitude, longitude } = this.profile.location.coordinates;
        this.getWeatherData(parseFloat(latitude), parseFloat(longitude));
      }
    });
  }

  getWeatherData(latitude: number, longitude: number): void {
    this.weatherService.getWeather(latitude, longitude).subscribe((data) => {
      this.weatherData = data;
    });
  }
}
