<template>
  <div>
    <Nav/>
    <div class="content">
      一个简介
    </div>
  </div>
</template>

<script>
import "./../assets/css/style.css";
import Nav from "./../components/nav.vue";

export default {
  name: "introduce",
  components: {
    Nav
  },
  data() {
    return {};
  },
};
</script>