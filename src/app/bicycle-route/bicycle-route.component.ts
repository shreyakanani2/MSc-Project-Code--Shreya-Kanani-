//External Imports
import { Component, OnInit } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-bicycle-route',
  templateUrl: './bicycle-route.component.html',
  styleUrls: ['./bicycle-route.component.scss']
})
export class BicycleRouteComponent implements OnInit {
  showLoading = true;
  public showMapPill: boolean;
  private map: google.maps.Map;
  private source: google.maps.LatLngLiteral; //holds souce location
  private destination: google.maps.LatLngLiteral; //holds destination location 

  constructor() { }

  ds: google.maps.DirectionsService;
  dr: google.maps.DirectionsRenderer;

  ngOnInit() {
    this.ds = new google.maps.DirectionsService();
    this.dr = new google.maps.DirectionsRenderer({
      map: null,
      suppressMarkers: true
    });
    navigator.geolocation.getCurrentPosition(position => {

      this.source = {
        lat: 51.48306371098731,
        lng: -0.00607076565615742
      };

      this.destination = {
        lat: 51.4768927943953,
        lng: 0.0014428421863000335
      };

      // initialize the map container
      this.map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: this.source
      });

      //adding a marker
      var markerStart = new google.maps.Marker({
        position: this.source,
        map: this.map
      });

      var destinationMarker = new google.maps.Marker({
        position: this.destination,
        icon: {
          url: './assets/imgs/destination_custom_pin.svg',
          anchor: new google.maps.Point(45, 65),
          scaledSize: new google.maps.Size(80, 80)
        },
        map: this.map
      });

      this.map.addListener("click", (event: any) => {
        this.showMapPill = false;
      });
      this.setRoutePolyline();
    });
  }

  private setRoutePolyline() {
    let request = {
      origin: this.source,
      destination: this.destination,
      travelMode: google.maps.TravelMode.BICYCLING,
      provideRouteAlternatives: true
    };

    this.ds.route(request, (response, status) => {
      this.dr.setOptions({
        suppressPolylines: false,
        map: this.map
      });

      if (status == google.maps.DirectionsStatus.OK) {
        //this.dr.setDirections(response);
        this.renderDirections(response, this.map);
      }
    })
  }

  private renderDirections(result, map) {

    let image = 'https://cdn-icons-png.flaticon.com/32/1921/1921957.png';
    var marker = new google.maps.Marker({
      position: { lat: 51.48286570133967, lng: -0.003111578984636815 },
      map: map,
      icon: image,
    });
    var marker = new google.maps.Marker({
      position: { lat: 51.48176755044623, lng: -0.006601601061620334 },
      map: map,
      icon: image,
    });
    var toilet = "https://cdn4.iconfinder.com/data/icons/mini-icon-set-sign-navigation/91/Sign_-_Navigation_11-64.png"
    var marker = new google.maps.Marker({
      position: { lat: 51.47664121507586, lng: -0.0006294607328743888 },
      map: map,
      icon: toilet,
    });
    let museum = "https://icons.iconarchive.com/icons/iconsmind/outline/32/Museum-icon.png";
    var marker = new google.maps.Marker({
      position: { lat: 51.48102175836637, lng: -0.005226158558994337 },
      map: map,
      icon: museum,
    });
    let library = "https://icons.iconarchive.com/icons/benjigarner/rise-folder/32/Purple-library-icon.png";
    var marker = new google.maps.Marker({
      position: { lat: 51.47981904762866, lng: -0.008444809498821195 },
      map: map,
      icon: library,
    });
    let directionsRenderer1 = new google.maps.DirectionsRenderer({
      directions: result,
      routeIndex: 0,
      map: map,
      polylineOptions: {
        strokeColor: "blue"
      }
    });

    let directionsRenderer2 = new google.maps.DirectionsRenderer({
      directions: result,
      routeIndex: 1,
      map: map,
      polylineOptions: {
        strokeColor: "green"
      }
    });
    google.maps.event.addListener(directionsRenderer2, 'click',
      function (e) {
        let infoWindow = new google.maps.InfoWindow({ content: "Hello" });
        infoWindow.open(this.map, this);
      });
      this.showLoading = false;
  }
}
