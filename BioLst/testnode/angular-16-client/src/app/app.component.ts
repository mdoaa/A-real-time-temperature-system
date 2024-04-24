import { Component,OnInit,OnDestroy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular 16 Crud example';
  id: number | any = 0;
  constructor() {}
      
    ngOnInit(): void {}
    // ngOnInit() {
    //     this.callMethod();
    //     this.id = setInterval(() => {
    //         this.callMethod(); }, 5000);
    //   }
    // ngOnDestroy() {
    //     if (this.id) {
    //       clearInterval(this.id as number);
    //     }
    //   }
    // callMethod(){
    //     console.log('Call Function Every Five Seconds.', new Date());
    //   }
    display: any;
    center: google.maps.LatLngLiteral = {
        lat: 22.2736308,
        lng: 70.7512555
    };
    zoom = 6;
  
    /*------------------------------------------
    --------------------------------------------
    moveMap()
    --------------------------------------------
    --------------------------------------------*/
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
  
    /*------------------------------------------
    --------------------------------------------
    move()
    --------------------------------------------
    --------------------------------------------*/
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }
}
