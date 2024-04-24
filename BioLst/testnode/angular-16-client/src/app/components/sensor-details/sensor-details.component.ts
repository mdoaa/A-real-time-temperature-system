import { Component, OnInit,OnDestroy } from '@angular/core';
import { CrudService } from '../../services/Main.service';
import{Sensor}from '../../models/sensor.model'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.css']
})

export class SensorDetailsComponent implements OnInit,OnDestroy  {
  id: number | any = 0;
  Sensors: any = [];
  nowdate: Date = new Date();
  


  constructor(private crudService: CrudService) { }

  

  // ngOnInit(): void {
  //   this.crudService.GetAll().subscribe(res => {
  //     console.log(res)
  //     this.Sensors =res;
  //   });    
  // }
  ngOnInit() {

    this.callMethod();
    this.id = setInterval(() => {
        this.callMethod(); }, 5000);
  }
ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id as number);
    }
  }

callMethod() {
  this.crudService.GetAll().subscribe(res => {
        console.log(res);
        this.Sensors = res;
    // console.log('Call Function Every Five Seconds.', new Date());
    })}

}


