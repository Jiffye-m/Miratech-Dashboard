<template>
  
  <b-carousel
    id="carousel-fade"
    fade
    indicators
    style="text-shadow: 0px 0px 2px #000;height:100vh; width: 1024px;"
  >
    <b-carousel-slide
      caption="First Slide"
      img-src="/images/About3.jfif"
    >
   <b-button variant="primary"><i class="bi bi-arrow-right-square"><span class="px-2">See more</span></i></b-button>
  </b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>


</template>