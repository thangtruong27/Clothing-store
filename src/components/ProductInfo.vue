<template>
  <div class="product-info">
    <div class="product-detail">
      <div class="title">
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
      <div
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{backgroundColor: variant.color}"
        @click="updateProduct(index)"
      ></div>
      <button
        v-on:click="addToCart"
        :class="{disabledButton: !inStock}"
        :disabled="!inStock"
      >Add to cart</button>
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
img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 50%;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}
.disabledButton {
  background-color: #d8d8d8;
}

.outOfStock {
  text-decoration: line-through;
}
</style>
