<template>
  <div class="home">
    <div class="main-card">
      <router-link to="/movie/tt1745960">
        <img
          src="https://i.ytimg.com/vi/giXco2jaZ_4/maxresdefault.jpg"
          alt="tgm poster" class="main-image" />
        <div class="desc">
          <h4>Top Gun: Maverick</h4>
          <p>After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him..</p>
        </div>
      </router-link>
    </div>

    <form @submit.prevent="MoviesSearch()" class="search-box">
      <input type="text" placeholder="Search Movie or ID" v-model="search" />
      <input type="submit" value="search" />
    </form>

    <div class="listMovies">
      <div class="movie" v-for= "movie in movies" :key= "movie.imdbID">
        <router-link :to= "'/movie/' + movie.imdbID" class="movie-direct">
          <div class="product-Image">
            <img :src="movie.Poster" alt="Movie Posters" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="desc">
            <p class="year">{{ movie.Year }}</p>
            <h4>{{ movie.Title }}</h4>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import env from '@/env.js'


export default {
  setup() {
    const search = ref("");
    const movies = ref([]);

    const MoviesSearch = () => {
      if (search.value != "") {
       fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(response => response.json())
          .then(data => {

            movies.value = data.Search;
            search.value = "";

          });
      }
    }

    return {
      search, movies, MoviesSearch
    }

  }

}
</script>

<style lang="scss">
.home {
  .main-card {
    position: relative;

    .main-image {
      display: block;
      width: 100%;
      height: 280px;
      object-fit: cover;
     
 
      position: relative;
      z-index: 0;

    }

    .desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 18px;
      z-index: 1;
    }

    h4 {
      color: whitesmoke;
      margin-bottom: 15px;
    }

    p {
      color: white;
    }
  }

  .search-box {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    text-align: center;
    padding: 17px;

    input {
      display: block;
      appearance: none;
      border: none;
      outline: auto;
      background: none;

      &[type="text"] {
        width: 100%;
        color: azure;
        background-color: crimson;
        font-size: x-large;
        padding: 10px 16px;
        border-radius: 10px;
        margin-bottom: 10px;
        transition: 0.5s;

        &::placeholder {
          color: #ffffff;
        }

        &:focus {
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        }
      }

      &[type="submit"] {
        width: 100%;
        padding: 14px;
        font-size: 20px;
        color: #ffffff;
        text-transform: uppercase;
        transition: 0, 6s;
        max-width: 250px;
        background-color: darkblue;
      }

      &:active {
        background-color: bisque;
      }
      &:hover{
        background-color: purple;
      }
    }

  }

  .listMovies {
    display: flex;
    flex-wrap: wrap;
    margin: 0px 10px;

    .movie {
      padding: 10px 12px;
      max-width: 60%;
      flex: 1 1 25%;

      .movie-direct {
        display: flex;
        flex-direction: column;
        height: 100%;

        .product-Image {
          position: relative;

          display: block img {
            display: inline;
            width: 100%;
            height: 200px;
            object-fit: cover;
          }

          .type {
            position: absolute;
            padding: 8px 12px;
            background-color: crimson;
            color: whitesmoke;
            bottom: 14px;
            left: 0px;
            text-transform: capitalize;
            }
        }
        .desc{
          background-color: #8DAABC;
          padding: 12px 9px;
          flex: 1 1 100%;

          .year{
            font-size: 12px;
          }
          .h4{
            font-size: 18px;
          }

        }
      }
    }
  }
}
</style>
