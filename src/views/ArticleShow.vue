<template>
    
    <!-- <h1>{{ computedArticle.title }}</h1> -->

    <div>
    <h1>{{ article.title }}</h1>
    <p class="lead">By {{ article.author }}</p>
    <p>{{ article.content }}</p>
    </div>



</template>

<script>
export default {
    data(){
        return{
            articles:[]
        }
    },
    props:{
        title:{type:String, required:true}
    },
     methods:{
            async fetchNews(){
               const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=59b2997cc07c4731aa41ef7257f2d152")
              const data = await response.json()
              this.articles = data.articles
              alert('Mounted')
          }
        },
        mounted(){
            this.fetchNews()
        },
     computed:{
        articleTitle(){
            return this.$route.params.title
        },
            article(){
                return this.articles.find(article => article.title === this.articleTitle  )
            }
        }
    // computed:{
    //     computedArticle(){
    //         let articleTitle =this.$route.params.title
    //         let article = this.$store.getters.articleGetter
    //         if(!article) return {}
    //         return article.filter(item=>{
                
    //             return item.title === articleTitle
    //         })[0]
    //     },
    // },
    // beforeMount(){
        
    // }
}

</script>