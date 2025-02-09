<template>
  <section>
    <!-- Заголовки -->
    <p class="caption-1" data-aos="fade-up">OUR PRICING</p>
    <p class="heading-2" data-aos="fade-up" data-aos-delay="200">Affordable VR Services for Everyone</p>
    <p class="body-1" data-aos="fade-up" data-aos-delay="400">
      At VRNas, we believe that everyone should have access to the benefits of VR. That's
      <br />
      why we offer a range of pricing options to meet the needs of any budget.
    </p>
    <div class="components" data-aos="fade-in" data-aos-duration="1500">
      <div class="bacground">
        <img class="man" src="@/assets/img/Image7.png" alt="background image" data-aos="zoom-in" data-aos-delay="800" />
        <div class="text">
          <!-- Основной текст -->
          <div class="imageandtextblock" data-aos="fade-right" data-aos-delay="200">
            <img src="@/assets/img/IconCloud.png" alt="icon" />
            <div>
              <p class="heading-9">Customizable Packages</p>
              <p class="body-3">
                We understand that each project is unique, so we offer customizable
                packages to ensure that you get the services you need at a price that works
                for you.
              </p>
            </div>
          </div>
          <div class="imageandtextblock" data-aos="fade-right" data-aos-delay="400">
            <img src="@/assets/img/IconCloud.png" alt="icon" />
            <div>
              <p class="heading-9">Flexible Payment Options</p>
              <p class="body-3">
                We offer flexible payment options to make it easy for you to get started
                with our services.
              </p>
            </div>
          </div>
          <div class="imageandtextblock" data-aos="fade-right" data-aos-delay="600">
            <img src="@/assets/img/IconCloud.png" alt="icon" />
            <div>
              <p class="heading-9">Satisfaction Guarantee</p>
              <p class="body-3">
                We stand behind our services and are committed to ensuring that you are
                completely satisfied with the final product.
              </p>
            </div>
          </div>

          <img class="light" src="@/assets/img/Light6.png" alt="" data-aos="zoom-in" data-aos-delay="800" />
          <!-- Блок с ценой -->
          <div class="priceblock" data-aos="flip-up" data-aos-delay="1000">
            <div class="priceelements">
              <p class="caption-2">Start from</p>
              <p class="customtext">$99</p>
              <button>
                <span class="button-1">get started</span>
              </button>
              <p class="body-4">30 Days Moneyback Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* шрифты */
.body-4 {
  color: var(--Grey1);
}

.button-1 {
  color: var(--White);
}

.caption-2 {
  color: var(--Grey2);
  padding-top: 20px;
}

.customtext {
  color: var(--White);
  font-size: 60px;
  font-weight: 600;
  line-height: 66px;
  padding-bottom: 14px;
}

.caption-1 {
  margin-top: 100px;
  margin-bottom: 12px;
  background-image: var(--linear);
  background-clip: text;
  -webkit-background-clip: text;
  /* Для поддержки в Safari */
  color: transparent;
  display: inline-block;
}

.heading-2 {
  color: var(--White);
  margin-bottom: 16px;
}

.body-1 {
  color: var(--Grey2);
  margin-bottom: 40px;
}

.body-3 {
  color: var(--Grey1);
}

.heading-9 {
  color: var(--White);
  margin-bottom: 12px;
}

/* стили */
.bacground {
  background-color: rgba(37, 37, 50, 0.81);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-image: linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1;
  width: 100%;
  height: 587px;
}

/* позиционирование */
.components {
  display: flex;
  margin-bottom: 198px;
}

.imageandtextblock {
  display: flex;
  align-items: flex-start;
  width: 640px;
  padding: 0 0 32px 42px;

}

.imageandtextblock:nth-child(1) {
  padding-top: 55px;
  padding-bottom: 32px;
}

.imageandtextblock img {
  margin-right: 16px;
}

.text {
  position: relative;
}

.text::before {
  content: "";
  position: absolute;
  top: 41px;
  left: 800px;
  width: 1px;
  height: 447px;
  background-color: var(--White);
  opacity: 10%;
}

.priceblock {
  position: absolute;
  top: 413px;
  right: 172px;
  background-color: var(--Black50);
  width: 321px;
  height: 222px;
  border: 1px solid;
  border-image-source: var(--linear);
  border-image-slice: 1;
}

.priceelements {
  text-align: center;
}

.light {
  z-index: -1;
  position: absolute;
  top: -60px;
  right: 0;
}

.man {

  position: absolute;
  bottom: 0;
  right: 0;
}


button {
  background: var(--linear);
  width: 182px;
  height: 50px;
  margin-bottom: 14px;
  background-size: 200%;
  animation: gradient 3s linear infinite;
}

section {
  overflow-x: clip;
}

@media(max-width:1250px) {
  .man {
    display: none;
  }

  section {
    width: 90%;
    margin: 0 auto;
  }

}


@media (max-width: 800px) {
  .imageandtextblock {
    display: flex;
    align-items: flex-start;
    width: 75%;
  }

  .bacground {
    height: fit-content;
  }

  .priceblock {
    top: 100%;
    right: 25%;
  }

  .imageandtextblock:nth-child(3) {
    margin-bottom: 100px;
  }
}

@media (max-width: 500px) {
  .priceblock {
    top: 100%;
    left: 0;
  }
}

@media (max-width: 430px) {}
</style>

<script setup>

</script>