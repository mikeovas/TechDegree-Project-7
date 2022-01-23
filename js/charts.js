let trafficNav = document.querySelectorAll(".traffic-nav");
let trafficNavLinks = document.querySelectorAll(".traffic-nav-link");
const ctx = document.getElementById("traffic-chart").getContext('2d');




// /----------------Chart Data----------------/
let hourly = {
    labels: ['8am-9am', '9am-10am', '10am-11am', '11am-12pm', '12pm-1pm', '1pm-2pm', '2pm-3pm', '3pm-4pm', '4pm-5pm', '5pm-6pm'],
    datasets: [{
        data: [5, 20, 45, 55, 65, 125, 100, 75, 70, 50],
        backgroundColor: "rgb(195, 185, 220, 0.8)",
        borderColor: "rgb(190, 180, 213)",
        color: "rgb(188, 174, 212)",
        borderWidth: 2,
        lineTension: 0.25,
        fill: true,
    }],
    options: {
        responsive: true,
        animation: {
            duration: 0
        },
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
                max: 125,
                ticks: {
                    stepSize: 25
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

let daily = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        data: [75, 125, 225, 250, 200, 150, 100],
        backgroundColor: "rgb(205, 185, 220, 0.8)",
        borderColor: "rgb(190, 180, 213)",
        color: "rgb(188, 174, 212)",
        borderWidth: 2,
        lineTension: 0.25,
        fill: true,
    }],
    options: {
        responsive: true,
        animation: {
            duration: 0
        },
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
                max: 250,
                ticks: {
                    stepSize: 50
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

let weekly = {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500],
        backgroundColor: "rgb(215, 185, 220, 0.8)",
        borderColor: "rgb(190, 180, 213)",
        color: "rgb(188, 174, 212)",
        borderWidth: 2,
        lineTension: 0.25,
        fill: true,
    }],
    options: {
        responsive: true,
        animation: {
            duration: 0
        },
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
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

let monthly = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        data: [7500, 12550, 15500, 20000, 25000, 28750, 29000, 30000, 32500, 31500, 31000],
        backgroundColor: "rgb(225, 185, 220, 0.8)",
        borderColor: "rgb(190, 180, 213)",
        color: "rgb(188, 174, 212)",
        borderWidth: 2,
        lineTension: 0.25,
        fill: true,
    }],
    options: {
        responsive: true,
        animation: {
            duration: 0
        },
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
                max: 32500,
                ticks: {
                    stepSize: 5000
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

};

// /------------Variables for Swapping Chart Data---------/ 
let trafficHourlyLabel = hourly.labels;
let trafficHourlyData = hourly.datasets[0].data;
let trafficHourlyOptions = hourly.options;

let trafficDailyLabel = daily.labels;
let trafficDailyData = daily.datasets[0].data;
let trafficDailyOptions = daily.options;

let trafficWeeklyLabel = weekly.labels
let trafficWeeklyData = weekly.datasets[0].data;
let trafficWeeklyOptions = weekly.options;

let trafficMonthlyLabel = monthly.labels;
let trafficMonthlyData = monthly.datasets[0].data;
let trafficMonthlyOptions = monthly.options;

let initialLabels = weekly.labels;
let initialDataSets = weekly.datasets;
let initialOptions = weekly.options;


// /-----------Function to Create Traffic Charts---------/

function createTrafficLineChart(labels, data, options) {
    const trafficLine = new Chart(ctx, {
        type: 'line',
        data: {
            labels: trafficWeeklyLabel,
            datasets: initialDataSets,
        },
        options: trafficWeeklyOptions,
    });
};

// /----------Create Initail Traffic Charts---------/
createTrafficLineChart(initialLabels, initialDataSets, initialOptions);

/----------Create New Traffic Chart based on Choice---------/
trafficNavLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        let click = e.target;
        console.log('clicked on ' + click.innerText); // checks that my click is targetting the correct link

        for (i = 0; i < trafficNavLinks.length; i++) {
            trafficNavLinks[i].classList.remove('active');
            click.classList.add('active');
        };

        if (click.innerText === 'hourly') {

            console.log('clicked innerText is hourly');
            // console.log(chart.data.labels); // check new labels
            // console.log(chart.data.datasets[0].data); //check new data

        } else if (click.innerText === 'daily') {

            console.log('clicked innerText is daily');
            // console.log(chart.data.labels); // check new labels
            // console.log(chart.data.datasets[0].data); //check new data

        } else if (click.innerText === 'weekly') {

            console.log('clicked innerText is weekly');
            // console.log(chart.data.labels); // check new labels
            // console.log(chart.data.datasets[0].data); //check new data

        } else {

            console.log('clicked innerText is monthly');
            // console.log(chart.data.labels); // check new labels
            // console.log(chart.data.datasets[0].data); //check new data
        }

    });
});


// /------------Function to Swap Chart Data Based on Selection-------/
// function swapData(chart, labels, data) {

//     console.log(chart.data.labels); //check initial labels
//     console.log(chart.data.datasets[0].data); //check initial data

//     chart.data.labels = []; // clear chart labels
//     chart.data.datasets[0].data = []; // clear chart data

//     console.log(chart.data.labels); // check chart labels cleared
//     console.log(chart.data.datasets[0].data); // check chart data cleared

//     for (i = 0; i < labels.length; i++) {
//         chart.data.labels.push(labels[i]);
//         chart.data.datasets[0].data.push(data[i]);
//     }
//     console.log(chart.data.labels); // check new labels
//     console.log(chart.data.datasets[0].data); //check new data
// };

// trafficNavLinks.forEach(item => {
//     item.addEventListener('click', (e) => {
//             let click = e.target;
//             console.log(click.innerText); // checks that my click is targetting the correct link

//             for (i = 0; i < trafficNavLinks.length; i++) {
//                 trafficNavLinks[i].classList.remove('active');
//                 click.classList.add('active');
//             };
//             //seems to work up to this point. It will change the active class and it is targetting the click as seen from line 95

//             if (click.innerText === 'hourly') {
//                 swapData(trafficLine, trafficHourlyLabel, trafficHourlyData);
//                 console.log('clicked on hourly');
//                 // console.log(chart.data.labels); // check new labels
//                 // console.log(chart.data.datasets[0].data); //check new data

//             } else if (click.innerText === 'daily') {
//                 swapData(trafficLine, trafficDailyLabel, trafficDailyData);
//                 console.log('clicked on dailly');
//                 // console.log(chart.data.labels); // check new labels
//                 // console.log(chart.data.datasets[0].data); //check new data

//             } else if (click.innerText === 'weekly') {
//                 swapData(trafficLine, trafficWeeklyLabel, trafficWeeklyData);
//                 console.log('clicked on weekly');
//                 // console.log(chart.data.labels); // check new labels
//                 // console.log(chart.data.datasets[0].data); //check new data

//             } else(click.innerText === 'monthly')
//             swapData(trafficLine, trafficMonthlyLabel, trafficMonthlyData);
//             console.log('clicked on monthly');
//             // console.log(chart.data.labels); // check new labels
//             // console.log(chart.data.datasets[0].data); //check new data


//         }

//     );
// });