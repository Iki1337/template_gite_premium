<template>
  <div id="app">
  <div class="wrapCenter">
    <div id="nav" class="navWrap">
      <div id="conteneurNav">
        <img src="./assets/logo.png" class="navImg mt-2" width="70%;" alt="">
        <div class="btnHideMenu" @click="hideMenu()">
          <font-awesome-icon v-if="menuAffiche == false" :icon="['fas', 'angle-down']"/>
          <font-awesome-icon v-if="menuAffiche == true" :icon="['fas', 'angle-up']"/>
        </div>
        <div id="liensNav">
          <div class="btnLien"><router-link to="/">Accueil</router-link></div>
          <div class="btnLien"><router-link to="/leGite">Le gîte</router-link></div>
          <div class="btnLien"><router-link to="/activites">Activités</router-link></div>
          <div class="btnLien"><router-link to="/photos">Photos</router-link></div>
          <div class="btnLien"><router-link to="/tarifs">Tarifs</router-link></div>
          <div class="btnLien"><router-link to="/contact">Contact</router-link></div>
        </div>
      </div>
    </div>
    </div>

    <transition name="component-fade" mode="out-in"><router-view/></transition>

    <footer>
      <p>©Copyright 2020 OrdiBessin</p>
    </footer>
  </div>
</template>

<style>
@font-face {
 font-family: "Cinzel";
 src: url("./font/cinzel.woff") format("woff"),
      url("./font/cinzel2.woff2") format("woff2");
}

#nav{

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#00137f+0,46c4ff+100 */
background: #00137f; /* Old browsers */
background: -moz-linear-gradient(top,  #00137f 0%, #46c4ff 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  #00137f 0%,#46c4ff 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  #00137f 0%,#46c4ff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00137f', endColorstr='#46c4ff',GradientType=0 ); /* IE6-9 */

  width: 190px;
  text-align: center;
  margin-left: 100px;
  padding: 0 6px 6px 6px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  position: fixed;
  z-index: 1000;
}

#conteneurNav{
  background-color: #fff;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 99%, 50% 85%, 0 99%);
  clip-path: polygon(0 0, 100% 0, 100% 99%, 50% 85%, 0 99%);
  padding-bottom: 65px;
  transition: 1s;
}

.btnLien{
  border-top: 1px solid rgb(87, 87, 87);
  transition: 1s;
}

.btnLien:hover{
  background-color: rgba(0, 0, 0, 0.1);
}

#nav a{
  display: block;
  text-decoration: none;
  padding: 6px;
  color: rgb(179, 179, 179);
  transition: 0.5s;
  font-family:'Cinzel';
}

#nav a:hover{
  color: rgb(70, 196, 255);
}

.router-link-exact-active{
  color: rgb(70, 196, 255)!important;
}

.btnHideMenu svg{
  font-size: 40px;
  color: rgb(146, 146, 146);
}

footer{
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 40px;
  text-align: center;
  font-family: "Cinzel";
  padding-top: 5px;
  border-top:solid 1px black;
  background-color: #fff;
}

/* carousel*/

.carousel-item {
  height: 100vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: -1000;
}

.carousel-item h2, .carousel-item .lead{
  text-shadow: 3px 3px 3px rgba(0,0,0, 1);
}

.carousel-indicators, .lead{
  margin-bottom: 60px;

}

.commun #myCarousel{
  width: 65%;
}

/*transition*/
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active avant la 2.1.8 */ {
  opacity: 0;
}

/*commun*/
.corps{
  width: 35%;
  position: absolute;
  top:0;
  right:0;
  background-color: #fff;
  padding : 20px 20px 0 40px;
  height: 100vh;
  overflow: scroll;
}

h2, h5{
  font-family: "Cinzel";
}

.corps ul{
  list-style-image: url('./assets/puce.png');
  margin: 20px 0;
}

.interieurCorps{
    padding-bottom: 50px;
}

@media screen and (max-width: 1050px) {

  .wrapCenter{
    width: 100%;
    position: fixed;
    z-index: 1000;
  }
  
  #nav{
    margin: auto;
    position: initial;
    width: 130px;
  }

  .navImg{
    width: 50%;
  }

  .commun #myCarousel{
    width: 100%;
  }

  .commun #myCarousel .carousel-item {
    height: 30vh;
  }

  .corps {
    position: initial;
    width: 100%;
    overflow: initial;
    height: initial;
  }
}

</style>

<script>
export default {

    data(){

        return{

          menuAffiche : true
          
        }

    },

    created(){
      window.addEventListener('resize', this.menuResp);
      this.menuResp();
    },

    destroyed() {
      window.removeEventListener('resize', this.menuResp)
    },

    methods:{

      hideMenu(){
        let liensNav = document.getElementById("liensNav");
        let conteneurNav = document.getElementById("conteneurNav");
        if(this.menuAffiche === true){
          liensNav.style.display ="none";
          conteneurNav.style.paddingBottom = "25px";
          this.menuAffiche = false;
        }else{
          liensNav.style.display ="initial";
          conteneurNav.style.paddingBottom = "70px";
          this.menuAffiche = true;
        }
      },

      menuResp(){
        let liensNav = document.getElementById("liensNav");
        let conteneurNav = document.getElementById("conteneurNav");
        if(window.innerWidth<1050){
          liensNav.style.display ="none";
          conteneurNav.style.paddingBottom = "25px";
          this.menuAffiche = false;
        }
      },

    }

}
</script>