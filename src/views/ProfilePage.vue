<template>
	<div class="profile-header">
		<img class="profile-header__img" src="https://gas-kvas.com/uploads/posts/2023-01/1673393665_gas-kvas-com-p-risunki-na-avatarku-anime-15.jpg" alt="avatar">
		<div class="profile-header__account-info">
			<h2 class="account-info__name">Макс Фирсов</h2>
			<span class="account-info__nickname">@shinmoriof</span>
		</div>
	</div>

	<p class="profile-description">Description</p>

	<nav class="profile-nav">
		<ul class="profile-nav__btns">
			<li class="profile-nav__btn-wrapper" @click.stop="selected = 'posts'">
				<button
					class="profile-nav__btn"
	        :class="{'profile-nav__btn--active': selected === 'posts'}"
				>Posts</button>
			</li>
			<li class="profile-nav__btn-wrapper" @click.stop="selected = 'comments'">
				<button
					class="profile-nav__btn"
	        :class="{'profile-nav__btn--active': selected === 'comments'}"
				>Comments</button>
			</li>
			<li class="profile-nav__btn-wrapper" @click.stop="selected = 'upvotes'">
				<button
					class="profile-nav__btn"
	        :class="{'profile-nav__btn--active': selected === 'upvotes'}"
				>Upvotes</button>
			</li>
			<li class="profile-nav__btn-wrapper" @click.stop="selected = 'saved'">
				<button
					class="profile-nav__btn"
	        :class="{'profile-nav__btn--active': selected === 'saved'}"
				>Saved</button>
			</li>
			<li class="profile-nav__options-wrapper">
				<button class="profile-nav__btn profile-nav__options">
					<i class="profile-nav__options-icon fa-solid fa-ellipsis-vertical"></i>
				</button>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import {ref} from "vue";

const selected = ref('posts')
</script>

<style scoped>

</style>