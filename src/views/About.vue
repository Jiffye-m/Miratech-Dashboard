<template>
  <div class="about p-5">

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <b-img class="img-fluid rounded" src="/images/About3.jfif"></b-img>
        </div>
        <div class="col-md-6">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, rem et quod atque blanditiis minima aliquam eum pariatur obcaecati vitae doloremque excepturi possimus a ad inventore voluptates saepe quasi tempore harum deleniti.
          </p>
        </div>
      </div>
    </div>

    <b-container-fluid>
      <div class="pt-5">
        <p class="lead">Follow us on <i class="bi bi-box-arrow-left"></i></p>
      </div>
       <SocialCards />
    </b-container-fluid>

  </div>
</template>


<script>
import SocialCards from '@/components/SocialCards.vue'

export default{
  components:{
    SocialCards
  }
}

</script>