<template>
    <section>
        <!-- заголовок -->
        <div class="title" data-aos="fade-up" data-aos-duration="1000">
            <router-link to="/">
                <p class="heading-10">Home</p>
            </router-link>
            <img class="transform" src="@/assets/img/arrow.png" alt="">
            <router-link to="/Blog">
                <p class="heading-10">Blog</p>
            </router-link>
            <img class="transform" src="@/assets/img/arrow.png" alt="">
            <p class="body-3">Bringing Designs to Life: How VR is Changing Architecture</p>
        </div>

        <div class="content">
            <div class="left" data-aos="fade-right" data-aos-duration="1000">
                <p class="caption-2">VR Architecture</p>
                <p class="heading-3">Bringing Designs to Life: How VR is Changing Architecture</p>
                <p class="caption-1">NASYIYA ULFA | 25 NOV 2022</p>
                <img class="mg" src="@/assets/img/Dblog.png" alt="">
                <p class="body-1">Architecture is an art and science that is constantly evolving with technology. The
                    industry has gone through various transformations over the years, from pencil and paper sketches to
                    computer-aided design (CAD) software. However, one technology that is revolutionizing architecture
                    is virtual reality (VR) design.</p>
                <p class="body-1">With VR design, architects can bring their designs to life and offer clients an
                    immersive experience that was previously impossible. The technology enables architects to create a
                    virtual representation of their designs, allowing clients to step into the building and explore its
                    features and spaces before it is built.</p>
                <p class="body-1">VR design is a game-changer for architects and clients alike. It enables architects to
                    design with a greater level of detail and precision, allowing them to identify design flaws and make
                    necessary modifications before construction begins. This not only saves time and money but also
                    ensures that the final product meets the client's expectations.</p>
                <p class="body-1">Clients can also benefit from VR design by having a better understanding of the design
                    and how it will look and feel in real life. It allows them to experience the design in a more
                    realistic way, helping them make informed decisions and providing valuable feedback to the
                    architects.</p>
                <p class="body-1">Moreover, VR design is not only limited to the design phase. It can also be used in
                    the construction process to visualize the project's progress and identify any issues that may arise.
                </p>
                <div class="img-container">
                    <img src="@/assets/img/blog5.png" alt="">
                    <img src="@/assets/img/blog8.png" alt="">
                </div>
                <p class="body-1">The benefits of VR design in architecture are clear, and the technology is becoming
                    increasingly accessible and affordable. More and more architects and firms are incorporating VR
                    design into their workflows, and the industry is poised for a major transformation.</p>
                <p class="body-1">In conclusion, VR design is changing the way architects design and bring their
                    projects to life. It is a powerful tool that offers a range of benefits, from increased precision
                    and efficiency in the design phase to better communication and understanding with clients. As the
                    technology becomes more advanced and widespread, we can expect to see more innovative designs and
                    better-designed buildings in the future.</p>

                <p class="heading-10">Post Tags :</p>

                <p class="custom-txt">#VRDesign #ArchitectureInnovation #VirtualRealityArchitecture
                    #BringingDesignsToLife #DesignVisualization #ArchitecturalVisualization #RevolutionizingArchitecture
                    #BuildingInVR #DesignThinking #VRInArchitecture</p>


                <p class="heading-10">Share :</p>

                <div class="share" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <a href=""><img src="@/assets/img/twitter.png" alt=""></a>
                    <a href=""><img src="@/assets/img/facebook.png" alt=""></a>
                    <a href=""><img src="@/assets/img/inst.png" alt=""></a>
                </div>
            </div>

            <div class="right" data-aos="fade-left" data-aos-duration="1000">
                <div class="items">
                    <p class="heading-8">Recent Article</p>

                    <div class="item" data-aos="fade-up" data-aos-duration="1000">
                        <img src="@/assets/img/blog8.png" alt="">
                        <div class="text">
                            <p class="caption-3">VR Education</p>
                            <p class="body-4">The Future of Education: How VR is Revolutionizing the Classroom</p>
                        </div>
                    </div>

                    <div class="item" data-aos="fade-up" data-aos-duration="1000">
                        <img src="@/assets/img/Dblog.png" alt="">
                        <div class="text">
                            <p class="caption-3">VR Architecture</p>
                            <p class="body-4">Bringing Designs to Life: How VR is Changing Architecture</p>
                        </div>
                    </div>

                    <div class="item" data-aos="fade-up" data-aos-duration="1000">
                        <img src="@/assets/img/blog2.png" alt="">
                        <div class="text">
                            <p class="caption-3">VR Entertainment </p>
                            <p class="body-4">Making Events Memorable: The Power of VR for Corporate and Special
                                Occasions</p>
                        </div>
                    </div>

                    <div class="item" data-aos="fade-up" data-aos-duration="1000">
                        <img src="@/assets/img/blog3.png" alt="">
                        <div class="text">
                            <p class="caption-3">VR Event</p>
                            <p class="body-4">Exploring New Worlds: The Benefits of VR Travel</p>
                        </div>
                    </div>
                </div>

                <p class="heading-8">Popular Hashtag</p>

                <div class="hashtag" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <p class="hashtag-txt">#VRDesign</p>
                    <p class="hashtag-txt">#ArchitectureInnovation </p>
                    <p class="hashtag-txt">#DesignThinking</p>
                    <p class="hashtag-txt">#VirtualRealityArchitecture </p>
                    <p class="hashtag-txt">#BringingDesignsToLife </p>
                    <p class="hashtag-txt">#DesignVisualization </p>
                    <p class="hashtag-txt">#ArchitecturalVisualization </p>
                    <p class="hashtag-txt">#RevolutionizingArchitecture </p>
                    <p class="hashtag-txt">#BuildingInVR </p>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
/* текст */
.body-4 {
    color: var(--White);
}

.caption-3 {
    color: var(--White);
    padding: 1.4px 7.2px;
    margin-bottom: 5.7px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 11.5px;
    width: fit-content;

}

.heading-8 {
    color: var(--White);

}

.hashtag-txt {
    color: var(--White);
    padding: 1.4px 7.2px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 11.5px;
    width: fit-content;
}

.custom-txt {
    margin-top: 12px;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    /* Для поддержки в Safari */
    color: transparent;
    display: inline-block;
    margin-bottom: 17px;
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    letter-spacing: 0%;
}

.heading-10 {
    color: var(--White);
}

.body-3 {
    color: var(--Grey2);

}

.title {
    display: flex;
    gap: 4px;
    align-items: center;
}

.transform {
    transform: rotate(270deg);
}

.caption-2 {
    color: var(--White);
    padding: 2px 10px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    width: fit-content;
    margin-top: 52.6px;
    margin-bottom: 12px;
}

.heading-3 {
    color: var(--White);
    margin-bottom: 12px;
}

.caption-1 {
    background-image: var(--linear);
    background-clip: text;
    -webkit-background-clip: text;
    /* Для поддержки в Safari */
    color: transparent;
    display: inline-block;
    margin-bottom: 24px;
}



.body-1 {
    color: var(--Grey2);
    margin-bottom: 24px;
}

.mg {
    margin-bottom: 30px;
}

/* для обеих частей */
.content {
    display: grid;
    grid-template-columns: 0.704fr 0.296fr;
    gap: 76px;
    max-width: 1200px;
}

/* левая часть */
.left {
    grid-column: 1;
}

.img-container {
    margin-top: 56px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
}

.share {
    display: flex;
    align-items: center;
    margin-top: 12px;
    gap: 24px;
}



/* правая часть */
.right {
    grid-column: 2;
}

.item {
    display: flex;
    gap: 15px;
    padding-bottom: 24px;
    border-bottom: 0.72px solid rgba(255, 255, 255, 0.15);
    margin-top: 24px;

}

.item img {
    width: 102px;
    height: 65px;
}

.items {
    margin-bottom: 64px;
}

.hashtag {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
</style>