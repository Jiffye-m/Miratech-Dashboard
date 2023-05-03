<template>
    <div>
      <h1>Settings</h1>

      <b-container>
        <form>
          <input v-model="name" type="text" class="form-control mb-3">
          <input v-model="password" type="text" class="form-control mb-3">
          <input v-model="confPassword" type="text" class="form-control mb-3">
        </form>
      </b-container>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          name:'',
          password:'',
          confPassword:''
        }
      }
        
    }
</script>

<style lang="scss" scoped>

</style>