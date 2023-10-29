let ctx = document.querySelector('#my-chart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'false',
            data: [30, 40, 35, 48, 50, 52, 60],
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