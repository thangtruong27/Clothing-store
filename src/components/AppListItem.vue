<template>
  <div>
    <v-container fluid>
      <v-layout wrap>
        <v-flex xs3 v-for="item in items" :key="item.id" pl-1>
          <v-hover>
            <v-card slot-scope="{hover}" class="ma-2" :class="`elevation-${hover ? 12 : 2}`">
              <v-img :src="item.src" @click="viewDetails(item.src)"></v-img>
              <v-card-text>
                <div>Ripped Skinny Jeans</div>
                <div>Price: 14,99$</div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-action class="d-flex">
                <v-rating color="grey" half-increments background-color="grey" size="15"></v-rating>
                <div>
                  <v-icon class="pr-1" right @click="addToCart">shopping_cart</v-icon>
                </div>
              </v-card-action>
            </v-card>
          </v-hover>
          <div>
            <v-dialog v-model="dialogInfo" width="600">
              <v-card>
                <product></product>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Product from './Product.vue';

export default {
  name: 'app-list-item',
  data() {
    return {
      items: [
        {
          src: '../images/jeans1.jpg',
          id: 1
        },
        {
          src: '../images/jeans2.jpg',
          id: 2
        },
        {
          src: '../images/jeans3.jpg',
          id: 3
        },
        {
          src: '../images/jeans4.jpg',
          id: 4
        },
        {
          src: '../images/jeans2.jpg',
          id: 5
        },
        {
          src: '../images/jeans4.jpg',
          id: 6
        }
      ],
      dialogInfo: false,
      currentImg: ''
    };
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart');
    },
    viewDetails(imgUrl) {
      this.dialogInfo = true;
      this.$store.commit('viewDetails', imgUrl);
    }
  },
  components: {
    Product
  }
};
</script>
