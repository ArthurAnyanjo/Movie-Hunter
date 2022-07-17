<template>
  <div class="home">
    <div class="main-card">
      <router-link to="/movie/tt3896198">
        <img
          src="https://www.denofgeek.com/wp-content/uploads/2019/04/guardians_of_the_galaxy_2_large.jpg?resize=768%2C432"
          alt="gog2 poster" class="main-image" />
        <div class="desc">
          <h4>Guardians of Galaxy Vol 2</h4>
          <p>The Guardians struggle to keep together as a team while dealing with their personal family issues, notably
            Star-Lord's encounter with his father the ambitious celestial being Ego</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>


export default {

}
</script>

<style lang="scss">
.home{
  .main-card{
    position: relative;

    .main-image{
      display: block;
      width: 100%;
      height: 280px;
      object-fit: cover;

      position: relative;
      z-index: 0;

    }
  }
}

</style>
