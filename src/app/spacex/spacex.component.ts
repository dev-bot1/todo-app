import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpacexComponent {
  spacex:any;
  link="https://api.spacexdata.com/v3/missions";
  constructor(private http:HttpClient){
    this.http.get(this.link).subscribe((spacey:any) =>{
    this.spacex=spacey;
    })
  }
}
