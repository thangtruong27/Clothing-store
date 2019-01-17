<template>
  <!-- Contact -->
  <v-flex>
    <v-navigation-drawer>
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
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2 upper-case">newsletter</v-card-title>
          <v-card-text>Join our mailing list to receive updates on new arrivals and special offers.</v-card-text>
          <v-text-field class="px-3" placeholder="Enter your email here"></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" center>Subcribe</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-navigation-drawer>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style>
</style>
