var chartData = [{
  "year": 2017,
      "cars": 40,
      "motorcycles": 30,
      "bicycles": 100
}, {
  "year": 2018,
      "cars": 49.18,
      "motorcycles": 38.05,
      "bicycles": 12.60
}, {
  "year": 2019,
      "cars": 70.99,
      "motorcycles": 45.12,
      "bicycles": 19.00
}, {
  "year": 2020,
      "cars": 125.15,
      "motorcycles": 48.16,
      "bicycles": 7.43
}, {
  "year": 2021,
      "cars": 176.47,
      "motorcycles": 93.54,
      "bicycles": 4.59
}, {
  "year": 2022,
      "cars": 200,
      "motorcycles": 100,
      "bicycles": 4
}];

var chart =  AmCharts.makeChart("chartdiv", {
   "type": "serial",
   "fontFamily": "Lato",
   "autoMargins": true,
   "addClassNames": true,
   "zoomOutText": "",
   "defs": {
       "filter": [
           {
               "x": "-50%",
               "y": "-50%",
               "width": "200%",
               "height": "200%",
               "id": "blur",
               "feGaussianBlur": {
                   "in": "SourceGraphic",
                   "stdDeviation": "50"
               }
           },
           {
               "id": "shadow",
               "width": "150%",
               "height": "150%",
               "feOffset": {
                   "result": "offOut",
                   "in": "SourceAlpha",
                   "dx": "2",
                   "dy": "2"
               },
               "feGaussianBlur": {
                   "result": "blurOut",
                   "in": "offOut",
                   "stdDeviation": "10"
               },
               "feColorMatrix": {
                   "result": "blurOut",
                   "type": "matrix",
                   "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0"
               },
               "feBlend": {
                   "in": "SourceGraphic",
                   "in2": "blurOut",
                   "mode": "normal"
               }
           }
       ]
   },
   "fontSize": 15,
   "dataProvider": chartData,
   "dataDateFormat": "YYYY",
   "marginTop": 0,
   "marginRight": 1,
   "marginLeft": 0,
   "autoMarginOffset": 5,
   "categoryField": "year",
   "categoryAxis": {
       "gridAlpha": 0.07,
       "axisColor": "#DADADA",
       "startOnAxis": true,
       "tickLength": 0,
       "parseDates": true,
       "minPeriod": "YYYY"
   },
   "valueAxes": [
       {
           "ignoreAxisWidth":true,
           "stackType": "regular",
           "gridAlpha": 0.07,
           "axisAlpha": 0,
           "inside": true
       }
   ],
   "graphs": [
       {
           "id": "g1",
           "type": "line",
           "title": "Cars",
           "valueField": "cars",
           "fillColors": [
               "#0066e3",
               "#802ea9"
           ],
           "lineAlpha": 0,
           "fillAlphas": 0.8,
           "showBalloon": false
       },
       {
           "id": "g2",
           "type": "line",
           "title": "Motorcycles",
           "valueField": "motorcycles",
           "lineAlpha": 0,
           "fillAlphas": 0.8,
           "lineColor": "#5bb5ea",
           "showBalloon": false
       },
       {
           "id": "g3",
           "title": "Bicycles",
           "valueField": "bicycles",
           "lineAlpha": 0.5,
           "lineColor": "#FFFFFF",
           "bullet": "round",
           "dashLength": 2,
           "bulletBorderAlpha": 1,
           "bulletAlpha": 1,
           "bulletSize": 15,
           "stackable": false,
           "bulletColor": "#5d7ad9",
           "bulletBorderColor": "#FFFFFF",
           "bulletBorderThickness": 3,
           "balloonText": "<div style='margin-bottom:30px;text-shadow: 2px 2px rgba(0, 0, 0, 0.1); font-weight:200;font-size:30px; color:#ffffff'>[[value]]</div>"
       }
   ],
   "chartCursor": {
       "cursorAlpha": 1,
       "zoomable": false,
       "cursorColor": "#FFFFFF",
       "categoryBalloonColor": "#8d83c8",
       "fullWidth": true,
       "categoryBalloonDateFormat": "YYYY",
       "balloonPointerOrientation": "vertical"
   },
   "balloon": {
       "borderAlpha": 0,
       "fillAlpha": 0,
       "shadowAlpha": 0,
       "offsetX": 40,
       "offsetY": -50
   }
});

// we zoom chart in order to have better blur (form side to side)
chart.addListener("dataUpdated", zoomChart);

function zoomChart(){
   chart.zoomToIndexes(1, chartData.length - 2);
}