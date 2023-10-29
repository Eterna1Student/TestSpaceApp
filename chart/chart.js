let ctx = document.querySelector('#my-chart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            data: [30, 39, 36, 48, 50, 63],
            backgroundColor: ['white'],
            borderColor: ['#E01E2E'],
            borderWidth: 4,
            tension: 0.5
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, values) {
                        return value + '%'; 
                    }
                }
            }
        },
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: false,
                text: ''
            }
        }
    }
})