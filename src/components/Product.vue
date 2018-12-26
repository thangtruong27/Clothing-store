<template>
  <div class="product">
    <div class="product-image">
      <img v-bind:src="image">
    </div>
    <product-info
      :details="details"
      :variants="variants"
      :brand="brand"
      :product="product"
      @update-image="updateImage"
    ></product-info>
    <product-tabs :reviews="reviews"></product-tabs>
  </div>
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
          image: '../images/sock-green.jpg',
          quantity: 10,
          onSale: true
        },
        {
          variantId: '1102',
          color: 'blue',
          image: '../images/sock-blue.jpg',
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
      return this.variants[this.selectedVariant].image;
    }
  },
  methods: {
    updateImage(index) {
      this.selectedVariant = index;
    }
  }
};
</script>
<style>
.product {
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  padding: 1rem;
}
</style>
