window.onload = () => {
    displayStores();
}

var map;
var markers = [];
var infoWindow;

function initMap() {
    var losAngeles = {
        lat: 34.063380,
        lng: -118.358080
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap'
    });
    infoWindow = new google.maps.InfoWindow();
    showStoresMarkers();

}


function displayStores() {
   var storesHtml = ''; 
   for(var [index, store] of stores.entries()){
    var address = store['addressLines'];
    var phone = store['phoneNumber'];
       storesHtml += `
           <div class="store-container">
               <div class="store-info-container">
                   <div class="store-address">
                       <span>${address[0]}</span>
                       <span>${address[1]}</span>
                   </div>
                   <div class="store-phone-number">
                       ${phone}
                   </div>
               </div>
               <div class="store-number-container">
                   <div class="store-number">${++index}</div>
               </div>
           </div>
   `
   document.querySelector('.stores-list').innerHTML = storesHtml;
   }
}

function showStoresMarkers() {
    var bounds = new google.maps.LatLngBounds();
    for(var [index, store] of stores.entries()){
        var latlng = new google.maps.LatLng(
            store.coordinates.latitude,
            store.coordinates.longitude
            );
        var name = store.name;
        var address = store.addressLines[0];
        bounds.extend(latlng);

        createMarker(latlng, name, address, index + 1)
    }
    map.fitBounds(bounds);
}

function createMarker(latlng, name, address, index) {
    var html = "<b>" + name + "</b> <br/>" + address;
    var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      label: index.toString()
    });
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(html);
      infoWindow.open(map, marker);
    });
    markers.push(marker);
}













    // // create marker and set its position
    // var marker = new google.maps.Marker({
	// map: map,
	// position: losAngeles,
	// title: 'Main Store'
    // });

    // var stores = [
    //     {
    //         name: 'Store 1',
    //         location: {lat:  34.057141, lng: -118.296041},
    //         hours: '8AM to 10PM'
    //     },
    //     {
    //         name: 'Store 2',
    //         location: {lat: 34.087712, lng: -118.288520},
    //         hours: '9AM to 9PM'
    //     },
    //     {
    //         name: 'Store 3',
    //         location: {lat:34.041329, lng: -118.210967},
    //         hours: '9AM to 9PM'
    //     },
    //     {
    //         name: 'Store 4',
    //         location: {lat:34.001329, lng: -118.210967},
    //         hours: '9AM to 9PM'
    //     }

    // ];

    // function markStore(storeInfo){

    //     // Create a marker and set its position.
    //     var marker = new google.maps.Marker({
    //         map: map,
    //         position: storeInfo.location,
    //         title: storeInfo.name
    //     });
    
    //     // show store info when marker is clicked
    //     marker.addListener('click', function(){
    //         showStoreInfo(storeInfo);
    //     });
    // }
    
    // // show store info in text box
    // function showStoreInfo(storeInfo){
    //     var info_div = document.getElementById('info_div');
    //     info_div.innerHTML = 'Store name: '
    //         + storeInfo.name
    //         + '<br>Hours: ' + storeInfo.hours;
    // }


    // stores.forEach(function(store){
    //     markStore(store);
    // });
