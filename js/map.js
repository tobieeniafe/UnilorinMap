function initMap() {
        var auditorium = {lat: 8.4793627, lng: 4.673671399999989};
        var minZoomLevel = 15;

        var map = new google.maps.Map(document.getElementById('map'), {
          center: auditorium,
          zoom: 17
        });

        var marker = new google.maps.Marker({
          position: auditorium,//marker should be at users position
          animation: google.maps.Animation.BOUNCE,
          map: map
        });

        var myCity = new google.maps.Circle({
            center: auditorium,
            radius: 2000,
            strokeColor: "#0000FF",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#0000FF",
            fillOpacity: 0.1
        });

        //myCity.setMap(map);


         // Bounds for Unilorin
        var boundary = { lat: 8.4793627 , lng: 4.673671399999989};
        var strictBounds = new google.maps.LatLngBounds(
        //new google.maps.LatLng(8.465054, 4.696776),
        new google.maps.LatLng(boundary.lat , boundary.lng)
        );

        // Listen for the dragend event
         google.maps.event.addListener(map, 'dragend', function () {
             if (strictBounds.contains(map.getCenter())) return;

             // We're out of bounds - Move the map back within the bounds

             var c = map.getCenter(),
                 x = c.lng(),
                 y = c.lat(),
                 maxX = strictBounds.getNorthEast().lng(),
                 maxY = strictBounds.getNorthEast().lat(),
                 minX = strictBounds.getSouthWest().lng(),
                 minY = strictBounds.getSouthWest().lat();

             if (x < minX) x = minX;
             if (x > maxX) x = maxX;
             if (y < minY) y = minY;
             if (y > maxY) y = maxY;

             map.setCenter(new google.maps.LatLng(y, x));
         });

         // Limit the zoom level
         google.maps.event.addListener(map, 'zoom_changed', function () {
             if (map.getZoom() < minZoomLevel) map.setZoom(minZoomLevel);
         });

        var infoWindow = new google.maps.InfoWindow({map: map});

        function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('Your location');
                map.setCenter(pos);
              }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
              });
            } else {
              // Browser doesn't support Geolocation
              handleLocationError(false, infoWindow, map.getCenter());
            }
      }   
      getLocation();     
}


      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }


