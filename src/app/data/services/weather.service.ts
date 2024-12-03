import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Weather } from '../interfaces/weather.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  http = inject(HttpClient);

  private apiUrl = 'https://api.open-meteo.com/v1/forecast';

  getWeather(latitude: number, longitude: number): Observable<Weather> {
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min`;
    return this.http.get<Weather>(url);
  }
}
