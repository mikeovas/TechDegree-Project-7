const trafficNav = document.querySelectorAll(".traffic-nav");
const trafficNavLinks = document.querySelectorAll(".traffic-nav-link");
const trafficChart = document.querySelector("#traffic-chart").getContext('2d');


// /----------------Chart Data----------------/
const hourly = {
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

const daily = {
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

const weekly = {
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

const monthly = {
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
const trafficHourlyLabel = hourly.labels;
const trafficHourlyData = hourly.datasets;
const trafficHourlyOptions = hourly.options;

const trafficDailyLabel = daily.labels;
const trafficDailyData = daily.datasets;
const trafficDailyOptions = daily.options;

const trafficWeeklyLabel = weekly.labels
const trafficWeeklyData = weekly.datasets;
const trafficWeeklyOptions = weekly.options;

const trafficMonthlyLabel = monthly.labels;
const trafficMonthlyData = monthly.datasets;
const trafficMonthlyOptions = monthly.options;

const initialLabels = weekly.labels;
const initialDataSets = weekly.datasets;
const initialOptions = weekly.options;


// /-----------Functions to Create Traffic Charts---------/

function createTrafficLineChart(labels, data, options) {

    trafficLine = new Chart(trafficChart, {
        type: 'line',
        data: {
            labels: labels,
            datasets: data,
        },
        options: options
    });
};


// /----------Create Initial Traffic Charts---------/

createTrafficLineChart(initialLabels, initialDataSets, initialOptions);


// /----------Create New Traffic Chart based on Choice---------/
trafficNavLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        let click = e.target;


        for (i = 0; i < trafficNavLinks.length; i++) {
            trafficNavLinks[i].classList.remove('active');
            click.classList.add('active');
        };

        if (click.innerText === 'Hourly') {
            trafficLine.data.labels = trafficHourlyLabel;
            trafficLine.data.datasets = trafficHourlyData;
            trafficLine.data.options = trafficHourlyOptions;
            trafficLine.update();
        } else if (click.innerText === 'Daily') {
            trafficLine.data.labels = trafficDailyLabel;
            trafficLine.data.datasets = trafficDailyData;
            trafficLine.data.options = trafficDailyOptions;
            trafficLine.update();
        } else if (click.innerText === 'Weekly') {
            trafficLine.data.labels = trafficWeeklyLabel;
            trafficLine.data.datasets = trafficWeeklyData;
            trafficLine.data.options = trafficWeeklyOptions;
            trafficLine.update();
        } else {
            trafficLine.data.labels = trafficMonthlyLabel;
            trafficLine.data.datasets = trafficMonthlyData;
            trafficLine.data.options = trafficMonthlyOptions;
            trafficLine.update();
        }

    });
});