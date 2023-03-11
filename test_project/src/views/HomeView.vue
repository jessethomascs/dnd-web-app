<template>
  <div class="page">
    <div class="ribbon">
      Online DND Simulation v.0.1
    </div>
    <div class="ribbonButtons">
      <button id="ribbonAboutMe">About Me</button>

      <button 
        @click="$router.push({ name: 'Simulator' })" 
        id="ribbonSimulator"
      >Simulator</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    
  },
};
</script>

<style scoped src="./HomeView.css">
/* @import '../assets/css/startpage.css'; */
  @import './HomeView.css';
</style>