<template>
  <div class="container">
    <div class="sidebar">
      <ul class="sidebar__categories">
        <li class="sidebar__category">
          <router-link  class="sidebar__category-btn" to="/">
            <i class="sidebar__category-icon sidebar__home-icon fa-solid fa-house"></i>
            Home
          </router-link>
        </li>
        <li class="sidebar__category">
          <router-link  class="sidebar__category-btn" to="/top">
            <i class="sidebar__category-icon fa-solid fa-chart-simple"></i>
            Top
          </router-link>
        </li>
        <li class="sidebar__category">
          <router-link  class="sidebar__category-btn" to="/trending">
            <i class="sidebar__category-icon fa-solid fa-arrow-trend-up"></i>
            Trending
          </router-link>
        </li>
        <li class="sidebar__category">
          <router-link  class="sidebar__category-btn" to="/fresh">
            <i class="sidebar__category-icon fa-regular fa-clock"></i>
            Fresh
          </router-link>
        </li>
      </ul>

      <div class="recents" v-if="recents.length">
        <h3 class="recents-title">Recents</h3>
        <ul class="recents__tags">
          <li class="recents__tag"></li>
        </ul>
      </div>

      <div class="interests">
        <h3 class="interests-title">Interests</h3>
        <ul class="interests__tags">
          <li class="interests__tag">
            <router-link class="tag-link" to="/a">Humor</router-link>
          </li>
          <li class="interests__tag">
            <router-link class="tag-link" to="/b">Latest News</router-link>
          </li>
          <li class="interests__tag">
            <router-link class="tag-link" to="/c">Gaming</router-link>
          </li>
          <li class="interests__tag">
            <router-link class="tag-link" to="/d">Anime & Manga</router-link>
          </li>
          <li class="interests__tag">
            <router-link class="tag-link" to="/e">Animals & Pets</router-link>
          </li>
          <li class="interests__tag">
            <router-link class="tag-link" to="/f">Sport</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const recents = ref([])
</script>

<style scoped>

</style>