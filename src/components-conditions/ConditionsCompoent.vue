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
            <p class="heading-8">Acceptance of Term</p>
            <p class="body-1">By accessing or using any part of our website or services, you agree to be bound by
                these Terms and
                Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not
                access the website or use any services.</p>
            <p class="heading-8">Use of Website and Services</p>
            <p class="body-1">You may use our website and services solely for lawful purposes and in accordance with
                these Terms
                and Conditions. You agree not to use our website or services:</p>
            <ul>
                <li class="body-1">In any way that violates any applicable federal, state, local or international law or
                    regulation.</li>
                <li class="body-1">To transmit, or procure the sending of, any advertising or promotional material,
                    including any "junk
                    mail", "chain letter" or "spam" or any other similar solicitation.</li>
                <li class="body-1">To impersonate or attempt to impersonate [Company Name], a [Company Name] employee,
                    another user or
                    any other person or entity.</li>
                <li class="body-1">To engage in any other conduct that restricts or inhibits anyone's use or enjoyment
                    of
                    the website or
                    services, or which, as determined by us, may harm [Company Name] or users of the website or services
                    or expose them to liability.</li>
            </ul>
            <p class="heading-8">Intellectual Property</p>
            <p class="body-1">The content and materials available on our website and services, including but not
                limited to text,
                graphics, logos, images, and software, are the property of [Company Name] or its licensors and are
                protected by copyright, trademark, and other intellectual property laws.
                You may not use any of our content or materials for commercial purposes without obtaining a license
                to do so from [Company Name] or its licensors.</p>
            <p class="heading-8">Limitation of Liability</p>
            <p class="body-1">In no event shall [Company Name] be liable for any direct, indirect, incidental,
                consequential,
                special, or exemplary damages arising out of or in connection with your use of our website or
                services.</p>
            <p class="heading-8">Changes to Terms and Conditions</p>
            <p class="body-1">We reserve the right, at our sole discretion, to modify or replace these Terms and
                Conditions at any
                time. By continuing to access or use our website and services after any revisions become effective,
                you agree to be bound by the revised terms.</p>
            <p class="heading-8">Contact Us</p>
            <p class="body-1">If you have any questions about these Terms and Conditions, please contact us using
                the information
                provided on our contact page.</p>
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