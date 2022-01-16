const ctx = document.getElementById("traffic-chart").getContext('2d');
const trafficLine = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500],
            backgroundColor: "rgb(195, 185, 220, 0.8)",
            borderColor: "rgb(190, 180, 213)",
            color: "rgb(188, 174, 212)",
            borderWidth: 2,
            lineTension: 0.25,
            fill: true,
        }],

    },
    options: {
        responsive: true,
        layout: {
            padding: {
                left: 50,
                right: 50,
                top: 30,
                bottom: 30
            },
        },
        scales: {
            y: {
                min: 0,
                max: 2500,
                ticks: {
                    stepSize: 500
                }
            }
        }

    }
});