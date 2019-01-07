<template>
  <div>
    <v-container>
      <v-layout wrap>
        <v-hover v-for="item in items" :key="item.id">
          <v-card min-width="200" slot-scope="{hover}" class="ma-2">
            <v-img :src="item.src">
              <v-btn absolute color="grey" class="black--text" v-if="hover" fab center>
                <v-icon>shopping_cart</v-icon>
              </v-btn>
            </v-img>
            <v-card-text>
              <div>Ripped Skinny Jeans</div>
              <div>Price: 14,99$</div>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
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
      ]
    };
  }
};
</script>
