<template>
  <div class="page">
    <button @click="back">back</button>
    this is some test text
  </div>    
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push('/');
    },
  },
};
</script>
  
<style scoped src="./Simulator.css">
/* @import '../assets/css/startpage.css'; */
  @import './Simulator.css';
</style>