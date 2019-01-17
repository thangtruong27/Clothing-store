<template>
  <v-container fluid>
    <v-layout>
      <v-flex md3>
        <app-side-bar></app-side-bar>
      </v-flex>
      <v-flex md9>
        <app-main-content></app-main-content>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AppSideBar from '@/components/AppSideBar.vue';
import AppMainContent from '@/components/AppMainContent.vue';

export default {
  name: 'home',
  components: {
    AppSideBar,
    AppMainContent
  }
};
</script>
