<template>
  <v-container fluid>
    <v-layout>
      <v-flex md3>
        <app-side-bar></app-side-bar>
      </v-flex>
      <v-flex md9>
        <v-layout column>
          <app-title></app-title>
          <app-slide-show></app-slide-show>
          <app-list-item></app-list-item>
          <app-footer></app-footer>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AppSideBar from '@/components/AppSideBar.vue';
import AppTitle from '@/components/AppTitle.vue';
import AppSlideShow from '@/components/AppSlideShow.vue';
import AppListItem from '@/components/AppListItem.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'home',
  components: {
    AppSideBar,
    AppTitle,
    AppSlideShow,
    AppListItem,
    AppFooter
  }
};
</script>
