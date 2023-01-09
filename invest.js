
var chart = am4core.create("chartdiv", am4charts.SankeyDiagram);

chart.data = [
 {
   "from": "Medical and healthcare",
   "color": "#27aee8a3",
 },
 {
   "from": "Data management, processing, cloud",
   "color": "#27aee8a3",
 },
 {
   "from": "Financial tech",
   "color": "#27aee8a3",
 },
 {
   "from": "Retail",
   "color": "#27aee8a3",
 },
 {
   "from": "Industrial automation, network",
   "color": "#27aee8a3",
 },
 {
   "from": "Audiovisual",
   "color": "#27aee8a3",
 },
 {
   "from": "Semiconductor",
   "color": "#27aee8a3",
 },
 {
   "from": "Fitness and wellness",
   "color": "#27aee8a3",
 },
 {
   "from": "Natural language, customer support",
   "color": "#27aee8a3",
 },
 {
   "from": "Other",
   "color": "#27aee8a3",
   "labelText": "Other\n[bold #1202f4 font-size:1.3em]$71.903 BILLION",
 },
 {
   "from": "Source",
   "color": "#7127e8a3",
   "to": "Total",
   "value": 250.193,
   "labelText": "[#cbcbcbba bold font-size:2em]2017-2022\nPrivate Investment in AI \n\n[#cbcbcbba font-size:2em]Total\n [#cbcbcbba bold font-size:2em]$250.193 Billion[/b]",
   "zIndex": 100,
 },
 {
   "from": "Total",
   "color": "#3b27e8a3",
   "to": "2017",
   "value": 25.326,
   "labelText": "[#cbcbcbba]2017\n [#cbcbcbba bold]$25.326 Billion[/]",
 },
 {
   "from": "Total",
   "color": "#3b27e8a3",
   "to": "2018",
   "value": 25.351,
   "labelText": "[#cbcbcbba]2018\n [#cbcbcbba bold]38.045 Billion[/]",
 },
 {
   "from": "Total",
   "color": "#3b27e8a3",
   "to": "2019",
   "value": 45.122,
   "labelText": "[#cbcbcbba]2019\n [#cbcbcbba bold]$45.122 Billion[/]",
 },
 {
   "from": "Total",
   "color": "#3b27e8a3",
   "to": "2020",
   "value": 48.164,
   "labelText": "[#cbcbcbba]2020\n [#cbcbcbba bold]$48.164 Billion[/]",
 },
 {
   "from": "Total",
   "color": "#3b27e8a3",
   "to": "2021",
   "value": 93.536,
   "labelText": "[#cbcbcbba]2021\n [#cbcbcbba bold]$93.536 Billion[/]",
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Medical and healthcare",
   "value": 3.196,
   "labelText": "",
   "zIndex": 101,
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Data management, processing, cloud",
   "value": 2.56,
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Financial tech",
   "value": 1.972,
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Retail",
   "value": 2.755,
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Industrial automation, network",
   "value": 1.113,
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Audiovisual",
   "value": 0.779,
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Semiconductor",
   "value": 0.333,
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Fitness and wellness",
   "value": 3.335,
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Natural language, customer support",
   "value": 0.848,
 },
 {
   "from": "2017",
   "color": "#2764e8a3",
   "to": "Other",
   "value": 8.435,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Medical and healthcare",
   "value": 3.008,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Data management, processing, cloud",
   "value": 3.165,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Financial tech",
   "value": 3.695,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Retail",
   "value": 3.298,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Industrial automation, network",
   "value": 3.729,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Audiovisual",
   "value": 1.319,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Semiconductor",
   "value": 0.983,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Fitness and wellness",
   "value": 5.032,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Natural language, customer support",
   "value": 1.12,
 },
 {
   "from": "2018",
   "color": "#2764e8a3",
   "to": "Other",
   "value": 12.694,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Medical and healthcare",
   "value": 4.122,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Data management, processing, cloud",
   "value": 5.091,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Financial tech",
   "value": 6.646,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Retail",
   "value": 7.698,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Industrial automation, network",
   "value": 2.8,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Audiovisual",
   "value": 1.795,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Semiconductor",
   "value": 1.379,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Fitness and wellness",
   "value": 1.989,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Natural language, customer support",
   "value": 1.091,
 },
 {
   "from": "2019",
   "color": "#2764e8a3",
   "to": "Other",
   "value": 12.511,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Medical and healthcare",
   "value": 8.438,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Data management, processing, cloud",
   "value": 4.908,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Financial tech",
   "value": 3.332,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Retail",
   "value": 3.562,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Industrial automation, network",
   "value": 3.559,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Audiovisual",
   "value": 2.388,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Semiconductor",
   "value": 2.8,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Fitness and wellness",
   "value": 3.79,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Natural language, customer support",
   "value": 1.684,
 },
 {
   "from": "2020",
   "color": "#2764e8a3",
   "to": "Other",
   "value": 13.703,
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Medical and healthcare",
   "value": 11.29,
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Data management, processing, cloud",
   "value": 12.167,
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Financial tech",
   "value": 10.259,
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Retail",
   "value": 5.741,
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Industrial automation, network",
   "value": 8.095,
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Audiovisual",
   "value": 6.004,
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Semiconductor",
   "value": 5.562,
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Fitness and wellness",
   "value": 5.853,
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Natural language, customer support",
   "value": 4.006,
   "labelText": "",
 },
 {
   "from": "2021",
   "color": "#2764e8a3",
   "to": "Other",
   "value": 24.559,
   "labelText": "",
 },
{ from: "Medical and healthcare", color: "#27aee8a3", labelText: "[#cbcbcbba bold]Healthcare\n [#cbcbcbba bold]$30.054 B[/]", labelLocation: 0, value: 30.054 },
{ from: "Data management, processing, cloud", color: "#27aee8a3", labelText: "[#cbcbcbba bold]Data\nManagement\n [#cbcbcbba bold]$27.892 B[/]", labelLocation: 0, value: 27.892 },
{ from: "Financial tech", color: "#27aee8a3", labelText: "[#cbcbcbba bold]Financial\nTech\n [#cbcbcbba bold]$25.904 B[/]", labelLocation: 0, value: 25.904 },
{ from: "Retail", color: "#27aee8a3", labelText: "[#cbcbcbba bold]Retail\n [#cbcbcbba bold]$23.054 B[/]", labelLocation: 0, value: 23.054 },
{ from: "Fitness and wellness", color: "#27aee8a3", labelText: "[#cbcbcbba bold]Fitness\n [#cbcbcbba bold]$19.999 B[/]", labelLocation: 0, value: 19.999 },
{ from: "Industrial automation, network", color: "#27aee8a3", labelText: "[#cbcbcbba bold]Automation\n [#cbcbcbba bold]$19.26 B[/]", labelLocation: 0, value: 19.26 },
{ from: "Audiovisual", color: "#27aee8a3", labelText: "[#cbcbcbba bold]Audiovisual\n [#cbcbcbba bold]$12.286 B[/]", labelLocation: 0, value: 12.286 },
{ from: "Semiconductor", color: "#27aee8a3", labelText:"[#cbcbcbba bold]Semicond\n [#cbcbcbba bold]$11.057 B[/]", labelLocation: 0, value: 11.057 },
{ from: "Natural language, customer support", color: "#27aee8a3", labelText: "[#cbcbcbba bold]Natural\nLanguage\n [#cbcbcbba bold]$8.749 B[/]", labelLocation: 0, value: 8.749 },
{ from: "Other", color: "#27aee8a3", labelText: "[#cbcbcbba bold]Other\n [#cbcbcbba bold]$71.903 B[/]", labelLocation: 0, value: 71.903 }
];

chart.paddingRight = 30;
chart.paddingTop = 80;
chart.paddingBottom = 80;
chart.nodeAlign = "bottom";

chart.minNodeSize = 0.01;

chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.dataFields.color = "color";

var linkTemplate = chart.links.template;
linkTemplate.colorMode = "gradient";
linkTemplate.fillOpacity = 1;
linkTemplate.strokeOpacity = 1;

linkTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
linkTemplate.readerTitle = "drag me!";
linkTemplate.showSystemTooltip = true;
linkTemplate.tooltipText = "";
linkTemplate.propertyFields.zIndex = "zIndex";
linkTemplate.tension = 0.6;

chart.nodes.template.width = 0;
chart.nodes.template.nameLabel.disabled = true;
chart.nodes.template.draggable = true;
chart.nodes.template.inert = true;
chart.nodes.template.togglable = false;

// making links draggable
linkTemplate.events.on("down", function (event) {
    var fromNode = event.target.dataItem.fromNode;
    var toNode = event.target.dataItem.toNode;

    var distanceToFromNode = am4core.math.getDistance(event.pointer.point, { x: fromNode.pixelX, y: fromNode.pixelY });
    var distanceToToNode = Infinity;
    if (toNode) {
        distanceToToNode = am4core.math.getDistance(event.pointer.point, { x: toNode.pixelX, y: toNode.pixelY });
    }

    if (distanceToFromNode < distanceToToNode) {
        fromNode.dragStart(event.pointer);
    }
    else {
        toNode.dragStart(event.pointer);
    }
})


// add labels
var labelBullet = chart.links.template.bullets.push(new am4charts.LabelBullet());
labelBullet.label.propertyFields.text = "labelText";
labelBullet.propertyFields.locationX = "labelLocation";
labelBullet.propertyFields.rotation = "labelRotation";
labelBullet.label.horizontalCenter = "left";
labelBullet.label.textAlign = "start";
labelBullet.label.dx = -50;

// add labels which will animate
var bullet = chart.links.template.bullets.push(new am4charts.LabelBullet());
bullet.label.text = "${value}";
bullet.label.fill = am4core.color("#ffffff");
bullet.label.isMeasured = false;
bullet.isMeasured = false;

// create animations
chart.events.on("inited", function () {
    for (var i = 0; i < chart.links.length; i++) {
        var link = chart.links.getIndex(i);
        var bullet = link.bullets.getIndex(1);
        bullet.opacity = 0;

        if (link.dataItem.toNode && link.dataItem.value > 10) {

            bullet.label.fontSize = link.dataItem.value;
            firstHalfAnimation(bullet);
        }
        else {
            link.bullets.removeValue(bullet);
        }
    }
})

function firstHalfAnimation(bullet) {
    var duration = 6000 * Math.random() + 3000;
    var animation = bullet.animate([{ property: "locationX", from: 0.2, to: 0.5 }, { property: "opacity", from: 0, to: 0.3 }], duration)
    animation.events.on("animationended", function (event) {
        secondHalfAnimation(event.target.object, duration);
    })
}

function secondHalfAnimation(bullet, duration) {
    var animation = bullet.animate([{ property: "locationX", from: 0.5, to: 0.8 }, { property: "opacity", from: 0.3, to: 0 }], duration)
    animation.events.on("animationended", function (event) {
        setTimeout(function () {
            firstHalfAnimation(event.target.object)
        }, Math.random() * 5000);
    })
}