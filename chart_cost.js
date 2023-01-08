var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(121, 121, 241, 0.5)');
gradient.addColorStop(0.5, 'rgba(69, 69, 237, 0.25)');
gradient.addColorStop(1, 'rgba(69, 69, 237, 0)');


var data  = {
    labels: [ '2017', '2018', '2019', '2020', '2021'],
    datasets: [{
			backgroundColor: gradient,
			pointBackgroundColor: 'white',
			borderWidth: 1,
			borderColor: '#21a3e4',
			data: [1112.64, 12.6, 19, 7.43,4.59]
    }]
};


var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.4',
				lineWidth: 1
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.4',
				lineWidth: 1
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,150,0.3)',
		titleFontColor: 'blueviolet',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});