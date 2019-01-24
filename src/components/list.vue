<template>
  <div class="list">
    <div class="list-content" v-for="item in listContent" :key="item._id">
      <router-link tag="div" to="/" class="art-unit">
        <h4 class="list-title">{{ item.title }}</h4>
        <time class="detail-time">{{ item.time }}</time>
        <div class="synopsis">{{ item.synopsis }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    listContent:Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
