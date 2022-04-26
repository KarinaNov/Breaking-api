<template>
  <div class="about">
    <ul class="occupation-list">
      <li v-for="(character, occupation) in fillOccupation" :key="occupation">
        <b>{{occupation}}</b>
        <ul>
          <li class="occupation-item" v-for="ch in character" :key="ch.id">
            {{ch.name}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import {fillOccupationList} from '../core/utils';

  export default {
    computed: {
      occupationList() {
        return this.$store.getters.occupation;
      },
      allCharacters() {
        return this.$store.getters.allCharacters;
      },
      fillOccupation() {
        return fillOccupationList(this.occupationList, this.allCharacters)
      }
    },
    created() {
      if(!this.$store.getters.isExistCharacters) {
        this.$store.dispatch('allCharacters');
      }
    },
  }
</script>

<style scoped>
.occupation-list{
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}
.occupation-item{
  margin-left: 20px;
}
</style>