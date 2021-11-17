# TikTuk

Hi there! I'm TikTuk!) I'm here for you to stick up for a few hours.

# DEMO

https://alisavlasova.github.io/tiktuk/#/

# Tech

- Vue
- Vuex
- Vue Router
- Vuetify
- Scss

- ESLINT, PRETTIER
- Git

# Slideshow

Ss here I am!

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/screen.png)

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/screen-mob.png)

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/profile.png)

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/profile-mob.png)

# What have I done ?

- Responsive layout

- Collection Get Trending Feed on home page
- On each post you can see: 
    author's avatar and nick name
    post text
    mentions
    hashtags
    music
    count of likes, shares and comments
    video
- Clicking on avatar you can see author's profile page (using '$route.params')
- Videos can be paused by user using default controlls
- Videos are muted and autoplayable on scroll

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/post.png)

- Also there is client-side pagination on home page

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/pagination.png)

- Collection Get User Info and Get User Feed on profile page
- On profile page you can see: 
    author's avatar and nick name
    count of likes, shares and comments
    this author's videos
    count of play and text on each video

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/profile-info.png)

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/profile-post.png)

- Loader implemented for all request

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/loader.png)

- Error handling for all requests

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/error.png)


- To get back to home page click on header logo

![alt text](https://github.com/AlisaVlasova/tiktuk/blob/master/public/img/header.png)


# Problems

- Get User Feed wa s broken on server side
    I tried to use json obj, but when I tried to get videos and images using links from there I got 403 :(
    So I desided to use Get Trending Feed result ang filter it by user nick name

- Videos can't be autoplayable before user interracts the document
    That's why videos on home page are muted


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploy to gh-pages
```
npm run deploy
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

