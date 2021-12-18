<template>
  <v-container class="home">
    <post-list v-if="!isLoading && !isError" />

    <v-progress-circular
      class="home__loader"
      indeterminate
      v-if="isLoading && !isError"
    ></v-progress-circular>

    <p class="home__error" v-if="!isLoading && isError">
      Something went wrong :(<br />
      Please try again later
    </p>
  </v-container>
</template>

<script>
import PostList from "../components/PostList";

import { mapGetters, mapActions } from "vuex";
import { getTrendingFeedData } from "@/api";

export default {
  name: "Home",
  components: {
    PostList,
  },
  data: () => ({
    isLoading: false,
    isError: false,
  }),
  computed: {
    ...mapGetters(["getTrendingFeed"]),
  },
  methods: {
    ...mapActions(["setTrendingFeed"]),
    async get() {
      this.isLoading = true;
      this.isError = false;

      try {
        this.setTrendingFeed(await getTrendingFeedData());
      } catch {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
  beforeMount() {
    this.get();
  },
};
</script>

<style lang="scss" scoped>
.home {
  &__loader,
  &__error {
    position: absolute;
    left: 50%;
    top: calc(50% - 56px);

    transform: translate(-50%, -50%);

    @media (min-width: 768px) {
      top: calc(50% - 64px);
    }
  }

  &__error {
    width: 100%;

    text-align: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 110%;

    @media (min-width: 768px) {
      font-size: 50px;
    }
  }
}
</style>
