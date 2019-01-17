<template>
  <v-container>
    <v-layout column class="sidebar">
      <v-flex>
        <app-logo></app-logo>
      </v-flex>
      <v-flex>
        <app-category></app-category>
      </v-flex>
      <v-flex>
        <app-contact></app-contact>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppCategory from '@/components/AppCategory';
import AppLogo from '@/components/AppLogo';
import AppContact from '@/components/AppContact';
export default {
  name: 'app-side-bar',
  components: {
    AppCategory,
    AppLogo,
    AppContact
  }
};
</script>
<style>
.sidebar {
  position: fixed;
}
</style>
