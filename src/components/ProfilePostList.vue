<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col v-for="post of getUserFeed" :key="post.id" cols="12" md="4">
          <v-item>
            <profile-post-item :post="post" />
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import ProfilePostItem from "@/components/ProfilePostItem";

export default {
  name: "ProfilePostList",
  components: {
    ProfilePostItem,
  },
  computed: {
    ...mapGetters(["getUserFeed"]),
  },
  methods: {
    ...mapMutations(["setUserFeed"]),
  },
};
</script>

<style lang="scss" scoped></style>
