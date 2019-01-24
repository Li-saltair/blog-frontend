<template>
  <div>
    <Nav/>
    <div class="content">
      一些其他东西
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