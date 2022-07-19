<template>
    <div class="movie-desc">
        <h1>{{movie.Title}}</h1>
        <img :src ="movie.Poster" alt="image-poster" class="featured-img" />
        <h3>{{movie.Genre}}</h3>
        <p>{{movie.Language}}</p>
        <p>{{movie.Plot}}</p>
        <h5>{{movie.Writer}}</h5>
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
    .featured-img{
        display: block;
        max-width: 120px;
        margin-bottom: 15px;
    }
    .p{
        line-height: 1.5;
    }
}

</style>