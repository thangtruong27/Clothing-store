<template>
  <v-container>
    <v-layout column class="sidebar">
      <app-logo></app-logo>
      <app-category></app-category>
    </v-layout>
  </v-container>
</template>

<script>
import AppCategory from '@/components/AppCategory';
import AppLogo from '@/components/AppLogo';

export default {
  name: 'app-side-bar',
  components: {
    AppCategory,
    AppLogo
  }
};
</script>
<style>
.sidebar {
  position: fixed;
}
</style>
