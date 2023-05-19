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

			<form class="modal__form">
				<div class="modal__form-control">
					<input class="modal__form-input" type="email" placeholder="Email address">
					<span class="modal__form-error"></span>
				</div>
				<div class="modal__form-control">
					<input class="modal__form-input" type="text" placeholder="Username">
					<span class="modal__form-error"></span>
				</div>
				<div class="modal__form-control">
					<input class="modal__form-input" type="password" placeholder="Password">
					<span class="modal__form-error"></span>
				</div>
				<button class="modal__button">Sign Up</button>
			</form>

			<p class="modal__footer">Already have an account?
				<button class="modal__footer-btn" @click="$emit('switch-modal')">Log in</button>
			</p>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>