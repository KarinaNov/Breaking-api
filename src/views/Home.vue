<template>
    <div class="card-block">
        <div class="card" style="max-width: 940px;" v-if="info">
            <h1 class="card-title">{{info.Title}}</h1>
                <div class="card-body">
                <div class="">
                    <div class="">
                        <p class="card-text">
                            {{info.Plot}}
                        </p>
                        <p class="card-text">
                            <b>Country:</b> {{info.Country}}
                        </p>
                        <p class="card-text">
                            <b>Release:</b> {{info.Released}}
                        </p>
                        <p class="card-text">
                            <b>Author:</b> {{info.Writer}}
                        </p>
                        <p class="card-text">
                            <b>Release years:</b> {{info.Year}}
                        </p>
                        <p class="card-text">
                            <b>IMDB Rating :</b> {{info.imdbRating}}
                        </p>
                        <p class="card-text">
                            <b>Actors:</b> {{info.Actors}}
                        </p>
                            <router-link to="/search" class="btn btn-primary">More information</router-link>
                    </div>
                </div>
                <div class="col-md-4">
                    <img
                            :src="info.Poster"
                            alt="..."
                            class="img-fluid"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import {getPosterData} from '../core/api';

  export default {
    name: "Title",
    data() {
      return {
        info: null
      }
    },
    created() {
      getPosterData().then(d => {
        this.info = d;
      })
    },
  }
</script>

<style scoped>
.card-title{
    text-align: center;
    padding: 10px;
}
.card{
 box-shadow: 5px 5px 5px 5px #aaaaaa;
 border: 0;
 padding: 20px;
 margin: 0 auto;
}
.card-body{
    display: flex;
}
.card-block{
    height: 100vh;
}
</style>
