<template>
  <div class="bg-modal" @click.stop="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="modal__header">
        <h3 class="modal__header-title">Log in</h3>
	      <button class="modal__header-close-btn" @click="$emit('close-modal')">
		      <i class="modal__header-close-icon fa-solid fa-xmark"></i>
        </button>
      </div>
	    <hr class="modal__header-delimiter">

	    <form  class="modal__form" @submit.prevent="onSubmit">
		    <div class="modal__form-control">
			    <input
				    class="modal__form-input"
				    :class="{'modal__form-input--invalid': !!loginError}"
				    v-model="login"
				    type="text"
				    placeholder="Username or email address">
			    <span v-if="loginError" class="modal__form-error">{{loginError}}</span>
		    </div>
		    <div class="modal__form-control">
			    <input
				    class="modal__form-input"
				    :class="{'modal__form-input--invalid': !!passwordError}"
				    v-model="password"
				    type="password"
				    placeholder="Password">
			    <span v-if="passwordError" class="modal__form-error">{{passwordError}}</span>
		    </div>
	      <button class="modal__button">Log in</button>
	    </form>

      <p class="modal__footer">Don't have an account?
        <button class="modal__footer-btn" @click="$emit('switch-modal')">Sign Up</button>
      </p>
    </div>
  </div>
</template>

<script setup>
import {useField} from "vee-validate";
import * as yup from "yup"
import {ref} from "vue";
import {useStore} from "vuex";

const store = useStore()

const login = ref('')
const loginError = ref('')
const password = ref('')
const passwordError = ref('')

function checkLogin() {
    if (login.value.length < store.getters.getLoginMinLength) {
        loginError.value = `Недостаточно символов, минимум ${store.getters.getLoginMinLength}`
    } else if (login.value.includes('@')) {
        if (!validateEmail()) loginError.value = 'Некорректный email'
		    else loginError.value = ''
    } else {
        loginError.value = ''
    }
}

function checkPassword() {
    if (password.value.length < store.getters.getPasswordMinLength) {
        passwordError.value = `Недостаточно символов, минимум ${store.getters.getPasswordMinLength}`
    } else {
        passwordError.value = ''
    }
}

function validateEmail() {
    const re = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i)
		return re.test(login.value)
}

function onSubmit() {
		checkLogin()
    checkPassword()
    if (!loginError.value && !passwordError.value) {
        const data = {
            login: login.value,
		        password: password.value
        }
        console.log(data)
    }
}

// const {value: login, errorMessage: loginError} = useField(
//     'username or email',
// 		yup
// 				.string()
// 				.trim()
// 				.required()
// 				.email()
// )
// const {value: password, errorMessage: passwordError} = useField('password')
</script>

<style scoped>

</style>