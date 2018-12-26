<template>
  <div>
    <div>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <span
        class="tab"
        :class="{activeTab: selectedTab === tab}"
        v-for="tab in tabs"
        @click="selectedTab = tab"
      >{{ tab }}</span>
    </div>

    <div v-show="selectedTab === 'Reviews'">
      <p v-if="!reviews.length">There are no reviews yet.</p>
      <ul v-else>
        <li v-for="(review, index) in reviews" :key="index">
          <p>{{ review.name }}</p>
          <p>Rating:{{ review.rating }}</p>
          <p>{{ review.review }}</p>
        </li>
      </ul>
    </div>
    <ProductReview v-show="selectedTab === 'Make a Review'"></ProductReview>
  </div>
</template>

<script>
import ProductReview from '@/components/ProductReview.vue';

export default {
  props: {
    reviews: {
      type: Array,
      required: false
    }
  },
  components: {
    ProductReview
  },
  data() {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews'
    };
  }
};
</script>
<style>
.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

.tab {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>
