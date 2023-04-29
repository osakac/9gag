<template>
  <header class="header">
    <div class="nav-wrap container">
      <nav class="nav-menu">
	      <button class="nav-menu__burger-btn">
		      <i class="nav-menu__burger-icon fa-solid fa-bars"></i>
        </button>
        <h1 class="nav-menu__logo">
          <router-link to="/">9GAG</router-link>
        </h1>
        <ul class="nav-menu__btns">
          <li class="nav-menu__btn">
            <router-link to="/">Shuffle</router-link>
          </li>
	        <li class="nav-menu__btn">
		        <router-link to="/">Get App</router-link>
	        </li>
	        <li class="nav-menu__btn">
		        <router-link to="/">Memeland</router-link>
	        </li>
	        <li class="nav-menu__btn">
		        <router-link to="/">Potatoz</router-link>
	        </li>
	        <li class="nav-menu__btn">
		        <router-link to="/">Captainz</router-link>
	        </li>
        </ul>
      </nav>

      <nav class="nav-function">
	      <button class="nav-function__search-btn">
		      <i class="nav-function__search-icon fa-solid fa-magnifying-glass"></i>
        </button>
	      <button class="nav-function__avatar-btn">
          <img class="nav-function__avatar-img" src="https://www.bsau.ru/upload/iblock/9c0/2_9yLm2yWUoMcZlywdOcfKAw.png" alt="avatar">
        </button>
        <button class="nav-function__create-post-btn">
	        <i class="create-post-btn__icon fa-solid fa-pen"></i>
          Post
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>

<style scoped>

</style>