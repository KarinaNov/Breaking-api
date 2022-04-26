<template>
    <div class="input-group">
        <input type="search" class="form-control rounded"
               placeholder="Search" aria-label="Search" v-model="searchField"
               aria-describedby="search-addon" />
        <button type="button" @click="searchHandler" class="btn btn-outline-primary">search</button>
    </div>
</template>

<script>
  export default {
    name: "SearchField",
    data() {
      return {
        searchField: null
      }
    },
    methods: {
      searchHandler() {
        this.$emit('search', this.searchField);
        this.searchField = '';
      }
    }
  }
</script>

<style scoped>
.form-control{
  width: 85%;
  border: 3px solid #75bd99;
  border-right: none;
  padding: 5px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  outline: none;
}
.form-control:focus{
  color: #75bd99;
}
.btn{
  width: 80px;
  height: 40px;
  background: #75bd99;
  text-align: center;
  color: #eeeeee;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 14px;
}
</style>
