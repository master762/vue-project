<template>
    <section>
        <div class="input-container" data-aos="fade-up">
            <p class="caption-1" data-aos="fade-left">CONTACT US</p>
            <p class="heading-2" data-aos="fade-left" data-aos-delay="200">Get in Touch</p>
            <p class="body-1" data-aos="fade-left" data-aos-delay="400">At VRNas, we're always happy to hear from our
                clients and potential clients. Whether you have a question about our VR services, want to discuss a
                potential project, or just want to say hello, we're here to help.</p>

            <div class="input-group" data-aos="fade-right">
                <div class="input-wrapper">
                    <input type="text" v-model="firstName" id="firstName" required />
                    <label for="firstName" class="user-label">First Name</label>
                </div>
                <div class="input-wrapper">
                    <input type="text" v-model="lastName" id="lastName" required />
                    <label for="lastName" class="user-label">Last Name</label>
                </div>
            </div>
            <div class="input-group" data-aos="fade-right">
                <div class="input-wrapper">
                    <input type="email" v-model="email" id="email" required />
                    <label for="email" class="user-label">Email</label>
                </div>
                <div class="input-wrapper">
                    <input type="tel" v-model="phone" id="phone" required />
                    <label for="phone" class="user-label">Phone Number</label>
                </div>
            </div>
            <textarea placeholder="Message" v-model="message" data-aos="fade-up"></textarea>

            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
        <div class="btn" data-aos="zoom-in">
            <button @click="send"><span class="button-1">SEND</span></button>
        </div>
    </section>
</template>

<style scoped>
.input-container {
    width: 645px;
    margin: 0 auto;
}

.caption-1 {
    margin-bottom: 12px;
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
}

.heading-2 {
    color: var(--White);
    margin-bottom: 15px;
}

.body-1 {
    color: var(--Grey2);
    margin-bottom: 32px;
}

.input-group {
    display: flex;
    gap: 33px;
    margin-bottom: 24px;
}

.input-wrapper {
    position: relative;
    width: 100%;
}

input,
textarea {
    max-width: 630px;
    width: 100%;
    padding: 11px 0 11px 15px;
    background: rgba(37, 37, 50, 0.6);
    border: 1px solid #2e2e32;
    border-radius: 4px;
    color: var(--White);
    outline: none;
}

input {
    height: 28px;
}

textarea {
    height: 126px;
    resize: none;
}

.user-label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--Grey2);
    pointer-events: none;
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

input:focus~.user-label,
input:valid~.user-label {
    transform: translateY(-140%) scale(0.8);
    padding: 0 0.2em;
    color: #f3219c;
}

button {
    max-width: 198px;
    width: 100%;
    height: 50px;
    background: var(--linear);
    background-size: 200%;
    animation: gradient 3s linear infinite;
}

.btn {
    display: flex;
    justify-content: center;
    margin-top: 32px;
}

.button-1 {
    color: var(--White);
}
</style>

<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const send = () => {
    console.log({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    });
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
};
</script>