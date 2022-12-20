//External Routes
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MapPageComponent implements OnInit {
  showLoading = true;
  public showMapPill: boolean;
  public mapLoaded: boolean;
  private map: google.maps.Map;
  private source: google.maps.LatLngLiteral;  //holds souce location
  private destination: google.maps.LatLngLiteral;  //holds destination location 

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

      this.customRoute(this.map);
      this.map.addListener('tilesloaded', () => {
        this.mapLoaded = true;
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
      travelMode: google.maps.TravelMode.WALKING
    };

    this.ds.route(request, (response, status) => {
      this.dr.setOptions({
        suppressPolylines: false,
        map: this.map
      });

      if (status == google.maps.DirectionsStatus.OK) {
        this.dr.setDirections(response);
        //this.renderDirections(response, this.map);
        console.log(response);
      }
    })
  }

  customRoute(map) {
    let paths: any = [];

    // traffic lights
    let image = 'https://cdn-icons-png.flaticon.com/32/1921/1921957.png';
    var marker = new google.maps.Marker({
      position: { lat: 51.48235, lng: -0.004773 },
      map: map,
      icon: image,
    });
    var marker = new google.maps.Marker({
      position: { lat: 51.48176755044623, lng: -0.006601601061620334 },
      map: map,
      icon: image,
    });
    var marker = new google.maps.Marker({
      position: { lat: 51.48286570133967, lng: -0.003111578984636815 },
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
    // path middle
    paths['1_to_2'] = new google.maps.Polyline({
      path: [
        new google.maps.LatLng(51.48323188200924, -0.005931933864728286),
        new google.maps.LatLng(51.48291915226012, -0.0031628253032282296),
        new google.maps.LatLng(51.48287238271483, -0.0033130289982496812),
        new google.maps.LatLng(51.482758799333716, -0.0032379271507389554),
        new google.maps.LatLng(51.48224767059445, -0.004672624541653587),
        new google.maps.LatLng(51.4811385349852, -0.003776766789204213),
        new google.maps.LatLng(51.48032877934226, -0.004568728310597497),
        new google.maps.LatLng(51.47855808394975, -0.007218750644190253),
        new google.maps.LatLng(51.476937447523056, 0.0014971219950487497)
      ],
      strokeColor: 'green',
    });

    // path 2
    paths['3_to_4'] = new google.maps.Polyline({
      path: [
        new google.maps.LatLng(51.48323188200924, -0.005931933864728286),
        new google.maps.LatLng(51.482895, -0.006724),
        new google.maps.LatLng(51.482762744005434, -0.007048920486082032),
        new google.maps.LatLng(51.482348496371664, -0.006668046830849065),
        new google.maps.LatLng(51.482218208031576, -0.006973818638571306),
        new google.maps.LatLng(51.481377561150104, -0.006270426434328414),
        new google.maps.LatLng(51.48150505802588, -0.00578871801713846),
        new google.maps.LatLng(51.48020007315681, -0.005535821098113734),
        new google.maps.LatLng(51.48045507313557, -0.004704874078461065),
        new google.maps.LatLng(51.479142558004725, -0.003548773862257335),
        new google.maps.LatLng(51.478197523704054, 0.0013526093888587597),
        new google.maps.LatLng(51.4766336739587, 0.0011779901686604065),
        new google.maps.LatLng(51.476937447523056, 0.0014971219950487497),
      ],
      strokeColor: 'orange',
    });

    paths['5_to_6'] = new google.maps.Polyline({
      path: [
        new google.maps.LatLng(51.48323188200924, -0.005931933864728286),
        new google.maps.LatLng(51.483863332638116, -0.003899672716885299),
        new google.maps.LatLng(51.48295467741339, -0.0031701119124953898),
        new google.maps.LatLng(51.48279432458089, -0.0030628235462925196),
        new google.maps.LatLng(51.48136448717233, -0.0019684823397076554),
        new google.maps.LatLng(51.479132782200054, -0.003556350037262544),
        new google.maps.LatLng(51.47821066861175, 0.0013789142921989842),
        new google.maps.LatLng(51.476941061439994, 0.0015291179872204358)
      ],
      strokeColor: 'red',
    });
    var first = 1;
    var second = 2;

    // Show the route
    if (typeof paths['' + first + '_to_' + second] !== 'undefined') {
      paths['' + first + '_to_' + second].setOptions({ map: map });
    } else if (typeof paths['' + second + '_to_' + first] !== 'undefined') {
      paths['' + second + '_to_' + first].setOptions({ map: map });
    }

    var third = 3;
    var fourth = 4;
    // Show the route
    if (typeof paths['' + third + '_to_' + fourth] !== 'undefined') {
      paths['' + third + '_to_' + fourth].setOptions({ map: map });
    }

    var fifth = 5;
    var sixth = 6;
    // Show the route
    if (typeof paths['' + fifth + '_to_' + sixth] !== 'undefined') {
      paths['' + fifth + '_to_' + sixth].setOptions({ map: map });
    }
    this.showLoading = false;

  }
}
