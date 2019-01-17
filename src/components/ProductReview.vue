<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
    <v-text-field v-model="email" label="E-mail" required></v-text-field>
    <v-text-field v-model="email" label="Review" required></v-text-field>
    <v-rating></v-rating>
    <v-btn color="primary" size="16">Submit</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    };
  }
};
</script>
