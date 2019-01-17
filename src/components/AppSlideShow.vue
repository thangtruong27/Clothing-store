<template>
  <v-flex>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  </v-flex>
</template>

<script>
export default {
  name: 'app-slide-show',
  data() {
    return {
      items: [
        {
          src: '/images/jeans.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    };
  }
};
</script>
