<template>
  <div class="commun photos">

    <header>
  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="none">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
      <li data-target="#myCarousel" data-slide-to="4"></li>
      <li data-target="#myCarousel" data-slide-to="5"></li>
      <li data-target="#myCarousel" data-slide-to="6"></li>
      <li data-target="#myCarousel" data-slide-to="7"></li>
      <li data-target="#myCarousel" data-slide-to="8"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active item1" :style="{'background-image': 'url(' + require('../assets/old.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Lorem</h2>
          <p class="lead">Sit aliqua nostrud pariatur tempor veniam  occaecat labore dolore.</p>
        </div>
      </div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item item2" :style="{'background-image': 'url(' + require('../assets/omahabeach.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Ipsum</h2>
          <p class="lead">Qui reprehenderit nulla amet nostrud magna ipsum tempor voluptate.</p>
        </div>
      </div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item item3" :style="{'background-image': 'url(' + require('../assets/city.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Dolor</h2>
          <p class="lead">Fugiat dolore anim incididunt tempor esse.</p>
        </div>
      </div>
      <!-- Slide Four - Set the background image for this slide in the line below -->
      <div class="carousel-item item4" :style="{'background-image': 'url(' + require('../assets/bedroom.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Sit</h2>
          <p class="lead">Aliquip pariatur minim fugiat excepteur aliquin eiusmod reprehenderit.</p>
        </div>
      </div>
      <!-- Slide Five - Set the background image for this slide in the line below -->
      <div class="carousel-item item5" :style="{'background-image': 'url(' + require('../assets/cathedralebayeux.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Amet</h2>
          <p class="lead">Deserunt duis veniam ut laborum et esse eiusmod do velit officia.</p>
        </div>
      </div>
      <!-- Slide Six - Set the background image for this slide in the line below -->
      <div class="carousel-item item6" :style="{'background-image': 'url(' + require('../assets/dday.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Consectetur</h2>
          <p class="lead">Exercitation mollit elit irure sint elit reprehenderit reprehenderit.</p>
        </div>
      </div>
      <!-- Slide Seven - Set the background image for this slide in the line below -->
      <div class="carousel-item item7" :style="{'background-image': 'url(' + require('../assets/garden.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Adipiscing</h2>
          <p class="lead">In nostrud quis ullamco adipisicing ut commodo quis reprehenderit.</p>
        </div>
      </div>
      <!-- Slide Eight - Set the background image for this slide in the line below -->
      <div class="carousel-item item8" :style="{'background-image': 'url(' + require('../assets/labybayeux.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Elit</h2>
          <p class="lead">Aliquip pariatur minim fugiat excepteur aliquip in exercitation.</p>
        </div>
      </div>
      <!-- Slide Nine - Set the background image for this slide in the line below -->
      <div class="carousel-item item9" :style="{'background-image': 'url(' + require('../assets/livingroom.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Dolorem</h2>
          <p class="lead">Labore et veniam fugiat nostiat anim sint id dolor tempor officia.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
  </div>
</header>

<aside class="corps">

  <h2>Photos</h2>

  <div class="listeImage">
    <div data-target="#myCarousel" data-slide-to="0" class="item"><img src="../assets/old.jpg" alt=""></div>
    <div data-target="#myCarousel" data-slide-to="1" class="item"><img src="../assets/omahabeach.jpg" alt=""></div>
    <div data-target="#myCarousel" data-slide-to="2" class="item"><img src="../assets/city.jpg" alt=""></div>
    <div data-target="#myCarousel" data-slide-to="3" class="item"><img src="../assets/bedroom.jpg" alt=""></div>
    <div data-target="#myCarousel" data-slide-to="4" class="item"><img src="../assets/cathedralebayeux.jpg" alt=""></div>
    <div data-target="#myCarousel" data-slide-to="5" class="item"><img src="../assets/dday.jpg" alt=""></div>
    <div data-target="#myCarousel" data-slide-to="6" class="item"><img src="../assets/garden.jpg" alt=""></div>
    <div data-target="#myCarousel" data-slide-to="7" class="item"><img src="../assets/labybayeux.jpg" alt=""></div>
    <div data-target="#myCarousel" data-slide-to="8" class="item"><img src="../assets/livingroom.jpg" alt=""></div>
  </div>
</aside>

  </div>
</template>

<style>
.listeImage{
  width:100%;
  overflow: hidden;
  text-align: center;
  margin: 20px 0;
  padding: 20px 0;
}

.listeImage .item{
  width:40%;
  display: inline-block;
  margin:10px;
}

.listeImage .item img{
  width:100%;
  transition: 1s;
  border: solid rgba(255,255,255,1.00) 5px;
  box-shadow: 0px 3px 10px 2px black;
  border-radius: 2px;
}
.listeImage .item img:hover{
  transform: scale(1.2)
}
@media screen and (max-width: 1050px) {
  .listeImage .item{
    width:15%;
  }
}
</style>

<script>

export default {
  name: 'photos',
  components: {
  },
}
</script>
