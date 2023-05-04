<template>
  <header class="header">
    <div class="nav-wrap container">
      <nav class="nav-menu">
	      <button class="nav-menu__burger-btn" @click.stop="$emit('switch-sidebar')">
		      <i class="nav-menu__burger-icon fa-solid fa-bars"></i>
        </button>
        <h1 class="nav-menu__logo">
          <router-link to="/">9GAG</router-link>
        </h1>
        <ul class="nav-menu__btns">
          <li class="nav-menu__btn">
            <router-link to="/shuffle">Shuffle</router-link>
          </li>
	        <li class="nav-menu__btn">
		        <router-link to="/getapp">Get App</router-link>
	        </li>
	        <li class="nav-menu__btn">
		        <router-link to="/memeland">Memeland</router-link>
	        </li>
	        <li class="nav-menu__btn">
		        <router-link to="/potatoz">Potatoz</router-link>
	        </li>
	        <li class="nav-menu__btn">
		        <router-link to="/captainz">Captainz</router-link>
	        </li>
        </ul>
      </nav>

      <nav class="nav-function">
	      <button
		      class="nav-function__search-btn"
          :class="{'nav-function__search-btn--active': props.dropdownSearch}"
          @click.stop="$emit('switch-dropdown-search')"
	      >
		      <i class="nav-function__search-icon fa-solid fa-magnifying-glass"
		         :class="{'nav-function__search-icon--active': props.dropdownSearch}"></i>
		      <DropdownSearch v-if="props.dropdownSearch" @click.stop></DropdownSearch>
        </button>
	      <button class="nav-function__login-btn" @click.stop="$emit('show-login-modal')">Sign Up/Log in</button>
	      <button class="nav-function__avatar-btn" @click.stop="$emit('switch-dropdown-avatar')">
          <img class="nav-function__avatar-img" src="https://gas-kvas.com/uploads/posts/2023-01/1673393665_gas-kvas-com-p-risunki-na-avatarku-anime-15.jpg" alt="avatar">
		      <DropdownAvatar v-if="props.dropdownAvatar"></DropdownAvatar>
        </button>
        <button class="nav-function__create-post-btn">
	        <i class="create-post-btn__icon fa-solid fa-pen"></i>
          Post
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import DropdownAvatar from "@/components/DropdownAvatar.vue";
import DropdownSearch from "@/components/DropdownSearch.vue";

const props = defineProps({
		dropdownAvatar: Boolean,
		dropdownSearch: Boolean
})
</script>

<style scoped>

</style>