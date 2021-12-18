<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/">
        <div class="logo-icon">
          <v-icon color="#fff">mdi-fire</v-icon>
        </div>
        <span class="logo-title"> TikTuk </span>
      </router-link>

      <v-spacer></v-spacer>
      <span class="header-text"> a place for you to stick </span>
    </v-app-bar>
    <v-main fluid>
      <v-container class="content">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url(assets/scss/_reset.scss);

.v-application {
  * {
    font-family: "SofiaPro", Arial, Tahoma, "PingFangSC", sans-serif;

    color: rgba(22, 24, 35, 0.75);
  }
}

.v-app-bar {
  .v-icon {
    height: 50px;
  }

  a {
    display: flex;
  }

  span.header-text {
    display: none;

    font-weight: bold;
    text-transform: uppercase;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .logo-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    margin-right: 8px;

    border-radius: 50%;
    background-color: rgba(22, 24, 35, 0.75);
  }

  .logo-title {
    font-size: 28px;
    font-weight: bold;

    text-transform: none;
  }
}
</style>
