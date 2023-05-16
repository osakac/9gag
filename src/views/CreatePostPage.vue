<template>
	<h2 class="create-post__page-title">Create Post</h2>
	<div class="create-post__form-wrapper">
		<input class="create-post__post-title" type="text" placeholder="Title">
		<div class="create-post__content"></div>
		<Multiselect
			:selectedTags="selectedTags"
			:tags="tags"
			@add-tag="addTag"
			@remove-tag="removeTag"
		></Multiselect>
		<button class="create-post__post-btn">Post</button>
	</div>
</template>

<script setup>
import Multiselect from "@/components/Multiselect/Multiselect.vue";
import {ref} from "vue";

const selectedTags = ref([])
const tags = ref(['cars', 'anime', 'memes', 'pranks'])

function addTag(tag) {
    selectedTags.value.push(tag)
}

function removeTag(tag) {
    const neededTag = selectedTags.value.indexOf(tag)
		selectedTags.value.splice(neededTag, 1)
}
</script>

<style scoped>

</style>