<template>
    <b-container-fluid>
      <div class="text-center">
      <h1>Articles</h1>
      </div>

      <b-row v-if="articles.length">
        <div class="col-12 col-md-4" v-for="(article, index) in articles" :key="index">
        <b-card>
          <b-img :src="article.urlToImage" :alt="article.title" class="w-100 img-fluid"></b-img>
          <b-card-text>{{ article.title }}</b-card-text>

          <b-card-footer>

            <b-button variant="info" :to="{name:'articlesShow', params:{name:article.title}}"><i class="bi bi-box-arrow-right"><span class="px-2">Read more</span></i></b-button>

            <!-- <b-button variant="info" @click="toDetails"></b-button> -->
          </b-card-footer>
        </b-card>
      </div>
      </b-row>

      <div v-else class="mt-5 text-center display-6">
        {{ Null }}.......
      </div>

    </b-container-fluid>

</template>

<script>
    export default {
        data(){
          return{
            articles:[],
            Null:'No articles Available for the mean time'
          }
        },
        methods:{
          toDetails(){
            this.isOpenDetails =!this.isOpenDetails
          },
          async fetchNews(){
               const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=59b2997cc07c4731aa41ef7257f2d152")
              const data = await response.json()
              this.articles = data.articles
              console.log(this.articles)
              
          }
        },
        mounted(){
          this.fetchNews()
        }
    }
</script>

<style scoped>

</style>