<template>
  <footer>
    <div class="adaptContainer">
      <div class="footer-top" data-aos="fade-up">
        <p class="heading-3">Subscribe to our newsletter <br> for latest updates</p>
        <div class="email-input" data-aos="fade-up" data-aos-delay="100">
          <img src="@/assets/img/Message.png" alt="" class="input-icon" />
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">
            <img src="@/assets/img/Sendinpt.png" alt="" />
          </button>
        </div>
      </div>
      <div class="footer-botom">
        <div class="left">
          <!-- логотип компании -->
          <router-link to="/">
            <div class="logo" data-aos="zoom-in-right" data-aos-delay="200">
              <div class="shapes">
                <div class="shape blue"></div>
                <div class="shape purple"></div>
              </div>
              <div class="CompanyName">
                <p>VRNas</p>
              </div>
            </div>
          </router-link>
          <!-- социальные сети, логотипы -->
          <div class="social" data-aos="fade-up" data-aos-delay="300">
            <a href="https://www.example.com" target="_blank"><img src="@/assets/img/social.png" alt="" /></a>
            <a href="https://www.example.com" target="_blank"><img src="@/assets/img/social1.png" alt="" /></a>
            <a href="https://www.example.com" target="_blank"><img src="@/assets/img/social2.png" alt="" /></a>
            <a href="https://www.example.com" target="_blank"><img src="@/assets/img/social3.png" alt="" /></a>
          </div>
        </div>
        <div class="right">
          <div class="quicklinks" data-aos="fade-up" data-aos-delay="400">

            <p class="heading-10">Quicklinks</p>
            <router-link to="/Ourteam">
              <p class="custom-text">Our Team</p>
            </router-link>
            <router-link to="/">
              <p class="custom-text">Home</p>
            </router-link>

            <router-link to="/PricingPlan">
              <p class="custom-text">Pricing Plan</p>
            </router-link>

            <router-link to="/OurService">
              <p class="custom-text">Service</p>
            </router-link>

            <router-link to="/Blog">
              <p class="custom-text">Blog</p>
            </router-link>
          </div>

          <div class="support" data-aos="fade-up" data-aos-delay="500">

            <p class="heading-10">Support</p>

            <router-link to="/About">
              <p class="custom-text">About us</p>
            </router-link>
            <router-link to=" /Contactus">
              <p class="custom-text">Contact us</p>
            </router-link>

            <p class="custom-text">FAQ</p>

            <p class="custom-text">Tems & Conditions</p>

            <p class="custom-text">Privacy Policy</p>

          </div>

          <div class="help" data-aos="fade-up" data-aos-delay="600">
            <p class="heading-10">Need Help?</p>
            <a href="https://www.google.ru/maps/@-0.022861,109.3290922,182m/data=!3m1!1e3?hl=ru&entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank">
              <p class="custom-text"> <img src="@/assets/img/help.png" alt="" /> Tanjung Sari Street no.48, Pontianak
                City
              </p>
            </a>

            <a href="mailto:Support@VRNas.com" target="_blank">
              <p class="custom-text"> <img src="@/assets/img/help1.png" alt="" /> Support@VRNas.com</p>
            </a>

            <a href="tel:+123 456 7890" target="_blank">
              <p class="custom-text"> <img src="@/assets/img/help2.png" alt="" /> +123 456 7890</p>
            </a>
          </div>
        </div>
      </div>
      <p class="body-1" data-aos="fade-up" data-aos-delay="700">© Copyright 2023, All Rights Reserved</p>
    </div>
  </footer>
</template>

<style scoped>
/* верхняя часть футера */
.footer-top {
  margin-top: 183px;
  max-width: 1200px;
  height: 185px;
  background: var(--linear);
  margin-bottom: 182px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 74px;
}

.heading-3 {
  color: var(--White);
  margin: 0;
}

/* Импут */
.email-input {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.07);
  padding-left: 14px;
  width: 365px;
  height: 56px;
}

.email-input input {
  flex: 1;
  border: none;
  padding: 14px 84px 14px 8px;
  color: var(--White);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  background: none;
  outline: none;
}

.email-input input::placeholder {
  color: var(--White);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}

.email-input button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.21);
  width: 50px;
  height: 100%;
}

.email-input:focus-within {
  border: 2px solid;
  animation: borderAnimation 2s infinite alternate;
  border-image-source: var(--linear);
  border-image-slice: 1;
}

/* нижняя часть футера */
.footer-botom {
  max-width: 1200px;
  display: flex;
  border-bottom: 1px solid;
  border-image-source: var(--linear);
  border-image-slice: 1;
  padding-bottom: 33px;
}

.left {
  width: 430px;
}

/* логотип */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* фигуры */
.shapes {
  position: relative;
  width: 27px;
  height: 38px;
  perspective: 100px;
}

.shape {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: skew(-20deg) rotateY(-20deg) rotateX(30deg);
}

.shape.blue {
  background-color: var(--Purple);
  border: 2px solid var(--Black100);
}

.shape.purple {
  background-color: var(--Blue);
  transform: skew(-20deg) rotateY(-20deg) rotateX(30deg) translate(-20px, -20px);
  border: 2px solid var(--Black100);
}

.CompanyName {
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  display: flex;
}

/* логотипы */
.social {
  margin-top: 139px;
  display: flex;
  gap: 20px;
}

/* правая часть */
.right {
  display: grid;
  grid-template-columns: 85px 132px 319px;
  grid-column-gap: 149px;
  grid-template-columns: 85px 132px 319px;
  grid-gap: 0px 86px;
}

.quicklinks {
  grid-column: 1;
}

.support {
  grid-column: 2;
}

.help {
  grid-column: 3;
}

/* стили текста */
.heading-10 {
  color: var(--White);
}

.custom-text {
  color: var(--White);
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
}

.right p {
  padding-bottom: 16px;
  white-space: nowrap;
}

.help img {
  margin-right: 8px;
}

.body-1 {
  margin-top: 32px;
  color: var(--White);
  display: flex;
  justify-content: center;
  margin-bottom: 47px;
}

@media (max-width: 1250px) {
  .adaptContainer {
    width: 90%;
    margin: 0 auto;
  }
}

@media (max-width: 1000px) {
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-top {
    flex-direction: column;
    border-radius: 12px;
    padding-bottom: 10px;
    height: auto;
    padding: 20px;
  }

  .heading-3 {
    text-align: center;
  }

  .email-input {
    width: 100%;
    margin-top: 20px;
  }

  .footer-botom {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .left {
    width: 100%;
    margin-bottom: 20px;
  }

  .social {
    margin-top: 20px;
    justify-content: center;
  }

  .right {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }

  .quicklinks,
  .support,
  .help {
    grid-column: 1;
  }
}

@media (max-width: 450px) {
  .left {
    display: block;
  }

  .email-input {
    padding: 0;
  }

  .email-input input {
    padding: 14px 8px;
  }

  .footer-top {
    padding: 10px;
  }

  .footer-botom {
    padding-bottom: 20px;
  }

  .body-1 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>

<script setup>
</script>