import { Component, OnInit } from '@angular/core';
import { WeatherData } from './module/weather.module';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService :WeatherService){


  }
  weatherDatainfo?: WeatherData;
  placeName :string = "shimla"
  ngOnInit(): void {
    this.getWeatherData(this.placeName)
    this.placeName=''
  }

  searchPlaceNow(){
    this.getWeatherData(this.placeName)
    this.placeName=''
  }

private getWeatherData(placeName:string ){
  this.weatherService.getWeatherData(this.placeName).subscribe
  ({
    next:(response)=>{
      console.log(response)
      this.weatherDatainfo=response
   
      

    }
  })
}

  title = 'WeatherProject';
}
