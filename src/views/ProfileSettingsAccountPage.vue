<template>
	<div class="profile-settings__wrapper">
		<TheProfileSettingsNavigation />

		<div class="profile-settings__content">
			<h2 class="profile-settings__title">Account</h2>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">Username</span>
				<input class="profile-settings__input-wrapper" type="text">
				<span class="profile-settings__display-name">https://9gag.com/u/{username}</span>
			</div>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">Email</span>
				<input class="profile-settings__input-wrapper" type="text">
				<span class="profile-settings__display-name">Email will not be displayed publicly</span>
			</div>
			<button class="profile-settings__save-btn">Save Changes</button>
		</div>
	</div>
</template>

<script setup>

import TheProfileSettingsNavigation from "@/components/Navigation/TheProfileSettingsNavigation.vue";
</script>

<style scoped>

</style>