<template>
  <v-container class="post">
    <router-link :to="`/profile/${post.authorMeta.name}`">
      <v-avatar class="post__avatar">
        <img :src="post.authorMeta.avatar" :alt="post.authorMeta.nickName" />
      </v-avatar>
    </router-link>

    <div class="post__content">
      <p class="post__nick">
        {{ post.authorMeta.nickName }}
      </p>
      <p class="post__text">
        {{ post.text }}
      </p>
      <ul class="post__mentions" v-if="post.mentions.length">
        <li
          class="post__mention"
          v-for="mention of post.mentions"
          :key="mention"
        >
          {{ mention }}
        </li>
      </ul>
      <ul class="post__tags" v-if="post.hashtags.length">
        <li class="post__tag" v-for="tag of post.hashtags" :key="tag.name">
          #{{ tag.name }}
        </li>
      </ul>
      <p class="post__music">
        <strong>Original sound</strong> - {{ post.musicMeta.musicName }}
      </p>

      <div class="post__video-container">
        <div class="post__video">
          <video :ref="post.id" controls loop muted>
            <source :src="post.videoUrl" type="video/mp4" />
          </video>
        </div>

        <div class="post__side-bar">
          <div class="post__likes post__side-item">
            <div class="post__icon">
              <v-icon>mdi-heart</v-icon>
            </div>
            {{ post.diggCount }}
          </div>
          <div class="post__comments post__side-item">
            <div class="post__icon">
              <v-icon>mdi-comment</v-icon>
            </div>
            {{ post.commentCount }}
          </div>
          <div class="post__share post__side-item">
            <div class="post__icon">
              <v-icon>mdi-share</v-icon>
            </div>
            {{ post.shareCount }}
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
  methods: {
    getElementVisible(id) {
      const target = document.getElementById(id);
      const targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
      };
      const windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

      return (
        targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right
      );
    },
    play() {
      if (this.getElementVisible(this.post.id)) {
        this.$refs[this.post.id].play();
      } else {
        this.$refs[this.post.id].pause();
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.play);
  },
  destroyed() {
    window.removeEventListener("scroll", this.play);
  },
};
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;

  max-width: 600px;

  padding: 24px 0;
  margin: 0 auto;

  border-bottom: 1px solid rgba(22, 24, 35, 0.2);

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1600px) {
    width: 800px;
  }

  &__avatar {
    min-width: 55px;
    max-width: 55px;
    height: 55px;

    margin: 0 0 8px 0;

    border-radius: 50%;

    @media screen and (min-width: 768px) {
      margin: 0 16px 0 0;
    }
  }

  &__content {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }

  &__nick {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }

  &__mentions,
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0 8px;

    margin-bottom: 16px;
  }

  &__music {
    font-weight: normal;
  }

  &__video-container {
    display: flex;
    align-items: flex-end;
  }

  &__side-bar {
    margin-left: 16px;

    @media screen and (min-width: 768px) {
      margin-left: 24px;
    }
  }

  &__side-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 16px;

    font-size: 12px;
    line-height: 17px;
    text-align: center;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    margin-bottom: 8px;

    background-color: rgba(22, 24, 35, 0.06);

    border-radius: 50%;

    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  &__video {
    position: relative;

    @media screen and (min-width: 768px) {
      max-width: 300px;
    }

    @media screen and (min-width: 1600px) {
      max-width: 400px;
    }
  }

  video,
  img {
    max-width: 100%;

    border-radius: 20px;
  }
}
</style>
