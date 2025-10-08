<template>
    <section>
        <div class="image1">
            <img src="@/assets/img/imageman.png" alt="">
        </div>
        <div class="image2">
            <img src="@/assets/img/imageman.png" alt="">
        </div>


        <div class="title">
            <p class="caption-1">Tems & Conditions</p>
            <p class="heading-2">Terms and Conditions</p>
            <p class="body-1">Welcome to VRNas. Please read these Terms and Conditions carefully before using our
                website and
                services.</p>
        </div>
        <div class="content">
            <p class="heading-8">Information We Collect</p>
            <p class="body-1">We may collect the following types of personal information:</p>
            <ul class="body-1">
                <li>Name, email address, and other contact information.</li>
                <li>Demographic information such as age, gender, and location.</li>
                <li>Payment information such as credit card details.</li>
                <li>Information about how you use our website and services.</li>
            </ul>
            <p class="heading-8">How We Use Your Information</p>
            <p class="body-1">We may use your personal information for the following purposes:</p>
            <ul class="body-1">
                <li>To provide you with our services and products.</li>
                <li>To process payments and fulfill orders.</li>
                <li>To send you marketing and promotional materials.</li>
                <li>To improve our website and services.</li>
            </ul>
            <p class="heading-8">How We Protect Your Information</p>
            <p class="body-1">We implement a variety of security measures to maintain the safety of your personal
                information when you
                place an order or enter, submit, or access your personal information. We use encryption to protect
                sensitive information transmitted online, and we also protect your information offline.</p>
            <p class="heading-8">Information Sharing</p>
            <p class="body-1">We do not sell or rent your personal information to third parties. However, we may share
                your information with our trusted third-party service providers who assist us in operating our website
                and services.</p>
            <p class="heading-8">Cookies and Tracking</p>
            <p class="body-1">We use cookies and other tracking technologies to collect information about your browsing
                behavior and preferences. This information is used to personalize your experience on our website and to
                analyze how visitors use our website.</p>
            <p class="heading-8">Your Rights</p>
            <p class="body-1">You have the right to access, update, or delete your personal information. You can contact
                us using the information provided on our contact page to exercise these rights.</p>
            <p class="heading-8">Changes to Privacy Policy</p>
            <p class="body-1">We reserve the right to update this Privacy Policy at any time. We will notify you of any
                changes by posting the new Privacy Policy on our website.</p>
            <p class="heading-8">Contact Us</p>
            <p class="body-1">If you have any questions about our Privacy Policy, please contact us using the
                information provided on our contact page.</p>
        </div>

    </section>
</template>
<style scoped>
.title {
    margin: auto auto 16px auto;
    max-width: 623px;
    text-align: center;
}

.caption-1 {
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    /* Для поддержки в Safari */
    color: transparent;
    display: inline-block;
    width: fit-content;
    margin-bottom: 12px;
}

.heading-2 {
    color: var(--White);
    margin-bottom: 24px;
}

.heading-8 {
    color: var(--White);
    margin-bottom: 16px;
    margin-top: 32px;
}

.body-1 {
    color: var(--Grey2);
}

.content {
    max-width: 788px;
    margin: 0 auto;
}

li {
    list-style-type: disc;
}




.image1,
.image2 {
    position: absolute;
}

.image1 img,
.image2 img {
    width: 360px;

}

.image1 {
    transform: scaleX(-1);
    left: 0;
}

.image2 {
    right: 0;
}
</style>