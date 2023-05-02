<template>
  <TheNavbar
    @switch-sidebar="sidebarVisible = !sidebarVisible"
    @show-login-modal="loginModalVisible = true"
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
import TheNavbar from "@/components/TheNavbar.vue";
import TheSidebar from "@/components/TheSidebar.vue";
import {ref} from "vue";
import LoginModal from "@/components/LoginModal.vue";
import RegisterModal from "@/components/RegisterModal.vue";

const sidebarVisible = ref(true)
const loginModalVisible = ref(false)
const registerModalVisible = ref(false)

function switchModal() {
  loginModalVisible.value = !loginModalVisible.value
  registerModalVisible.value = !registerModalVisible.value
}
</script>

<style lang="scss">

</style>
