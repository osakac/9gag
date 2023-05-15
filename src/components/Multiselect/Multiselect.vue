<template>
	<div class="multiselect" @click.stop>
		<span class="multiselect__tag" v-for="tag in selectedTags">
			{{tag}}
			<button class="multiselect__remove-tag-btn"><i class="fa-solid fa-xmark"></i></button>
		</span>
		<input class="multiselect__input" @focus="optionsVisible = true" type="text">
		<div class="multiselect__options-wrapper" v-if="optionsVisible">
			<ul class="multiselect__options">
				<li class="multiselect__option" v-for="tag in tags">
					<button class="multiselect__option-btn" @click.stop="addTag(tag)">{{tag}}</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const optionsVisible = ref(false)

function addTag(tag) {
    emit('add-tag', tag)
		optionsVisible.value = false
}

const props = defineProps({
		selectedTags: Array,
		tags: Array,
})
const emit = defineEmits(['update:selectedTags', 'add-tag'])

function closeMultiselect() {
    if (optionsVisible.value) optionsVisible.value = false
}

onMounted(() => {
    document.body.addEventListener('click', closeMultiselect)
})
</script>

<style scoped>
@import url('@/components/Multiselect/multiselect.css');
</style>