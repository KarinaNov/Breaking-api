<template>
    <div class="series-wrapper">
        <ul class="series-list">
            <li v-for="episode in episodes"
                :key="episode.episode_id" class="point">
                <div class="card">
                    <div class="card-body" @click="selectEpisode(episode.episode)">
                        <h3 class="card-title">{{episode.title}} ({{episode.episode}})</h3>
                        <h4 class="card-subtitle">Release date: {{episode.air_date}}</h4>
                        <p class="card-text">
                            Characters: <span v-for="characters in episode.characters" :key="characters.id">
                            {{characters}},</span>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
name: "EpisodeList",
props: {
  episodes: {}
},
methods: {
  selectEpisode( episode) {
    this.$emit('selectEpisode', {episode});
  }
}
}
</script>

<style scoped>
.series-wrapper{
    width: 40%;
}
.series-list {
    list-style-type: none;
    padding: 0;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
}
.card-title, .card-subtitle{
    padding: 5px 0;
}
.point{
    width: 50%;
}
.card{
    border: 2px solid #75bd99;
    min-height: 250px;
    margin: 5px;
    padding: 10px;
    cursor: pointer;
}
.card:hover{
    border: 2px solid #335042;
}
</style>
