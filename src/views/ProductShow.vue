<template>

    <section v-if="product">
      <b-container>

            <div class="mb-4">
            <h1>{{ product.title }}</h1>

            <GoBack/>
            </div>

            <b-row>
                <div class="col-md-5">
                    <img class="img-fluid" :src="product.image" :alt="product.title">
                </div>
                <div class="col-md-7 p-5">
                   <p>{{ product.description }}</p> 
                   <b-button variant="success">Add to Cart</b-button>
                </div>
            </b-row>
        </b-container>

    </section>

</template>

<script>
import GoBack from "../components/GoBack.vue";

export default {
    data(){
        return{
            products:[]
        }
    },
    components:{
        GoBack
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
        },
    computed:{
        productId(){
            return parseInt(this.$route.params.id)
        },
        product(){
            return this.products.find(product => product.id === this.productId)
        }
    }
}

</script>