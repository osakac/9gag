<template>
	<h2 class="create-post__page-title">Create Post</h2>
	<div class="create-post__form-wrapper">
		<input class="create-post__post-title" type="text" placeholder="Title">
		<div class="create-post__content"></div>
<!--		<Multiselect-->
<!--			class="create-post__multiselect-tags"-->
<!--			:selectedTags="selectedTags"-->
<!--			:tags="tags"-->
<!--		></Multiselect>-->
		<Multiselect v-model:selectedTags="selectedTags" :tags="tags" @add-tag="addTag"></Multiselect>
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
</script>

<style scoped>

</style>