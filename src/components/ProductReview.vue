<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <p>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" placeholder="Name">
    </p>
    <p>
      <label for="review">Review:</label>
      <textarea type="text" id="review" v-model="review"></textarea>
    </p>
    <p>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
    </p>
    <p v-if="errors.length">
      <b>Please correct following errors:</b>
    </p>
    <ul>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <li v-for="error in errors">{{error}}</li>
    </ul>
    <p>
      <input type="submit" value="Submit">
    </p>
  </form>
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
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        };
        this.$emit('review-submitted', productReview);
        this.name = null;
        this.review = null;
        this.rating = null;
      } else {
        if (!this.name) this.errors.push('Name required');
        if (!this.review) this.errors.push('Review required');
        if (!this.rating) this.errors.push('Rating required');
      }
    }
  }
};
</script>
