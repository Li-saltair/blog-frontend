<template>
  <div class="main">
    <Nav/>
    <div class="content">
      <List :listContent="exdata" />
    </div>
  </div>
</template>

<script>
import "./../assets/css/style.css";
import Nav from "./../components/nav.vue";
import List from "./../components/list.vue";

export default {
  name: "app",
  components: {
    Nav,
    List
  },
  data(){
    return {
      exdata:[
        {
          _id:'1',
          title:"的身份假单胞菌",
          time:"2018-12-09 12:09:08",
          synopsis:"时候还是给DVD是个vvvvvvvvvvvv是个地地道道地地道道的吧火炬传递的过山车v的故事歌唱大赛v成都市v火车DVD好的scud是火车DVD和规定以外的沙家浜ii属于广东和v城市vSaab洒进来看看很快就"
        },{
          _id:'2',
          title:"的身份假单胞菌",
          time:"2018-12-09 12:09:08",
          synopsis:"时候还是给DVD是个vvvvvvvvvvvv是个地地道道地地道道的吧火炬传递的过山车v的故事歌唱大赛v成都市v火车DVD好的scud是火车DVD和规定以外的沙家浜ii属于广东和v城市vSaab洒进来看看很快就"
        }
      ]
    }
  }
};
</script>
<style scoped>
.content{
  background:transparent;
  padding:0;
}
</style>


