var mymap = L.map('mapid').setView([47.583807, 12.1736679], 18); 
//var map = L.map('map').setView([45.8167, 15.9833], 10);

/*start lock map */
mymap.dragging.disable();
mymap.touchZoom.disable();
mymap.doubleClickZoom.disable();
mymap.scrollWheelZoom.disable();
mymap.boxZoom.disable();
mymap.keyboard.disable();
if (mymap.tap) mymap.tap.disable();
document.getElementById('mapid').style.cursor = 'default';

mymap.removeControl(mymap.zoomControl);
/*end lock map */

//add base map tiles from OpenStreetMap and attribution info to 'map' div
L.tileLayer('https://maps4.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
}).addTo( mymap );

//Maker kommen hinzu
var markerOne = L.marker([47.584306, 12.172306]).bindPopup("Punkt 1 You are within " + /*abstand1 +*/ " meters from this point").addTo(mymap); //geolocation
var markerTwo = L.marker([47.5839, 12.1736679]).bindPopup("Punkt 2 You are within " +  /*abstand1 +*/ " meters from this point").addTo(mymap);
var markerThree = L.marker([47.583567, 12.171686]).bindPopup("Punkt 3 You are within " +  /*abstand1 +*/ " meters from this point").addTo(mymap);
var markerFour = L.marker([47.583516, 12.172401]).bindPopup("Punkt 4 You are within " +  /*abstand1 +*/ " meters from this point").addTo(mymap);
var markerFive = L.marker([47.584189, 12.171574]).bindPopup("Punkt 5 You are within " +  /*abstand1 +*/ " meters from this point").addTo(mymap);

/*var abstand1 = getDistanceToString(markerOne, markerFive);

function getDistanceToString(punkt1, punkt2) {
    if (punkt1 != undefined) {
        console.log(punkt1.latlng);
    }
    abstand = mymap.distanceTo(punkt1.latlng, punkt2.latlng)
    return abstand;
    //return "mymap.distanceTo(punkt1.latlng, punkt2.latlng);";
}*/

mymap.locate({setView: true, minZoom: 18, maxZoom: 18, watch: true}); /*Zoom level bestimmt, 18 max*/

function onLocationFound(e) {
    var radius = e.accuracy / 2; 
   /*marker = new L.marker(e.latlng, {draggable:true})
    mymap.addLayer(marker)
    mymap.removeLayer(marker)

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);*/
     var location = e.latlng
    L.marker(location).addTo(mymap);
    L.circle(location, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);