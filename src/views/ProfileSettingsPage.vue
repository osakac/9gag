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
				<input class="profile-settings__input-wrapper" type="text">
				<span class="profile-settings__display-name">This is the name that will be visible on your profile</span>
			</div>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">Status</span>
				<select class="profile-settings__select-wrapper"></select>
			</div>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">Gender</span>
				<select class="profile-settings__select-wrapper"></select>
			</div>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">Birthday</span>
				<div class="profile-settings__birthday-wrapper">
					<input class="profile-settings__input-wrapper profile-settings__date-input" type="text" placeholder="YYYY">
					<input class="profile-settings__input-wrapper profile-settings__date-input" type="text" placeholder="MM">
					<input class="profile-settings__input-wrapper profile-settings__date-input" type="text" placeholder="DD">
				</div>
			</div>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">Hometown</span>
				<select class="profile-settings__select-wrapper"></select>
			</div>
			<div class="profile-settings__field-block">
				<span class="profile-settings__field-label">About</span>
				<textarea class="profile-settings__textarea profile-settings__input-wrapper" rows="5" maxlength="170"></textarea>
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