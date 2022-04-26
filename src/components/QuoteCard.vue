<template>
    <div>
        <h2>Quotes:</h2>
        <ul>
            <li v-for="q in quotes" :key="q.quote_id">
                <p>Quote: {{q.quote}} </p>
                <p>Author: <b>{{q.author}}</b></p>
            </li>
        </ul>

    </div>
</template>

<script>
  export default {
    name: "QuoteCard",
    props: {
      quotes: {}
    }
  }
</script>

<style scoped>
p {
    margin: 0;
}
li {
    margin-top: 15px;
}
</style>
