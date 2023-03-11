<template>
    <div class="page">
      <button @click="back">back</button>
      This is the about me page
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

<style scoped>
    .page {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        text-align: center;
        border: none;
    }
</style>