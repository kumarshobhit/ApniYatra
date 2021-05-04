const goodCampground = JSON.parse(JSON.stringify(campground));
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvYmhpdGtyIiwiYSI6ImNrbW9mNGhrMDIzdTIybm1pOWxsazNremUifQ.7eP9sW_LO7_edqthxGNZfQ';
var camp = document.getElementById("map").getAttribute("data1")
console.log(camp)
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: goodCampground.geometry.coordinates,
    zoom: 8
});


// Create a default Marker and add it to the map.
var marker1 = new mapboxgl.Marker()
    .setLngLat(goodCampground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${goodCampground.title}</h3><p>${goodCampground.location}</p>`
            )
    )
    .addTo(map);


// var markerHeight = 50, markerRadius = 10, linearOffset = 25;
// var popupOffsets = {
//  'top': [0, 0],
//  'top-left': [0,0],
//  'top-right': [0,0],
//  'bottom': [0, -markerHeight],
//  'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
//  'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
//  'left': [markerRadius, (markerHeight - markerRadius) * -1],
//  'right': [-markerRadius, (markerHeight - markerRadius) * -1]
//  };
// var popup = new mapboxgl.Popup({offset: popupOffsets, className: 'my-class'})
//   .setLngLat(goodCampground.geometry.coordinates)
//   .setHTML("<h1>Hello World!</h1>")
//   .setMaxWidth("300px")
//   .addTo(map);

