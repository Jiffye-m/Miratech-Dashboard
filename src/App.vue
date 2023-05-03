<template>
  <div class="container-fluid">
  
     <b-button class="fixed-top" v-b-toggle.sidebar><i class="bi bi-table"><span class="px-2">Dashboard</span></i></b-button>
      <b-sidebar id="sidebar" title="Dashboard" shadow>
        <Dashboard/>
      </b-sidebar>   
     
      <div class="pb-5"></div>

        <div>
          <router-view/>
        </div>
    
  </div>
</template>


<script>
import Dashboard from "./components/Dashboard.vue";

export default{
    name:'App',
  components:{
    Dashboard
  }
}

</script>

<style>
</style>
