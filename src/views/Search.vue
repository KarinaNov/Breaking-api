<template>
  <div class="home">
    <SearchField class="search-field" @search="searchHandler"></SearchField>


    <div class="season-wrapper">
      <EpisodeList :episodes="episodesBySearchStr.length ? episodesBySearchStr : allEpisodes"
                   @selectEpisode="selectEpisode"
      >
      </EpisodeList>
      <EpisodeDetailedInformation :characters-list="charactersInEpisode"
                                  :death="deathInEpisode"
      >
      </EpisodeDetailedInformation>
      <QuoteCard :quotes="quotes" v-if="quotes.length"></QuoteCard>
    </div>

  </div>
</template>

<script>
import EpisodeList from '../components/EpisodeList';
import EpisodeDetailedInformation from '../components/EpisodeDetailedInformation';
import SearchField from '../components/SearchField';
import QuoteCard from '../components/QuoteCard';

export default {
  name: 'Home',
  data() {
    return {
      charactersInEpisode: [],
      deathInEpisode: [],
      quotes: [],
      searchStr: null
    }
  },
  methods: {
    selectEpisode(episode) {
      const curentEpisode = this.allEpisodes[episode.episode - 1];

      this.checkCharactersInfo(curentEpisode.characters);
      this.getDeath(episode);
    },
    checkCharactersInfo(charactersName) {
      this.charactersInEpisode = [];
      if(!this.$store.getters.isExistCharacters) {
        this.$store.dispatch('allCharacters').then(()=> {
          this.getCharactersInfo(charactersName);
        })
      } else {
        this.getCharactersInfo(charactersName);
      }
    },
    getCharactersInfo(charactersName) {
      let name;
      if(typeof charactersName === 'string') {
        name = [charactersName]
      } else {
        name = charactersName;
      }

      name.forEach(cName => {
        const character = this.$store.getters.charactersByName(cName);
        if(character[0]) {
          this.charactersInEpisode.push(character[0]);
        }
      });
    },
    getDeath(episode) {
      if(!this.$store.getters.isExistDeath) {
        this.$store.dispatch('allDeath').then(()=> {
          this.getDeathByEpisode(episode);
        })
      } else {
        this.getDeathByEpisode(episode);
      }
    },
    getDeathByEpisode(episode) {
      this.deathInEpisode = [];
      const death = this.$store.getters.deathByEpisode(episode.episode)
      this.deathInEpisode = death;
    },
    getQuote(quotePart) {
      if(!this.$store.getters.isExistQuote) {
        this.$store.dispatch('allQuotes').then(()=> {
          this.getQuoteByPart(quotePart);
        })
      } else {
        this.getQuoteByPart(quotePart);
      }
    },
    getQuoteByPart(quotePart) {
      if(quotePart.length) {
        this.quotes = this.$store.getters.quote(quotePart);
        return;
      }
      this.quotes = [];
    },
    searchHandler(searchStr) {
      this.searchStr = searchStr;
    }
  },
  computed: {
    allEpisodes() {
      return this.$store.getters.allEpisodes
    },
    episodesBySearchStr() {
      return this.searchStr?.length ? this.$store.getters.episodeByTitle(this.searchStr) : [];
    }
  },
  watch: {
    searchStr(newVal) {
        this.checkCharactersInfo(newVal);
        this.getQuote(newVal);
    }
  },

  components: {
  EpisodeList,
  EpisodeDetailedInformation,
  SearchField,
  QuoteCard,
}
}
</script>
<style scoped>
.season-wrapper {
  display: flex;
}
.search-field {
    width: 38%;
    margin: 15px;
}
</style>
