var ctx = document.getElementById('myChart').getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, '#a26dffb9');
gradientStroke.addColorStop(1, '#61d3fcb9');

var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(0, "#6313edb9");
gradientFill.addColorStop(1, "#13b3edb9");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2017", "2018", "2019", "2020", "2021"],
        datasets: [{
            label: "Year",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
           pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 4,
            data: [1112.64, 12.6, 19, 7.43,4.59]
        }]
    },
    options: {
        animation: {
            easing: "easeInOutBack"
        },
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(255,255,255,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(255,255,255,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});