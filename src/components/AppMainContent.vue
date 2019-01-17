<template>
  <v-container>
    <v-layout column>
      <app-toolbar></app-toolbar>
      <app-slide-show></app-slide-show>
      <app-list-item></app-list-item>
      <app-footer></app-footer>
    </v-layout>
  </v-container>
</template>

<script>
import AppToolbar from '@/components/AppToolbar.vue';
import AppSlideShow from '@/components/AppSlideShow.vue';
import AppListItem from '@/components/AppListItem.vue';
import AppFooter from '@/components/AppFooter.vue';
export default {
  components: {
    AppToolbar,
    AppSlideShow,
    AppListItem,
    AppFooter
  }
};
</script>

<style>
</style>
