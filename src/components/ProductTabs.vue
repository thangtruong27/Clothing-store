<template>
  <v-tabs v-model="active">
    <v-tab>Reviews</v-tab>
    <v-tab>Make a review</v-tab>
    <v-tab-item>
      <v-card flat>
        <v-card-text>There're no reviews yet</v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <product-review></product-review>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import ProductReview from '@/components/ProductReview.vue';

export default {
  props: {
    reviews: {
      type: Array,
      required: false
    }
  },
  components: {
    ProductReview
  }
};
</script>
