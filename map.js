
// Themes begin
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);
// Themes end

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

var mapData = [
    { "id": "CH", "name": "Switzerland", "value": 12, "color": chart.colors.getIndex(0) },
   { "id": "NL", "name": "Netherlands", "value": 16, "color": chart.colors.getIndex(0) },
  { "id": "GB", "name": "United Kingdom", "value": 49, "color": chart.colors.getIndex(0) },
  { "id": "FR", "name": "France", "value": 27, "color": chart.colors.getIndex(0) },
  { "id": "DE", "name": "Germany", "value": 12, "color": chart.colors.getIndex(0) },
  { "id": "CN", "name": "China", "value": 119, "color": chart.colors.getIndex(1) },
  { "id": "JP", "name": "Japan", "value": 12, "color": chart.colors.getIndex(1) },
    { "id": "KR", "name": "South Korea", "value": 19, "color": chart.colors.getIndex(1) },
    { "id": "SG", "name": "Singapore", "value": 10, "color": chart.colors.getIndex(1) },
    { "id": "IN", "name": "India", "value": 23, "color": chart.colors.getIndex(1) },
      { "id": "IL", "name": "Israel", "value": 28, "color": chart.colors.getIndex(1) },
  { "id": "CA", "name": "Canada", "value": 22, "color": chart.colors.getIndex(2) },
  { "id": "US", "name": "United States", "value": 299, "color": chart.colors.getIndex(2) },
  { "id": "AU", "name": "Australia", "value": 12, "color": chart.colors.getIndex(3) },
];


// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["AQ"];
polygonSeries.useGeodata = true;
polygonSeries.nonScalingStroke = true;
polygonSeries.strokeWidth = 0.5;
polygonSeries.calculateVisualCenter = true;

polygonSeries.events.on("validated", function(){
  imageSeries.invalidate();
})


var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.data = mapData;
imageSeries.dataFields.value = "value";

var imageTemplate = imageSeries.mapImages.template;
imageTemplate.nonScaling = true

imageTemplate.adapter.add("latitude", function(latitude, target) {
  var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
  if(polygon){
    return polygon.visualLatitude;
   }
   return latitude;
})

imageTemplate.adapter.add("longitude", function(longitude, target) {
  var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext.id);
  if(polygon){
    return polygon.visualLongitude;
   }
   return longitude;
})

var circle = imageTemplate.createChild(am4core.Circle);
circle.fillOpacity = 0.7;
circle.propertyFields.fill = "color";
circle.tooltipText = "{name}: [bold]{value}[/]";

imageSeries.heatRules.push({
  "target": circle,
  "property": "radius",
  "min": 4,
  "max": 30,
  "dataField": "value"
})

var label = imageTemplate.createChild(am4core.Label);
label.text = "{name}"
label.horizontalCenter = "middle";
label.padding(0,0,0,0);
label.adapter.add("dy", function(dy, target){
  var circle = target.parent.children.getIndex(0);
  return circle.pixelRadius;
})