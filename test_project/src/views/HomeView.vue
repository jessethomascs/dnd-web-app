<template>
    <div class="page">
      <div class="ribbon">
        Online DND Simulation v.0.1
      </div>
      <div class="ribbonButtons">
        <button id="ribbonHome" v-on:click="handleClick">Home</button>
  
        <button id="ribbonAboutMe">About Me</button>
  
        <button id="ribbonSimulator">Simulator</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick() {
        window.location.href = "./Simulator.vue";
      }
    },
  };
  </script>
  
  
  <style scoped src="./HomeView.css">
  /* @import '../assets/css/startpage.css'; */
    @import './HomeView.css';
  </style>