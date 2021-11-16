<template>
  <v-card
    class="d-flex align-center justify-center post"
    height="500px"
    :title="post.desc"
  >
    <!-- <video
      playsinline
      controls
      loop
    >
      <source :src="post.video.playAddr" type="video/mp4">
    </video> -->

    <video playsinline controls loop>
      <source :src="post.videoUrl" type="video/mp4" />
    </video>

    <!-- <img :src="post.video.cover" :alt="post.desc"> -->

    <v-row class="post__top">
      <div class="post__play">
        <div class="post__icon">
          <v-icon>mdi-play</v-icon>
        </div>
        {{ post.playCount }}
      </div>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.post {
  position: relative;
  overflow: hidden;

  cursor: pointer;

  &__top {
    position: absolute;
    top: 12px;
    left: 12px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    height: 50px;

    padding: 0 12px;

    background-color: rgba(255, 255, 255, 0.3);
  }

  &__play {
    display: flex;
    align-items: center;

    font-size: 16px;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
