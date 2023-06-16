<template>
	<div class="profile-settings__wrapper">
		<TheProfileSettingsNavigation />

		<div class="profile-settings__content">
			<h2 class="profile-settings__title">Password</h2>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">New password</span>
				<input class="profile-settings__input-wrapper" type="text">
			</div>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">Re-type new password</span>
				<input class="profile-settings__input-wrapper" type="text">
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