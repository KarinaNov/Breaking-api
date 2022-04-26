<template>
    <div class="series-detail">
        <h2 class="characters-title" v-if="charactersList.length">Characters:</h2>
        <div class="card-wrap">
            <CharacterCard v-for="ch in charactersList"
                           :key="ch.id"
                           :character="ch"
            >
            </CharacterCard>
        </div>

        <h2 v-if="death.length">Death:</h2>
        <div v-for="d in death" :key="d.id">{{d.death}} - {{d.cause}}</div>
    </div>
</template>

<script>
    import CharacterCard from './CharacterCard';

  export default {
    name: "SeriesDetailedInformation",
    props: {
      charactersList: Array,
      death: Array
    },
    components: {
      CharacterCard
    }
  }
</script>

<style scoped>
img {
    width: 50%;
}
.card-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: flex-start;
    justify-content: space-between;
    flex-grow: 1;
}
.series-detail{
  width: 60%;
}
.characters-title{
  padding: 20px 0 10px;
}
</style>
