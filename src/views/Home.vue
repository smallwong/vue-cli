<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line semi
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    }
}
</script>
