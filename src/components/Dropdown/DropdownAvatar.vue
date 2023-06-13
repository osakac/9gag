<template>
	<div class="dropdown-avatar dropdown">
		<ul class="dropdown-avatar__options">
			<li class="dropdown-avatar__option">
				<router-link class="dropdown-avatar__option-btn" to="/profile">My Profile</router-link>
			</li>
			<li class="dropdown-avatar__option">
				<router-link class="dropdown-avatar__option-btn" to="/saved">Saved</router-link>
			</li>
			<li class="dropdown-avatar__option">
				<button>Log Out</button>
			</li>
		</ul>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>