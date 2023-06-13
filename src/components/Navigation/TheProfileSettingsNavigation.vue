<template>
	<ul class="profile-settings__navigation">
		<li class="profile-settings__item">
			<router-link class="profile-settings__item-btn" to="/profile-settings">
				<i class="profile-settings__nav-icon fa-solid fa-pen"></i>
				Profile
			</router-link>
		</li>
		<li class="profile-settings__item">
			<router-link class="profile-settings__item-btn" to="/profile-settings-account">
				<i class="profile-settings__nav-icon fa-solid fa-user"></i>
				Account
			</router-link>
		</li>
		<li class="profile-settings__item">
			<router-link class="profile-settings__item-btn" to="/profile-settings-password">
				<i class="profile-settings__nav-icon fa-solid fa-lock"></i>
				Password
			</router-link>
		</li>
	</ul>
</template>

<script setup>

</script>

<style scoped>

</style>