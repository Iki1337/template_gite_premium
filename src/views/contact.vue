<template>
  <div class="commun contact">

    <header>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83257.5530406579!2d-0.8467609421007564!3d49.29915946243666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480babe37c83dbd9%3A0x40c14484fbcd5f0!2s14400%20Tour-en-Bessin!5e0!3m2!1sfr!2sfr!4v1571924272476!5m2!1sfr!2sfr" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </header>

<aside class="corps">
  <div class="interieurCorps">
    <h2>Contact & réservations</h2>
    <p>Aliqua velit officia minim ipsum anim cupidatat ea elit incididunt ex deserunt. Occaecat quis amet pariatur nulla reprehenderit. Do enim ullamco excepteur nisi laboris et enim amet.</p>

    <form action="contact.php" method="POST">
      <label for="dateArrivee">Date d'arrivée* :</label>
      <input type="date" id="arrive" name="voyage-arrive" required>

      <label for="dateDépart">Date de départ* :</label>
      <input type="date" id="depart" name="voyage-depart" required>

      <label for="nbAdultes">Adultes* :</label>
      <input type="number" id="adultes" name="adultes" min="1" required>

      <label for="nbEnfants">Enfants* :</label>
      <input type="number" id="enfants" name="enfants" min="0" required>

      <h5>Informations complémentaires :</h5>

      <input type="text" name="nom" id="nom" placeholder="Votre nom*" maxlength="10" required />
      
      <input type="email" name="email" id="email" placeholder="Votre email*" required />

      <textarea name="msg" id="msg" placeholder="Votre message"></textarea>
      
      <button class="btn-perso1" type="reset">Réinitialiser</button><button class="btn-perso2" type="submit">Envoyer</button>
      <div class="block"><p>Les champs marqué d'un * sont obligatoires.</p></div>
          
    </form>

  </div>
</aside>

  </div>
</template>

<style>
iframe{
  height: 97vh;
  width: 65%;
}

label{
  margin:5px 0 0 0;
}

form h5{
  margin-top: 20px;
}

input, textarea{
  width: 100%;
  margin: 0 0 10px 0;
}

form button{
  width: 45%;
}

.btn-perso1{
  float:left;
}

.btn-perso2{
  float: right;
}

.block{
  margin-top : 50px;
  width: 100%;
}

@media screen and (max-width: 1050px) {

  iframe{
    width: 100%;
  }
}

</style>

<script>

export default {
  name: 'contact',
  components: {
  },
}
</script>
