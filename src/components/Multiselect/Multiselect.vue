<template>
	<VueMultiselect
		v-model="selectedTags"
		:options="tags"
		:searchable="true"
		:multiple="true"
		:hide-selected="true"
		@keypress.enter="addTag"
		placeholder="Tags"
	>
		<template #noResult>
			Oops! No elements found.
		</template>
	</VueMultiselect>
</template>

<script setup>
import VueMultiselect from "vue-multiselect";
import {ref} from "vue";

const props = defineProps({
		selectedTags: Array,
		tags: Array,
})

const selectedTags = ref(props.selectedTags)

function addTag(newTag) {
    const tag = {
        name: newTag,
    }
    props.selectedTags.push(tag)
    props.tags.push(tag)
}
</script>

<style scoped>
@import url('vue-multiselect/dist/vue-multiselect.css');
@import url('@/components/Multiselect/multiselect.css');
</style>