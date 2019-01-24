<template>
  <div class="detail">
    <h4>{{ title }}</h4>
    <time class="detail-time">{{ time }}</time>
    <article v-html='content'></article>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    title:String,
    time:String,
    content:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
