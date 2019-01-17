<template>
  <div>
    <div>
      <div>
        <h1 style="display: inline">{{title}}</h1>
        <div v-if="onSale">Sale</div>
      </div>
      <p v-if="inStock">In Stock</p>
      <p v-else :class="{outOfStock: !inStock}">Out of Stock</p>
      <p>Shipping: {{shipping}}</p>
      <ul>
        <!--eslint-disable-next-line vue/require-v-for-key -->
        <li v-for="detail in details">{{detail}}</li>
      </ul>
      <div></div>
      <v-rating size="17"></v-rating>
      <v-btn color="primary">Add to cart</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    variants: {
      type: Array,
      required: true
    },
    details: {
      type: Array,
      required: true
    },
    product: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedVariant: 0
    };
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity > 0;
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale > 0;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      } else return '2.99';
    }
  },
  methods: {
    addToCart: function() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    updateProduct: function(index) {
      this.$emit('update-image', index);
    }
  }
};
</script>
<style>
.color-box {
  display: block;
}
</style>
