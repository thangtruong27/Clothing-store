<template>
  <v-app>
    <v-content>
      <home></home>
    </v-content>
  </v-app>
</template>
<script>
import Home from '@/views/Home';
export default {
  name: 'app',
  components: {
    Home
  }
};
</script>
