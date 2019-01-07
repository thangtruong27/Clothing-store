<template>
  <v-container>
    <span class="left title">Jean</span>
    <div class="icon right">
      <v-icon class="pr-2" @click>search</v-icon>
      <v-icon class="pr-2" @click>shopping_cart</v-icon>
      <v-icon color="pr-2" @click>person</v-icon>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'AppTitle'
};
</script>
