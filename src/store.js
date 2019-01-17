import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: 0,
    categoryTitle: '',
    productImage: '',
    isLoggedin: false
  },
  mutations: {
    addToCart: state => state.cart++,
    removeFromCart: state => state.cart--,
    viewDetails: (state, imgUrl) => {
      state.productImage = imgUrl;
    }
  },
  actions: {}
});
