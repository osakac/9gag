<template>
	<div class="profile-settings__wrapper">
		<TheProfileSettingsNavigation />

		<div class="profile-settings__content">
			<h2 class="profile-settings__title">Profile</h2>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">Avatar</span>
				<div class="profile-settings__avatar-block">
					<img class="profile-settings__avatar" src="https://gas-kvas.com/uploads/posts/2023-01/1673393665_gas-kvas-com-p-risunki-na-avatarku-anime-15.jpg" alt="avatar">
					<input class="profile-settings__avatar-input" type="file" accept=".jpg, .jpeg, .png, .gif">
				</div>
			</div>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">Display name</span>
				<input type="text">
			</div>
		</div>
	</div>
</template>

<script setup>
import TheProfileSettingsNavigation from "@/components/Navigation/TheProfileSettingsNavigation.vue";
</script>

<style scoped>

</style>