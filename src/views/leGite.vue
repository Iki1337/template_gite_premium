<template>
  <div class="commun leGite">

    <header>
  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="4000">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active item1" :style="{'background-image': 'url(' + require('../assets/bedroom.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">First Slide</h2>
          <p class="lead">This is a description for the first slide.</p>
        </div>
      </div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item item2" :style="{'background-image': 'url(' + require('../assets/livingroom.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Second Slide</h2>
          <p class="lead">This is a description for the second slide.</p>
        </div>
      </div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item item3" :style="{'background-image': 'url(' + require('../assets/garden.jpg') + ')'}">
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
  <h2>Le gîte</h2>
  <p>Pariatur magna voluptate eu nostrud ut magna culpa minim eiusmod cillum sint consectetur sint. Anim eu Lorem nisi cillum exercitation labore deserunt culpa aute deserunt ullamco.</p>
  <p>Nisi velit consequat anim amet minim aliquip eiusmod nostrud voluptate quis consectetur sit. Proident Lorem commodo labore eu enim ex anim cillum aliqua sint reprehenderit. Sit voluptate ipsum non aute ad Lorem non cupidatat nisi veniam in occaecat. Excepteur ea tempor aliquip velit in ipsum minim et labore ea magna consequat dolore. Quis cupidatat pariatur enim qui ex aliqua. Dolor non excepteur non pariatur tempor adipisicing duis.</p>
  
  <div class="interieurCorps">
    <h5>Cuisine</h5>
  <ul>
    <li>Four</li>
    <li>Plaque de cuisson</li>
    <li>Réfrigérateur</li>
    <li>Congélateur</li>
    <li>Couverts pour 5 personnes</li>
  </ul>

  <h5>Salon</h5>
  <ul>
    <li>Table</li>
    <li>TV</li>
    <li>Canapé</li>
    <li>Box wifi</li>
  </ul>

  <h5>Salle de bain</h5>
  <ul>
    <li>Lavabo</li>
    <li>Baignoire</li>
    <li>Réfrigérateur</li>
    <li>Placards</li>
    <li>Toilettes séparées</li>
  </ul>

  <h5>Chambre parentale</h5>
  <ul>
    <li>Lit double</li>
    <li>Armoire</li>
    <li>TV</li>
  </ul>

  <h5>Chambre simple</h5>
  <ul>
    <li>2 lits simples</li>
    <li>Tables de chevet</li>
  </ul>

  <h5>Terasse extérieure</h5>
  <ul>
    <li>Table d'extérieur</li>
    <li>8 chaises</li>
    <li>Barbecue</li>
    <li>Portique pour enfants</li>
  </ul>
  </div>
</aside>

  </div>
</template>

<style>
</style>

<script>

export default {
  name: 'leGite',
  components: {
  },
}
</script>
