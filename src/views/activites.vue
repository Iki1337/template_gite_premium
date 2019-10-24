<template>
  <div class="commun activites">

    <header>
  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="4000">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active item1" :style="{'background-image': 'url(' + require('../assets/dday.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">First Slide</h2>
          <p class="lead">This is a description for the first slide.</p>
        </div>
      </div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item item2" :style="{'background-image': 'url(' + require('../assets/cathedralebayeux.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Second Slide</h2>
          <p class="lead">This is a description for the second slide.</p>
        </div>
      </div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item item3" :style="{'background-image': 'url(' + require('../assets/labybayeux.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Third Slide</h2>
          <p class="lead">This is a description for the third slide.</p>
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
  <div class="interieurCorps">
    <h2>Activités</h2>
    <p>Pariatur magna voluptate eu nostrud ut magna culpa minim eiusmod cillum sint consectetur sint. Anim eu Lorem nisi cillum exercitation labore deserunt culpa aute deserunt ullamco.</p>

    <h5>En plein air </h5>
    <br>
    <p class="casesActivites"><img src="../assets/omahabeach2.jpg" alt="" /> Omaha Beach</p>
    <p class="casesActivites"><img src="../assets/golf.jpg" alt="" /> Golf de Port en Bessin</p>
    <p class="casesActivites"><img src="../assets/festyland.jpg" alt="" /> Parc d'Attraction FestyLand</p>
    <p class="casesActivites"><img src="../assets/labybayeux2.jpg" alt="" /> Labyrinthe de Bayeux</p>

    <h5>Activités Culturelles </h5>
    <br>
    <p class="casesActivites"><img src="../assets/epaves.jpg" alt="" /> Musée du débarquement à Commes</p>
    <p class="casesActivites"><img src="../assets/cimetiere.jpg" alt="" /> Cimetière américain à Colleville</p>
    <p class="casesActivites"><img src="../assets/museebayeux.jpg" alt="" /> Musée du débarquement à Bayeux</p>
    <p class="casesActivites"><img src="../assets/longuessurmerbattery.jpg" alt="" /> Batterie de Longue sur Mer</p>
  </div>
</aside>

  </div>
</template>

<style>
.casesActivites img{
  width: 100px;
  transition: 1s;
  border: solid rgba(255,255,255,1.00) 5px;
  box-shadow: 0px 3px 10px 2px black;
  border-radius: 2px;
}

.casesActivites img:hover{
  transform: scale(1.7)
}
</style>

<script>

export default {
  name: 'activites',
  components: {
  },
}
</script>
