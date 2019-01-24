<template>
  <div class="nav">
    <router-link to='/'>
      <img src="./../assets/img/cat.jpg" alt="">
    </router-link>
    <nav>
      <ul>
        <!--router-->
        <li v-for='item in menu' :key='item.name'>
          <router-link :to="item.url">{{item.name}}</router-link>
          </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    
  },
  data(){
    return {
      menu:[
        {
          name:'article',
          url:'/list'
        },{
          name:'introduce',
          url:'/introduce'
        },{
          name:'mine',
          url:'/mine'
        },{
          name:'other',
          url:'other'
        }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
