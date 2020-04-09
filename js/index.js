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
    // create marker and set its position
    var marker = new google.maps.Marker({
	map: map,
	position: losAngeles,
	title: 'Main Store'
    });

    var stores = [
        {
            name: 'Store 1',
            location: {lat:  34.057141, lng: -118.296041},
            hours: '8AM to 10PM'
        },
        {
            name: 'Store 2',
            location: {lat: 34.087712, lng: -118.288520},
            hours: '9AM to 9PM'
        },
        {
            name: 'Store 3',
            location: {lat:34.041329, lng: -118.210967},
            hours: '9AM to 9PM'
        },
        {
            name: 'Store 4',
            location: {lat:34.001329, lng: -118.210967},
            hours: '9AM to 9PM'
        }

    ];

    function markStore(storeInfo){

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
            map: map,
            position: storeInfo.location,
            title: storeInfo.name
        });
    
        // show store info when marker is clicked
        marker.addListener('click', function(){
            showStoreInfo(storeInfo);
        });
    }
    
    // show store info in text box
    function showStoreInfo(storeInfo){
        var info_div = document.getElementById('info_div');
        info_div.innerHTML = 'Store name: '
            + storeInfo.name
            + '<br>Hours: ' + storeInfo.hours;
    }


    stores.forEach(function(store){
        markStore(store);
    });
}