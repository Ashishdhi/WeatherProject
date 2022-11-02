import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{WeatherData} from '../module/weather.module';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityname:string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.ApiBaseURL+cityname,{
      headers:new HttpHeaders().set(environment.KEYHOSTLABELIS,environment.KEYHOSTIS)
      .set(environment.KEYLABELIS,environment.KEYIS)
    })
  }
}
