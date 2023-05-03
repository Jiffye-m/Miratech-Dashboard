<template>
    <div>
      <h1 class="text-center">Products</h1>

      <b-container-fluid>
        
            <ProductCard />
          
      </b-container-fluid>

    </div>
</template>

<script>
import ProductCard from '@/components/Products/ProductCard.vue';

    export default {
       components:{
        ProductCard
       }
    }
</script>

<style scoped>

</style>