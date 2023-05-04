<template>
  <TheNavbar
    @switch-sidebar="sidebarVisible = !sidebarVisible"
    @show-login-modal="loginModalVisible = true"
    @switch-dropdown-avatar="dropdownAvatar = !dropdownAvatar"
    @switch-dropdown-search="dropdownSearch = !dropdownSearch"
    :dropdownAvatar="dropdownAvatar"
    :dropdownSearch="dropdownSearch"
  ></TheNavbar>
  <TheSidebar v-if="sidebarVisible"></TheSidebar>

  <router-view/>

  <teleport to="body">
    <LoginModal
      v-if="loginModalVisible"
      @close-modal="loginModalVisible = false"
      @switch-modal="switchModal"
    ></LoginModal>
  </teleport>

  <teleport to="body">
    <RegisterModal
      v-if="registerModalVisible"
      @close-modal="registerModalVisible = false"
      @switch-modal="switchModal"
    ></RegisterModal>
  </teleport>
</template>

<script setup>
import TheNavbar from "@/components/Navigation/TheNavbar.vue";
import TheSidebar from "@/components/Navigation/TheSidebar.vue";
import {onMounted, ref} from "vue";
import LoginModal from "@/components/Modal/LoginModal.vue";
import RegisterModal from "@/components/Modal/RegisterModal.vue";

const sidebarVisible = ref(true)
const loginModalVisible = ref(false)
const registerModalVisible = ref(false)
const dropdownAvatar = ref(false)
const dropdownSearch = ref(false)

function switchModal() {
  loginModalVisible.value = !loginModalVisible.value
  registerModalVisible.value = !registerModalVisible.value
}

onMounted(() => {
  document.body.onclick = function () {
    if (dropdownAvatar.value) dropdownAvatar.value = false
    if (dropdownSearch.value) dropdownSearch.value = false
  }
})
</script>

<style lang="scss">

</style>
