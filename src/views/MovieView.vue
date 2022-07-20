<template>
    <div class="movie-desc">
        <h1>{{movie.Title}}</h1>
        <img :src ="movie.Poster" alt="image-poster" class="main-img" />
        <h2>{{movie.Genre}}</h2>
        <p>{{movie.Language}}</p>
        <p>{{movie.Plot}}</p>
        <p>Rating: {{movie.imdbRating}}</p>
        <h3>{{movie.Writer}}</h3>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import env from '@/env.js'


export default {
    setup() {
        const movie = ref({});
        const route = useRoute();

        onBeforeMount(() => {
            fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
                .then(response => response.json())
                .then(data => {
                    movie.value = data;
                    console.log(data);
                });
        });

        return {
            movie
        }
    }
}
</script>

<style lang="scss">
.movie-desc{
    padding: 14px;

    h1{color:white;
    font-size: 24px;
    margin-bottom: 15px;
    }
    .main-img{
        display: block;
        max-width: 120px;
        margin-bottom: 15px;
    }
    .p{
        line-height: 1.5;
    }
}

</style>