<template>
  <v-layout column>
    <v-flex>
      <v-layout class="my-1">
        <v-img v-bind:src="image" max-width="300px" class="ma-2"></v-img>
        <product-info
          :details="details"
          :variants="variants"
          :brand="brand"
          :product="product"
          @update-image="updateImage"
        ></product-info>
      </v-layout>
    </v-flex>
    <v-flex>
      <product-tabs class="mx-2" :reviews="reviews"></product-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import ProductTabs from '@/components/ProductTabs.vue';
import ProductInfo from '@/components/ProductInfo.vue';
export default {
  name: 'Product',
  components: {
    ProductTabs,
    ProductInfo
  },
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      brand: 'Vue master',
      product: 'Socks',
      decription: ' for warn winter',
      selectedVariant: 0,
      details: ['80% cotton', '20% poli', 'Gender-neutral'],
      variants: [
        {
          variantId: '1101',
          color: 'green',
          quantity: 10,
          onSale: true
        },
        {
          variantId: '1102',
          color: 'blue',
          quantity: 0,
          onSale: false
        }
      ],
      reviews: []
    };
  },
  mounted() {
    this.$on('review-submitted', productReview => {
      this.reviews.push(productReview);
    });
  },
  computed: {
    image() {
      return this.$store.state.productImage;
    }
  },
  methods: {
    updateImage(index) {
      this.selectedVariant = index;
    }
  }
};
</script>
