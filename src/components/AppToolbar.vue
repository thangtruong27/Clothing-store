<template>
  <v-layout>
    <v-flex d-flex>
      <v-toolbar flat>
        <v-toolbar-title>Jean</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field clearable append-icon="search" flat class="pr-3" solo width="80%"></v-text-field>
        <v-badge left overlap>
          <span slot="badge">{{updateCart}}</span>
          <v-btn icon>
            <v-icon color="black" class="pr-1">shopping_cart</v-icon>
          </v-btn>
        </v-badge>
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
          <v-btn slot="activator" class="px-1" icon>
            <v-icon color="black">person</v-icon>
          </v-btn>
          <v-card>
            <v-list>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>thangtruong27</v-list-tile-title>
                  <v-list-tile-sub-title>Freelancer</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
              <v-list-tile @click>
                <v-list-tile-title>Account</v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <router-link to="/user">Logout</router-link>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>
      </v-toolbar>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: 'AppToolbar',
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true
    };
  },
  computed: {
    updateCart() {
      return this.$store.state.cart;
    }
  }
};
</script>
