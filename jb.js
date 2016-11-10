window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(231,233,237)'
};

var jbColors = ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB", "#b662ff", "#62b1ff", "#62ffd2", "#eaff62"]

function chartFillTsFlat(chart, tsChannelId, fieldIdList) {
	$.ajax({
		url: 'https://api.thingspeak.com/channels/'+ tsChannelId +'/feeds.json?results=1',
		dataType: 'json',
	}).done(function (results) {
		fieldIdList.forEach(function (fieldId) {
			chart.data.labels.push(results["channel"][fieldId]);
			chart.data.datasets[0].data.push(parseInt(results["feeds"][0][fieldId]));
			chart.data.datasets[0].backgroundColor.push(jbColors.pop());
		});
		chart.update();
	});
}
