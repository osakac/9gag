<template>
	<div class="multiselect" @click.stop>
		<span class="multiselect__tag" v-for="tag in selectedTags">
			{{tag}}
			<button class="multiselect__remove-tag-btn" @click.stop="$emit('remove-tag', tag)">
				<i class="fa-solid fa-xmark"></i>
			</button>
		</span>
		<input
			class="multiselect__input"
			v-model.trim="inputValue"
			@keypress.enter="addTag(inputValue)"
			v-if="selectedTags.length < maxTags"
			@focus="optionsVisible = true"
			placeholder="Add tags"
			type="text">
		<span
			class="multiselect__tags-counter"
			:class="{'multiselect__tags-counter--active': selectedTags.length === maxTags}"
		>
			{{selectedTags.length}}/{{maxTags}}
		</span>
		<div class="multiselect__options-wrapper" v-if="optionsVisible">
			<ul class="multiselect__options">
				<li class="multiselect__option" v-for="tag in filteredTags">
					<button class="multiselect__option-btn" @click.stop="addTag(tag)">{{tag}}</button>
				</li>
			</ul>
		</div>
	</div>
	<span class="multiselect__error" v-if="errorMessage">{{errorMessage}}</span>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";

const optionsVisible = ref(false)
const inputValue = ref('')
const maxTags = ref(4)

const filteredTags = computed(() => {
    const exception = props.tags.filter(el => !props.selectedTags.includes(el))
    return exception.filter(el => el.includes(inputValue.value))
})

function addTag(tag) {
    if (props.selectedTags.length < maxTags.value) {
        emit('add-tag', tag)
    }
		optionsVisible.value = false
		inputValue.value = ''
}

const props = defineProps({
		selectedTags: Array,
		tags: Array,
})
const emit = defineEmits(['add-tag', 'remove-tag'])

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