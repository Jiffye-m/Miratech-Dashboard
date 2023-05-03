<template>
  <div class="home">
    <h1>Dashboard</h1>

    <b-container-fluid>
      
        <Cards />
      
    </b-container-fluid>

    <b-container-fluid>

      <div class="text-center pt-5">
        <h3>Statistics</h3>
      </div>

      <b-row>

        <b-col>
          <Chart/>
        </b-col>

        <b-col>
          <PieChart/>
        </b-col>
      </b-row>
    </b-container-fluid>

  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '@/components/Cards.vue'
import Chart from '@/components/Chart.vue'
import PieChart from '@/components/PieChart.vue'

export default {
  name: 'Home',
  components:{
    Cards,
    Chart,
    PieChart
  }
}
</script> 
