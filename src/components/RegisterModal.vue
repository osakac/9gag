<template>
	<div class="bg-modal" @click.stop="$emit('close-modal')">
		<div class="modal" @click.stop>
			<div class="modal__header">
				<h3 class="modal__header-title">Sign Up</h3>
				<button class="modal__header-close-btn" @click="$emit('close-modal')">
					<i class="modal__header-close-icon fa-solid fa-xmark"></i>
				</button>
			</div>
			<hr class="modal__header-delimiter">

			<div class="modal__content">
				<input class="modal__input" type="text" placeholder="Email address">
				<input class="modal__input" type="text" placeholder="Username">
				<input class="modal__input" type="password" placeholder="Password">

				<button class="modal__button">Sign Up</button>

				<p class="modal__footer">Already have an account?
					<button class="modal__footer-btn" @click="$emit('switch-modal')">Log in</button></p>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>