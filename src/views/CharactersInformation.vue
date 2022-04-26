<template>
    <div>
        <div class="card" style="max-width: 940px;" v-if="getCharacterInfo">
            <img
                    :src="getCharacterInfo.img"
                    class="card-img-top"
                    alt="..."
            />
            <div class="card-body m-auto">
                <h2 class="card-title">{{getCharacterInfo.name}}</h2>
                <p class="card-text" >
                   The character appeared in {{getCharacterInfo.appearance}} seasons
                </p>
                <template v-if="getResponsibleDeathByCharacterName.length">
                    <div class="card-text">Character associated with death:
                        <ul>
                            <li v-for="d in getResponsibleDeathByCharacterName" :key="d.id">
                                {{d.death}}
                            </li>
                        </ul>
                    </div>
                    <p class="card-text" v-if="getDeathInfo.last_words">
                        Last words: "{{getDeathInfo.last_words}}"
                    </p>
                </template>
                <template v-else><p>The character is not associated with more than one death.</p></template>
                <router-link class="btn btn-primary" to="/home">Home</router-link>
            </div>
        </div>
        <TimeLine :life-events="lifeEvents"></TimeLine>
    </div>
</template>

<script>
import TimeLine from '../components/TimeLine';
  export default {
    name: "CharactersInformation",
    data() {
      return {
        characterName: null
      }
    },
    created() {
      if(!this.$store.getters.isExistCharacters) {
        this.$store.dispatch('allCharacters');
      }

      if(!this.$store.getters.isExistDeath) {
        this.$store.dispatch('allDeath');
      }

      const name = this.getCharacterInfo?.name;
      this.characterName = name;
    },
    computed: {
      getCharacterInfo() {
        const id = this.$route.query.id;
        console.log('CharacterInfo', this.$store.getters.charactersByID(id));
        return this.$store.getters.charactersByID(id);
      },
      getDeathInfo() {
        console.log('DeathInfo', this.$store.getters.deathByCharacterName(this.characterName));
        return this.$store.getters.deathByCharacterName(this.characterName) || [];
      },
      getResponsibleDeathByCharacterName() {
        const name = this.getCharacterInfo?.name;
        return this.$store.getters.responsibleDeathByCharacterName(name);
      },
      getEpisodeListWithCharacterName() {
        return this.$store.getters.episodesByCharacterName(this.characterName);
      },
      lifeEvents() {
        return {
          birthday: {
            event: 'Рождение',
            date: this.getCharacterInfo?.birthday,
          },
          episodes: this.getEpisodeListWithCharacterName,
          death: this.getResponsibleDeathByCharacterName,
          status: this.getCharacterInfo?.status
        }
      }
    },
    components: {
      TimeLine
    }
  }
</script>

<style scoped>
img {
    max-height: 50vh;
    object-fit: contain;
}
.card{
  display: flex;
  justify-content: space-around;
  box-shadow: 5px 5px 5px 5px #aaaaaa;
  border: 0;
  padding: 20px;
  margin: 0 auto;
}
</style>
