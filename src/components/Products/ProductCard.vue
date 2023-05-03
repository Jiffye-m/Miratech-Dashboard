<template>
<div>
            

             <div class="row" v-if="products.length">
                 <div class="col-12 col-md-4" v-for="product in products" 
                      :key="product.id">
                    <b-card
                      tag="article"
                      style="max-width: 18rem; height: 25rem;"
                      class="text-center mb-5">
                      <b-img class="img-fluid w-50" :src="product.image" :alt="product.title"></b-img>
                   <b-card-text class="h4">
                     {{ product.title }}
                   </b-card-text>
                 <!-- Named route params to product details page -->
                   <b-button variant="info" :to="{name:'product.show', params:{id: product.id}}">
                   <i class="bi bi-box-arrow-right"><span class="px-2">View Details</span></i>
                    </b-button>
                  </b-card>
                </div>
             </div>

             <div v-else>
               <p class="mt-5 text-center lead">{{ Null }}</p>
             </div>

             
        
            
</div>
</template>

<script>
    export default {
        data(){
          return{
            products:[],
            Null:'No products Available for the mean time'
          }
        },
        methods:{
          async  fetchProducts(){
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            this.products = data
          }
        },
        mounted(){
          this.fetchProducts()
        }
    }
</script>

<style lang="scss" scoped>

</style>