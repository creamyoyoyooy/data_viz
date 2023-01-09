var chartData = {
  "barCircleMobile":[
      {"index":0.3, "value":299, "fill":"#231F20", "label":"2021"},
      {"index":0.4, "value":348, "fill":"#494551", "label":"2020"},
      {"index":0.5, "value":409, "fill":"#564965", "label":"2019"},
      {"index":0.6, "value":505,  "fill":"#574270", "label":"2018"},
      {"index":0.7, "value":477,  "fill":"#4D2D77", "label":"2017"},
      {"index":0.8, "value":375,  "fill":"#684E88", "label":"2016"},
      {"index":0.9, "value":249,  "fill":"#846F9D", "label":"2015"},
      {"index":1,   "value":292,  "fill":"#A494B7", "label":"2014"},
      {"index":1.1, "value":280,  "fill":"#CBC3D6", "label":"2013"},
  ],
  "barCircleWeb":[
      {"index":0.3, "value":119, "fill":"#231F20", "label":"2021"},
      {"index":0.4, "value":121, "fill":"#403437", "label":"2020"},
      {"index":0.5, "value":213, "fill":"#53363C", "label":"2019"},
      {"index":0.6, "value":200, "fill":"#5E2C3A", "label":"2018"},
      {"index":0.7, "value":94, "fill":"#660E34", "label":"2017"},
      {"index":0.8, "value":71, "fill":"#7D3A4D", "label":"2016"},
      {"index":0.9, "value":67, "fill":"#96606B", "label":"2015"},
      {"index":1,   "value":30,  "fill":"#B28A91", "label":"2014"},
      {"index":1.1, "value":25,  "fill":"#D3BCBF", "label":"2013"},
  ]
};

function drawBarCircleChart(data,target,values,labels){
  var w = 362,
      h = 362,
      size = data[0].value * 1.15,
      radius = 200,
      sectorWidth = .1,
      radScale = 25,
      sectorScale = 1.45,
      target = d3.select(target),
      valueText = d3.select(values),
      labelText = d3.select(labels);


  var arc = d3.svg.arc()
      .innerRadius(function(d,i){return (d.index/sectorScale) * radius + radScale; })
      .outerRadius(function(d,i){return ((d.index/sectorScale) + (sectorWidth/sectorScale)) * radius + radScale; })
      .startAngle(Math.PI)
      .endAngle(function(d) { return Math.PI + (d.value / size) * 2 * Math.PI; });
  
  var path = target.selectAll("path")
      .data(data);

  //TODO: seperate color and index from data object, make it a pain to update object order
  path.enter().append("svg:path")
      .attr("fill",function(d,i){return d.fill})
      .attr("stroke","#D1D3D4")
      .transition()
      .ease("elastic")
      .duration(1000)
      .delay(function(d,i){return i*100})
      .attrTween("d", arcTween);
      
  valueText.selectAll("tspan").data(data).enter()
      .append("tspan")
      .attr({
          x:50,
          y:function(d,i){return i*14},       
          "text-anchor":"end"
      })
      .text(function(d,i){return data[i].value});
  
  labelText.selectAll("tspan").data(data).enter()
      .append("tspan")
      .attr({
          x:0,
          y:function(d,i){return i*14}
      })
      .text(function(d,i){return data[i].label});

  function arcTween(b) {
      var i = d3.interpolate({value: 0}, b);
      return function(t) {
          return arc(i(t));
      };
  }
}

// Animation Queue
setTimeout(function(){drawBarCircleChart(chartData.barCircleWeb,"#circleBar-web-chart","#circleBar-web-values","#circleBar-web-labels")},500);
setTimeout(function(){drawBarCircleChart(chartData.barCircleMobile,"#circleBar-mobile-chart","#circleBar-mobile-values","#circleBar-mobile-labels")},800);

d3.select("#circleBar-web-icon")
  .transition()
  .delay(500)
  .duration(500)
  .attr("opacity","1");
d3.select("#circleBar-web-text")
  .transition()
  .delay(750)
  .duration(500)
  .attr("opacity","1");

d3.select("#circleBar-web-clipLabels")
  .transition()
  .delay(600)
  .duration(1250)
  .attr("height","150");

d3.select("#circleBar-mobile-icon")
  .transition()
  .delay(800)
  .duration(500)
  .attr("opacity","1");
d3.select("#circleBar-mobile-text")
  .transition()
  .delay(1050)
  .duration(500)
  .attr("opacity","1");
d3.select("#circleBar-mobile-clipLabels")
  .transition()
  .delay(900)
  .duration(1250)
  .attr("height","150");