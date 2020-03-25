// fixed data
let months = ['June', 'July', 'August', 'September', 'October', 'November', 'December']
let locations = ['Aria', 'Rio', 'Wynn', 'Venetian']
let commuteRanges = ['0-15', '15-30', '30-45', '45-60', '>60']

// evolving data

// monthly overall
var ctx = document.getElementById('overall').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [
            {
                label: 'Bankroll',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
                fill: false
            },
            {
                label: 'Profit/Loss',
                backgroundColor: '#97D8A2',
                borderColor: '#97D8A2',
                data: null,
                fill: false
            },
            {
                label: 'Bankroll Goal',
                backgroundColor: '#999',
                borderColor: '#999',
                data: [20, 21, 24, 28, 35, 46, 60],
                fill: false
            },
            {
                label: 'Expenses',
                backgroundColor: 'pink',
                borderColor: 'pink',
                data: null,
                fill: false
            }


        ]
    }
});

// bankroll monthly
var ctx = document.getElementById('bankroll').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [
            {
                label: 'Bankroll',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
                fill: false
            },
            {
                label: 'Bankroll Goal',
                backgroundColor: '#999',
                borderColor: '#999',
                data: [20, 21, 24, 28, 35, 46, 60],
                fill: false
            },
        ]
    }
});

// profit/loss monthly
var ctx = document.getElementById('profit').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [
            {
                label: 'Profit/Loss',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
            }
        ]
    }
});

// hours played
var ctx = document.getElementById('hours').getContext('2d');
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: months,
        datasets: [
            {
                label: 'Hours Played',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
            }
        ]
    }
});

// hourly
var ctx = document.getElementById('hourly').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [
            {
                label: '$/hr',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
            }
        ]
    }
});

// Sleep
var ctx = document.getElementById('sleep').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Sleep Score and Results',
            data: null,
        }]
    }
});

// Session start time
var ctx = document.getElementById('sessionStart').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Start Time and Results',
            data: null
        }]
    }
});

// Session Duration
var ctx = document.getElementById('sessionDuration').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Session Duration and Results',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

// subjectivePlay
var ctx = document.getElementById('subjectivePlay').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Subjective Level of Play and Results',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

// Consistancy
var ctx = document.getElementById('consistancy').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Consistancy and Results',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

// Enjoyment
var ctx = document.getElementById('enjoyment').getContext('2d');
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Session Enjoyment and Results',
            data: null
        }]
    }
});

// Profit by Location
var ctx = document.getElementById('profitByLocation').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: locations,
        datasets: [
            {
                label: '$',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
            }
        ]
    }
});

// Profit by Location
var ctx = document.getElementById('hourlyByLocation').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: locations,
        datasets: [
            {
                label: '$/hr',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
            }
        ]
    }
});

// Profit by Commute
var ctx = document.getElementById('profitByCommute').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: commuteRanges,
        datasets: [
            {
                label: '$',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
            }
        ]
    }
});

// Hourly by Commute
var ctx = document.getElementById('hourlyByCommute').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: commuteRanges,
        datasets: [
            {
                label: '$/hr',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
            }
        ]
    }
});

// hours played by location
var ctx = document.getElementById('hoursByLocation').getContext('2d');
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: locations,
        datasets: [
            {
                label: 'Hours Played',
                backgroundColor: '#2C8883',
                borderColor: '#2C8883',
                data: null,
            }
        ]
    }
});

// monthly expenses
var ctx = document.getElementById('monthlyExpenses').getContext('2d');
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: months,
        datasets: [
            {
                label: '$',
                backgroundColor: 'pink',
                borderColor: 'pink',
                data: null,
            }
        ]
    }
});
