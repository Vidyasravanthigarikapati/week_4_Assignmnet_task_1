require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function (Map, MapView, FeatureLayer) {

  var map = new Map({
    basemap: "streets"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-90.1994, 38.6270], // Center over St. Louis
    zoom: 12
  });

  // Popup Template showing all fields
  var template = {
    title: "Neighborhood: {NHD_NAME}",
    content: `
      <b>FID:</b> {FID}<br>
      <b>Neighborhood Number:</b> {NHD_NUM}<br>
      <b>Angle:</b> {ANGLE}<br>
      <b>Neighborhood Number Text:</b> {NHD_NUMTXT}<br>
      <b>Neighborhood Number ST:</b> {NHD_NUM_ST}<br>
      <b>Shape Area:</b> {Shape__Area}<br>
      <b>Shape Length:</b> {Shape__Length}
    `
  };

  var featureLayer = new FeatureLayer({
    url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/ArcGIS/rest/services/STL_Neighborhood/FeatureServer/0",
    outFields: ["*"], // include all fields
    popupTemplate: template
  });

  /*
  featureLayer.renderer = {
    type: "simple",  
    symbol: {
      type: "simple-marker",  
      size: 6,
      color: "red",
      outline: {  
        width: 0.5,
        color: "white"
      }
    }
  };
  */

  map.add(featureLayer);

});
