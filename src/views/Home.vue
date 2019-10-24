<template>
  <div class="home">

    <header>
  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="3000">
    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active item1" :style="{'background-image': 'url(' + require('../assets/old.jpg') + ')'}"></div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item item2" :style="{'background-image': 'url(' + require('../assets/omahabeach.jpg') + ')'}"></div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item item3" :style="{'background-image': 'url(' + require('../assets/city.jpg') + ')'}"></div>
    </div>
  </div>
</header>

<div class="titre">
  <img src="../assets/logo.png" alt="">
  <h1>Lorem Ipsum</h1>
</div>

  </div>
</template>

<style>
.titre{
  position:absolute;
  z-index: 2;
  width: 100%;
  text-align: center;
  top:25%;
  color: white;
  font-family: "Cinzel";
}

.titre img{
  width:20%;
}

.titre h1{
  font-size:70px;
  text-shadow: 3px 3px 3px rgba(0,0,0, 1);
}

@media screen and (max-width: 1050px) {

  .titre h1{
    font-size:50px;
  }

  .titre img{
    width:45%;
  }

}
</style>

<script>

export default {
  name: 'home',
  components: {
  },
}
</script>
