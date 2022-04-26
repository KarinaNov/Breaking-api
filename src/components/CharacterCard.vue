<template>
    <div class="card card-w card-p" >
        <img
                :src="character.img"
                class="card-img-top"
                alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">Name: <b>{{character.name}}</b></h5>
            <p class="card-text">
                nickname: {{character.nickname}}
            </p>
            <a @click="clickHandler(character.char_id)" class="btn btn-primary">Detail</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CharacterCard",
    props: {
      character: Object
    },
    methods: {
      clickHandler(id) {
        this.$router.push(`detailedInfo?id=${id}`)
      }
    }
  }
</script>

<style scoped>
.card-w {
  position: relative;
  height: 300px;
  width: 200px;
}
.card-p {
  margin-bottom: 20px;
}
.card-img-top{
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.card-body{
  position: absolute;
  bottom: 10px;
  background: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  left: 10px;
  right: 10px;
  padding: 10px;
}
</style>
