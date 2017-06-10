var chartData = {
         labels: ["January", "February", "March", "April", "May", "June", "July"],
         datasets: [{
             type: 'line',
             label: 'Trend',
             borderColor: window.chartColors.blue,
             borderWidth: 2,
             fill: false,
             data: [
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor()
             ]
         }, {
             type: 'bar',
             label: 'Healthy Levels',
             backgroundColor: window.chartColors.red,
             data: [
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor()
             ],
             borderColor: 'white',
             borderWidth: 2
         }, {
             type: 'bar',
             label: 'Unsafe levels',
             backgroundColor: window.chartColors.green,
             data: [
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor(),
                 randomScalingFactor()
             ]
         }]

     };
     window.onload = function() {
         var ctx = document.getElementById("canvas").getContext("2d");
         window.myMixedChart = new Chart(ctx, {
             type: 'bar',
             data: chartData,
             options: {
                 responsive: true,
                 title: {
                     display: true,
                     text: 'Gas Concentrations vs Time'
                 },
                 tooltips: {
                     mode: 'index',
                     intersect: true
                 }
             }
         });
     };
