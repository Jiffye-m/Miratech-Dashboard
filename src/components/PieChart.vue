<template>
    <div class="m-5">
        <canvas id="pieChart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default{
   
mounted(){
    const ctx = document.getElementById('pieChart');

    const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const myChart = new Chart(ctx, {
    type: 'pie',
    data: data
     });
}

}
</script>
