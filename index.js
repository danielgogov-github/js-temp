// JS
var ctx = document.getElementById('myChart').getContext('2d');

var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'green',
            // backgroundColor: [
            //     'aqua',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            // borderColor: [
            //     'green',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            // borderWidth: 1
            fill: false
        },
        {
            data: [20, 50, 5, 12, 0, 7],
            fill: false,
            steppedLine: true
        }]
    },
    options: {
        aspectRatio: 2,

        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true
        //         },
        //     }],
        //     xAxes: [{
        //         display: true,
        //         position: 'right',

        //         gridLines: {
        //             color: 'white'
        //         }  
        //     }]
        // },

        scales: {
            yAxes: [{
             display: true,
             position: 'right',
             ticks: {
              beginAtZero: true,
              max: 100,
              min: 50
             }
            }, {
             display: true,
             position: 'left',
             ticks: {
              beginAtZero: true,
              max: 45,
              min: 0,
              stepSize: 5
             }
            }]
        },        

        // scales: {
        //     xAxes: [{
        //         gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //         }
        //     }],
        //     yAxes: [{
        //         gridLines: {
        //             color: "rgba(0, 0, 0, 0)",
        //         }   
        //     }]
        // },        

        tooltips: {
            mode: 'index',
        }        
    }
});

