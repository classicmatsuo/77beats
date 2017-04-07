
// var allMyMarkers = [];
// var map; 

// function initMap() {
      
//     var locations = [
//         ['Old Town School, Chicago', '41.9621459','-87.6882185'],
//         ['Buckingham Fountain', '41.8757984', '-87.6211423'],
//         ['Daley Plaza', '41.8842641', '-87.6325377'],
//         ['Polish Triangle Plaza', '41.9035548', '-87.6693229'],
//         ['Perez Plaza', '41.8438649', '-87.735059'],

//         ['Foster Beach Soccer Fields', '41.975544', '-87.6506857'],
//         ['Garifuna Flava Restaurant', '41.7794216', '-87.6890704'],
//         ['Jackson Homan Plaza', '41.8772296', '-87.7179513'],
//         ['Ping Tom Park', '41.8566264', '-87.6352421'],
//         ['Bridge Museum Riverwalk', '41.8884948', '-87.6268366'],

//         ['Yassa Restaurant', '41.8307357', '-87.6188881'],
//         ['41st Street Beach', '41.8203685', '-87.5997158'],
//         ['Midway Plaza', '41.8952406', '-87.7689309'],
//         ['TBD', '41.9115934', '-87.6366315'],
//         ['Cambodian National Heritage Museum', '41.9683571', '-87.7021144'],

//         ['Baltimore Brainard Plaza', '41.6548487', '-87.5495932'],
//         ['Ogden Mall', '41.9080497', '-87.6476918'],
//         ['Sarajevo Restaurant', '41.9683831', '-87.6986982'],
//         ['Segundo Ruiz Cultural Center', '41.917294', '-87.7305854'],
//         ['Englewood Plaza', '41.7808105', '-87.6396897'],
//         ];
     
//     // Info Window Content
//     var infoWindowContent = [
//         ['<div class="info_content">' + '<h3>Old Town School of Folk</h3>' + '<p>4544 North Lincoln Ave</p>' + '</div>'], 
//         ['<div class="info_content">' + '<h3>Buckingham Fountain</h3>' + '<p>301 South Columbus</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>DCASE Farmers Market Kickoff</h3>' + '<p>Daley Plaza</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Polish Triangle Plaza</h3>' + '<p>Ashland and Division</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Perez Plaza</h3>' + '<p>4345 W 26th street</p>' + '</div>'],

//         ['<div class="info_content">' + '<h3>World Refugee Day Celebration</h3>' + '<p>Foster Beach Soccer Fields</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Garifuna Flava Restaurant</h3>' + '<p>2518 West 63rd Street</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Jackson Homan Plaza</h3>' + '<p>South Central Park Blvd and Jackson</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Ping Tom Park</h3>' + '<p>300 W 19th St, Chicago, IL 60616</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Bridge Museum Riverwalk</h3>' + '<p>376 N Michigan Ave, Chicago, IL 60601</p>' + '</div>'],

//         ['<div class="info_content">' + '<h3>Yassa Restaurant</h3>' + '<p>3511 S King Dr, Chicago, IL 60653</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>41st Street Beach</h3>' + '<p>4100 S Lake Shore Dr, Chicago, IL 60653</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Midway Plaza</h3>' + '<p>W Midway Park 60644</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>TBD</h3>' + '<p>1615 N Wells St, Chicago, IL 60614</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Cambodian National Heritage Museum</h3>' + '<p>2831 W Lawrence Ave, Chicago, IL 60625</p>' + '</div>'],

//         ['<div class="info_content">' + '<h3>Baltimore Brainard Plaza</h3>' + '<p>13220 S Baltimore Ave, Chicago, IL 60633</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Ogden Mall</h3>' + '<p>Clybourn and Ogden</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Sarajevo Restaurant</h3>' + '<p>42701 W Lawrence Ave, Chicago, IL 60625</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Segundo Ruiz Cultural Center</h3>' + '<p>4046 W Armitage Ave, Chicago, IL 60639</p>' + '</div>'],
//         ['<div class="info_content">' + '<h3>Englewood Plaza</h3>' + '<p>W Englewood Ave 60621</p>' + '</div>'],

//     ];

//     var infoWindow = new google.maps.InfoWindow(), marker, i;

//     var mapOptions = {
//         center: new google.maps.LatLng(41.85, -87.649),
//         zoom: 12,
//         scrollwheel: false,
//         mapTypeId: google.maps.MapTypeId.ROAD,
//         mapTypeControl: false,
//     };
     
//     map = new google.maps.Map(document.getElementById("map-canvas"),
//             mapOptions);
     
//     // draw marker on map
//     for (i = 0; i < locations.length; i++) {
//         marker = new google.maps.Marker({
//             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//             map: map,
//             id: i
//         });
//         allMyMarkers.push(marker);

//         // Allow each marker to have an info window    
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {
//                 infoWindow.setContent(infoWindowContent[i][0]);
//                 infoWindow.open(map, marker);
//             }
//         })(marker, i));
//     }

// };
 
// function toggleBounce(selectedID) {
//     var pinID = selectedID.split('_');
//     // loop through our array & check with marker has same ID with the text
//     for(var j=0;j<allMyMarkers.length;j++){
//         if(allMyMarkers[j].id == pinID[1]){
//             if (allMyMarkers[j].getAnimation() != null) {
//                     allMyMarkers[j].setAnimation(null);
//             } else {
//                     allMyMarkers[j].setAnimation(google.maps.Animation.BOUNCE);
//                     map.setCenter(allMyMarkers[j].getPosition());
//             }
//             break; // stop continue looping
//         }
//     }
// }; // end toggleBounce

// // function pageReload(){
// //     var a = initMap();
// //     var b = $('#mapcontent div .well').hover(function(){
// //             var selectedID = $(this).attr('id');
// //             toggleBounce(selectedID);
// //         });
// //     return a, b;
// // };

// $(document).ready(function() {
//     // init & construct the map
//     // initMap();
//     $('#mapcontent div .well').hover(function(){
//         var selectedID = $(this).attr('id');
//         toggleBounce(selectedID);
//     });
//     // $('.navbar-nav li a').click(function(){
//     //     setTimeout(function(){ return pageReload(); }, 1000);
//     // });
// });
