<template>
  <v-container>
    <v-navigation-drawer>
      <v-list>
        <!-- eslint-disable-next-line vue/valid-v-for -->
        <v-list-tile @click v-for="item in items">
          <v-list-tile-content>
            <v-list-tile-title>{{item}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="dialog = true">
          <v-list-tile-content>
            <v-list-tile-title>Newsletter</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <div>
          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title class="headline grey lighten-2 upper-case">newsletter</v-card-title>
              <v-card-text>Join our mailing list to receive updates on new arrivals and special offers.</v-card-text>
              <v-text-field placeholder="Enter your email here"></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" center @click="dialog = false">Subcribe</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: 'app-category',
  data() {
    return {
      items: ['Jeans', 'Shoe', 'Coat', 'Gymwear', 'Jacket', 'Jacket'],
      dialog: false
    };
  }
};
</script>
