<template>
  <div class="commun tarifs">

    <header>
  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="4000">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active item1" :style="{'background-image': 'url(' + require('../assets/plagepluie.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">First Slide</h2>
          <p class="lead">This is a description for the first slide.</p>
        </div>
      </div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item item2" :style="{'background-image': 'url(' + require('../assets/montsaintmichel.jpg') + ')'}">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-4">Second Slide</h2>
          <p class="lead">This is a description for the second slide.</p>
        </div>
      </div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item item3" :style="{'background-image': 'url(' + require('../assets/normandyplageprairie.jpg') + ')'}">
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
    <h2>Tarifs</h2>
  <p>Et Lorem dolore esse nisi fugiat sint sit et minim incididunt. Anim duis amet quis dolor. Voluptate anim anim mollit ipsum do do. Do ea elit ea aute dolore irure elit. Tempor dolor veniam ea reprehenderit est cupidatat. Amet culpa proident fugiat duis pariatur voluptate non officia irure exercitation duis ea.</p>

  <table>
  <tbody>
    <tr>
      <th scope="col">Période</th>
      <th scope="col">Forfait 3 Nuits</th>
      <th scope="col">Nuitée Suppl</th>
      <th scope="col">Forfait Semaine</th>
    </tr>
    <tr class="hiver">
      <td class="periode">29 Oct - 1er Avril</td>
      <td>299€</td>
      <td>89€</td>
      <td>699€</td>
    </tr>
    <tr class="printemps">
      <td class="periode">1er Avril - 1er Juillet</td>
      <td>299€</td>
      <td>89€</td>
      <td>699€</td>
    </tr>
    <tr class="ete">
      <td class="periode">1er Juillet - 2 Sept</td>
      <td>399€</td>
      <td>99€</td>
      <td>889€</td>
    </tr>
    <tr class="automne">
      <td class="periode">3 Sept - 28 Oct</td>
      <td>299€</td>
      <td>89€</td>
      <td>699€</td>
    </tr>
  </tbody>
</table>
<p>Et Lorem dolore esse nisi fugiat sint sit et minim incididunt. Anim duis amet quis dolor. Voluptate anim anim mollit ipsum do do. Do ea elit ea aute dolore irure elit. Tempor dolor veniam ea reprehenderit est cupidatat. Amet culpa proident fugiat duis pariatur voluptate non officia irure exercitation duis ea.</p>
  </div>
  
</aside>

  </div>
</template>

<style>
table{
	width: 100%;
  border-collapse: separate;
  border-spacing: 3px 3px;
}

td{
  border-radius: 5px;
  transition: .5s;
  padding:5px;
}

td:hover, th:hover{
  border-radius: 20px;
  opacity: 0.6;
  color: rgb(163, 0, 0);
  font-weight: bold;
}

.periode{
  width: 30%;
}

.hiver td{
  background-image: url('../assets/hiver.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.printemps td{
  background-image: url('../assets/printemps.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.ete td{
  background-image: url('../assets/ete.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.automne td{
  background-image: url('../assets/automne.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>

<script>

export default {
  name: 'tarifs',
  components: {
  },
}
</script>
