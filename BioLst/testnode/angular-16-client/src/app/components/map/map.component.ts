// map.component.ts
import { Component , ViewChild, NgZone } from '@angular/core';
import {  MapInfoWindow,GoogleMapsModule  ,MapMarker} from '@angular/google-maps';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  template: `
    <h2>Welcome to the Map Page!</h2>
  <!--  <google-map [options]="mapOptions" (mapClick)="onMapClick($event)">
      Add other map components or overlays here 
    </google-map> -->
  `,
})
export class MapComponent {

  constructor(private router: Router,
              private ngZone: NgZone,
    ) {}

  onSubmit(): any {
   // this.crudService.AddBook(this.Sensorform.value)
    //.subscribe(() => {
     //   console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/adds'))
     // }, (err) => {
     //   console.log(err);
   // });
  }

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
   
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
}
    mapCenter: google.maps.LatLngLiteral = { lat: 51.678418, lng: 7.809007 };
  mapOptions: google.maps.MapOptions = {
    center: this.mapCenter,
    zoom: 12,
  };
  

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
   };

  markerPositions: google.maps.LatLngLiteral= {lat:30, lng:31};

  

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions=event.latLng.toJSON();
     }
  
   onMarkerClick() {
      // Action to perform when the marker is clicked
      // For example, navigate to another page
      this.router.navigateByUrl('/adds'); 
    }   
 
    ngOnInit(): void {}
  
    display: any;
    center: google.maps.LatLngLiteral = {
        lat: 29.8,
        lng: 31.3
    };
    zoom = 3;
  
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
