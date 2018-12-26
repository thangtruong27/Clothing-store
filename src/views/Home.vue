<template>
  <div class="home">
    <!-- <ProductReview/> -->
    <div class="cart">Cart {{cart.length}}</div>
    <Product :premium="premium" @add-to-cart="updateCart"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import ProductReview from '@/components/ProductReview.vue';
import Product from '@/components/Product.vue';

export default {
  name: 'home',
  components: {
    //ProductReview
    Product
  },
  data() {
    return {
      cart: [],
      premium: false
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    }
  }
};
</script>
<style>
.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}
.home {
  display: flex;
  flex-direction: column;
}
</style>
