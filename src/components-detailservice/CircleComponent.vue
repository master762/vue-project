<template>
    <section data-aos="fade" data-aos-delay="300">
        <div class="center" data-aos="fade-up">
            <p class="caption-1">OUR TRUSTED PARTNERS</p>
            <p class="heading-2">Discover the Companies We Work With</p>
        </div>

        <div class="ellipses-container">
            <div class="ellipse ellipse-1">
                <div v-for="content in vrContentsArr" :key="content.id" class="company"
                    @click="selectedContent = content" :class="{ active: selectedContent.id === content.id }">
                    <p class="heading-12">{{ content.title }}</p>

                </div>
            </div>

            <div class="ellipse ellipse-2"></div>
            <div class="ellipse ellipse-3"></div>
            <div class="ellipse ellipse-4"></div>
            <div class="ellipse ellipse-5"></div>

            <div class="child">
                <ChildComponent :content="selectedContent" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './CriccleChild.vue';



const vrContents = {

    Development: {
        title: 'VR Development',
        bodyTop1: 'Our VR development services focus on building immersive applications for training, simulation, and entertainment. We help businesses leverage virtual reality to enhance engagement and efficiency.',
        bodyTop2: 'By integrating cutting-edge technology and innovative design, we create VR applications tailored to industry-specific needs, ensuring seamless user experiences.',
        backgroundTitle: 'Our VR development services include:',
        services: [
            'Custom VR application development',
            'VR software integration with existing systems',
            'Cross-platform VR deployment',
            'AR/VR mixed reality solutions',
            'VR data visualization and analysis',
            'Performance optimization and debugging'
        ],
        bodyBottom1: 'We work with various VR platforms and frameworks to develop solutions that meet the unique challenges of different industries, from healthcare to education and beyond.',
        bodyBottom2: 'If you’re looking for expert VR development, we’re ready to help bring your vision to reality with customized, scalable, and engaging virtual experiences.'
    },
    Games: {
        title: 'VR Games',
        bodyTop1: 'Our VR game development services focus on creating engaging and highly immersive experiences for players of all skill levels. We design unique worlds that push the boundaries of interactive entertainment.',
        bodyTop2: 'From concept to completion, we work with our clients to develop VR games that captivate audiences, combining stunning graphics, intuitive mechanics, and lifelike environments.',
        backgroundTitle: 'Our VR game services include:',
        services: [
            'Concept design and storytelling',
            '3D modeling and environment creation',
            'Realistic physics and mechanics development',
            'Multi-platform VR game deployment',
            'AI-driven enemy and NPC interactions',
            'Game testing and performance optimization'
        ],
        bodyBottom1: 'Our developers use advanced game engines and the latest VR technology to create smooth and highly interactive gaming experiences that transport players into virtual worlds.',
        bodyBottom2: 'Whether you need a fully developed game or just help with a specific aspect, we’re here to bring your VR gaming ideas to life. Let’s build the next big hit together.'
    },
    Events: {
        title: 'VR Events',
        bodyTop1: 'Our VR event services offer immersive experiences that transform ordinary gatherings into extraordinary digital engagements. Whether it’s a corporate event, conference, or concert, we bring virtual reality to life.',
        bodyTop2: 'We collaborate closely with clients to design custom VR events that maximize engagement and provide an unforgettablettableble experience for attendees, no matter where they are in the world.',
        backgroundTitle: 'Our VR event services include:',
        services: [
            'Virtual event planning and execution',
            'Live streaming in VR environments',
            '3D venue creation and customization',
            'Interactive audience engagement tools',
            'Real-time networking and communication',
            'Post-event analytics and insights'
        ],
        bodyBottom1: 'We leverage cutting-edge technology to create virtual events that feel just as real and interactive as in-person experiences. Our solutions ensure seamless integration with various platforms and devices.',
        bodyBottom2: 'Whether you want to host a VR trade show, a business summit, or a concert, our team is ready to turn your vision into reality. Contact us to start planning your immersive VR event today.'
    },

    Design: {
        title: 'VR Design',
        bodyTop1: 'At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.',
        bodyTop2: 'We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you’re looking to create a VR training program, a marketing campaign, or a game, we can help you bring your ideas to life.',
        backgroundTitle: 'Our VR design services include:',
        services: [
            'Concept development and ideation',
            'Storyboarding and scriptwriting',
            '3D modeling and animation',
            'User interface design and development',
            'Sound design and effects',
            'Quality assurance testing and optimization'
        ],
        bodyBottom1: 'We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.',
        bodyBottom2: 'At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.'
    },


    Consulting: {
        title: 'VR Consulting',
        bodyTop1: 'Our VR consulting services help businesses navigate the complex world of virtual reality, providing expert guidance on VR strategy, technology selection, and implementation.',
        bodyTop2: 'We work with companies of all sizes to develop tailored VR solutions that align with their business goals and enhance user engagement.',
        backgroundTitle: 'Our VR consulting services include:',
        services: [
            'VR strategy development and planning',
            'Technology and hardware recommendations',
            'User experience and interface design consulting',
            'VR training and implementation guidance',
            'Cost analysis and ROI evaluation',
            'Support and ongoing optimization'
        ],
        bodyBottom1: 'Our experienced consultants help businesses integrate VR solutions efficiently, ensuring they maximize their investment in virtual reality technology.',
        bodyBottom2: 'Whether you need help launching a VR product or optimizing an existing one, our team is here to provide expert advice and guidance. Let’s explore the potential of VR together.'
    },
    Entertainment: {
        title: 'VR Entertainment',
        bodyTop1: 'Our VR entertainment solutions provide users with unforgettable experiences, from virtual theme parks to interactive storytelling and cinematic adventures.',
        bodyTop2: 'We create engaging VR content that captivates audiences and enhances immersi on through high-quality visuals, sound, and interactive elements.',
        backgroundTitle: 'Our VR entertainment services include:',
        services: [
            'VR theme park and ride development',
            'Interactive storytelling and cinematic VR',
            'Live VR performances and concerts',
            'Virtual reality escape rooms',
            'Immersive brand experiences',
            'VR content production and distribution'
        ],
        bodyBottom1: 'Our team blends creativity with technology to design entertainment experiences that push the boundaries of digital storytelling and audience interaction.',
        bodyBottom2: 'Whether you’re looking to create a virtual attraction, a new interactive experience, or an entertainment-focused VR app, we can bring your ideas to life.'
    },
    Testimony: {
        title: 'VR Testimony',
        bodyTop1: 'VR testimony services use virtual reality to create realistic and immersive simulations for legal, educational, and investigative purposes.',
        bodyTop2: 'We help organizations utilize VR to enhance presentations, reconstructions, and storytelling in ways that traditional media cannot.',
        backgroundTitle: 'Our VR testimony services include:',
        services: [
            'Crime scene reconstruction',
            'Virtual courtroom simulations',
            'Immersive historical recreations',
            'VR-based training for legal professionals',
            'Interactive jury education tools',
            'Evidence visualization in VR'
        ],
        bodyBottom1: 'By leveraging VR, we enable legal teams, educators, and researchers to present information in a way that is both engaging and highly impactful.',
        bodyBottom2: 'If you need immersive VR solutions for legal, historical, or training purposes, we have the expertise to create effective and accurate virtual testimonies.'
    }
};


const vrContentsArr = [
    {
        id: 1,
        title: 'VR Development',
        bodyTop1: 'Our VR development services focus on building immersive applications for training, simulation, and entertainment. We help businesses leverage virtual reality to enhance engagement and efficiency.',
        bodyTop2: 'By integrating cutting-edge technology and innovative design, we create VR applications tailored to industry-specific needs, ensuring seamless user experiences.',
        backgroundTitle: 'Our VR development services include:',
        services: [
            'Custom VR application development',
            'VR software integration with existing systems',
            'Cross-platform VR deployment',
            'AR/VR mixed reality solutions',
            'VR data visualization and analysis',
            'Performance optimization and debugging'
        ],
        bodyBottom1: 'We work with various VR platforms and frameworks to develop solutions that meet the unique challenges of different industries, from healthcare to education and beyond.',
        bodyBottom2: 'If you’re looking for expert VR development, we’re ready to help bring your vision to reality with customized, scalable, and engaging virtual experiences.'
    },
    {
        id: 2,
        title: 'VR Games',
        bodyTop1: 'Our VR game development services focus on creating engaging and highly immersive experiences for players of all skill levels. We design unique worlds that push the boundaries of interactive entertainment.',
        bodyTop2: 'From concept to completion, we work with our clients to develop VR games that captivate audiences, combining stunning graphics, intuitive mechanics, and lifelike environments.',
        backgroundTitle: 'Our VR game services include:',
        services: [
            'Concept design and storytelling',
            '3D modeling and environment creation',
            'Realistic physics and mechanics development',
            'Multi-platform VR game deployment',
            'AI-driven enemy and NPC interactions',
            'Game testing and performance optimization'
        ],
        bodyBottom1: 'Our developers use advanced game engines and the latest VR technology to create smooth and highly interactive gaming experiences that transport players into virtual worlds.',
        bodyBottom2: 'Whether you need a fully developed game or just help with a specific aspect, we’re here to bring your VR gaming ideas to life. Let’s build the next big hit together.'
    },
    {
        id: 3,
        title: 'VR Events',
        bodyTop1: 'Our VR event services offer immersive experiences that transform ordinary gatherings into extraordinary digital engagements. Whether it’s a corporate event, conference, or concert, we bring virtual reality to life.',
        bodyTop2: 'We collaborate closely with clients to design custom VR events that maximize engagement and provide an unforgettable experience for attendees, no matter where they are in the world.',
        backgroundTitle: 'Our VR event services include:',
        services: [
            'Virtual event planning and execution',
            'Live streaming in VR environments',
            '3D venue creation and customization',
            'Interactive audience engagement tools',
            'Real-time networking and communication',
            'Post-event analytics and insights'
        ],
        bodyBottom1: 'We leverage cutting-edge technology to create virtual events that feel just as real and interactive as in-person experiences. Our solutions ensure seamless integration with various platforms and devices.',
        bodyBottom2: 'Whether you want to host a VR trade show, a business summit, or a concert, our team is ready to turn your vision into reality. Contact us to start planning your immersive VR event today.'
    },
    {
        id: 4,
        title: 'VR Design',
        bodyTop1: 'At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that transport your audience to a whole new world. Our team of experienced designers and developers work together to create VR experiences that are not only visually stunning but also interactive and user-friendly.',
        bodyTop2: 'We take a collaborative approach to our VR design process, working closely with you to understand your specific needs and goals. Whether you’re looking to create a VR training program, a marketing campaign, or a game, we can help you bring your ideas to life.',
        backgroundTitle: 'Our VR design services include:',
        services: [
            'Concept development and ideation',
            'Storyboarding and scriptwriting',
            '3D modeling and animation',
            'User interface design and development',
            'Sound design and effects',
            'Quality assurance testing and optimization'
        ],
        bodyBottom1: 'We use the latest VR technologies and software to create immersive experiences that are fully customized to your brand and message. We understand that every project is unique, and we work closely with you to ensure that we create a VR experience that perfectly matches your vision.',
        bodyBottom2: 'At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate, and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR design services.'
    },

    {
        id: 5,
        title: 'VR Consulting',
        bodyTop1: 'Our VR consulting services help businesses navigate the complex world of virtual reality, providing expert guidance on VR strategy, technology selection, and implementation.',
        bodyTop2: 'We work with companies of all sizes to develop tailored VR solutions that align with their business goals and enhance user engagement.',
        backgroundTitle: 'Our VR consulting services include:',
        services: [
            'VR strategy development and planning',
            'Technology and hardware recommendations',
            'User experience and interface design consulting',
            'VR training and implement ation guidance',
            'Cost analysis and ROI evaluation',
            'Support and ongoing optimization'
        ],
        bodyBottom1: 'Our experienced consultants help businesses integrate VR solutions efficiently, ensuring they maximize their investment in virtual reality technology.',
        bodyBottom2: 'Whether you need help launching a VR product or optimizing an existing one, our team is here to provide expert advice and guidance. Let’s explore the potential of VR together.'
    },

    {
        id: 6,
        title: 'VR Entertainment',
        bodyTop1: 'Our VR entertainment solutions provide users with unforgettable experiences, from virtual theme parks to interactive storytelling and cinematic adventures.',
        bodyTop2: 'We create engaging VR content that captivates audiences and enhances immersion through high-quality visuals, sound, and interactive elements.',
        backgroundTitle: 'Our VR entertainment services include:',
        services: [
            'VR theme park and ride development',
            'Interactive storytelling and cinematic VR',
            'Live VR performances and concerts',
            'Virtual reality escape rooms',
            'Immersive brand experiences',
            'VR content production and distribution'
        ],
        bodyBottom1: 'Our team blends creativity with technology to design entertainment experiences that push the boundaries of digital storytelling and audience interaction.',
        bodyBottom2: 'Whether you’re looking to create a virtual attraction, a new interactive experience, or an entertainment-focused VR app, we can bring your ideas to life.'
    },

    {
        id: 7,
        title: 'VR Testimony',
        bodyTop1: 'VR testimony services use virtual reality to create realistic and immersive simulations for legal, educational, and investigative purposes.',
        bodyTop2: 'We help organizations utilize VR to enhance presentations, reconstructions, and storytelling in ways that traditional media cannot.',
        backgroundTitle: 'Our VR testimony services include:',
        services: [
            'Crime scene reconstruction',
            'Virtual courtroom simulations',
            'Immersive historical recreations',
            'VR-based training for legal professionals',
            'Interactive jury education tools',
            'Evidence visualization in VR'
        ],
        bodyBottom1: 'By leveraging VR, we enable legal teams, educators, and researchers to present information in a way that is both engaging and highly impactful.',
        bodyBottom2: 'If you need immersive VR solutions for legal, historical, or training purposes, we have the expertise to create effective and accurate virtual testimonies.'
    }




]


const selectedContent = ref(vrContents.Design); 
</script>



<style scoped>
.heading-12 {
    color: var(--White);
    text-align: center;
    word-spacing: 100px;
}

.caption-1 {
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
}

.center {
    text-align: center;
}

/* полуэлипсы */
.ellipses-container {
    position: relative;
    top: 360px;
    width: 1054px;
    height: 741px;
    margin: 0 auto;
    pointer-events: none;
}

.ellipse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.17);
    z-index: -2;
}



.ellipse-1 {
    width: 1054px;
    height: 1054px;
    position: relative;
}

.ellipse-2 {
    width: 917px;
    height: 917px;
}

.ellipse-3 {
    width: 760px;
    height: 760px;
}

.ellipse-4 {
    width: 622px;
    height: 622px;
}

.ellipse-5 {
    width: 452px;
    height: 452px;
}

/* лого компаний, позиционирование */
.company {
    width: 102px;
    height: 102px;
    background: rgba(37, 37, 50, 0.8);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    pointer-events: auto;
    cursor: pointer;
}

.company:nth-child(1) {
    top: 439px;
    left: 15px;
}

.company:nth-child(2) {
    top: 252px;
    left: 72px;
}

.company:nth-child(3) {
    top: 90px;
    left: 241px;
}

.company:nth-child(4) {
    top: 18px;
    left: 476px;
}

.company:nth-child(5) {
    top: 90px;
    right: 241px;
}

.company:nth-child(6) {
    top: 252px;
    right: 71px;
}

.company:nth-child(7) {
    top: 439px;
    right: 15px;
}

.company.active {

    background:
        linear-gradient(#252532, #252532) padding-box,
        linear-gradient(90deg, #0CBAF1 0%, #E95CE9 100%) border-box;
    border: 1px solid transparent;
}

.child {
    position: absolute;
    top: 42px;
    left: 215px;
    pointer-events: all;
}

@media (max-width: 1200px) {

    .ellipse-1,
    .ellipse-2,
    .ellipse-3,
    .ellipse-4 {
        clip-path: polygon(0% 54%, 100% 54%, 100% 0%, 0% 0%);
    }

    .heading-2 {
        margin-bottom: -200px;
    }

    .ellipses-container {
        width: 800px;
        height: 600px;

    }

    .ellipse-1 {
        width: 800px;
        height: 800px;
    }

    .ellipse-2 {
        width: 700px;
        height: 700px;
    }

    .ellipse-3 {
        width: 600px;
        height: 600px;
    }

    .ellipse-4 {
        width: 500px;
        height: 500px;
    }

    .ellipse-5 {
        width: 400px;
        height: 400px;
    }

    .company {
        width: 80px;
        height: 80px;
    }

    .company:nth-child(1) {
        top: 350px;
        left: 10px;
    }

    .company:nth-child(2) {
        top: 200px;
        left: 50px;
    }

    .company:nth-child(3) {
        top: 70px;
        left: 180px;
    }

    .company:nth-child(4) {
        top: 10px;
        left: 360px;
    }

    .company:nth-child(5) {
        top: 70px;
        right: 180px;
    }

    .company:nth-child(6) {
        top: 200px;
        right: 50px;
    }

    .company:nth-child(7) {
        top: 350px;
        right: 10px;
    }

}

@media (max-width: 1000px) {



    .ellipses-container {
        width: 600px;
        height: 450px;
    }

    .ellipse-1 {
        width: 600px;
        height: 600px;
    }

    .ellipse-2 {
        width: 500px;
        height: 500px;
    }

    .ellipse-3 {
        width: 400px;
        height: 400px;
    }

    .ellipse-4 {
        width: 300px;
        height: 300px;
    }

    .ellipse-5 {
        width: 200px;
        height: 200px;
    }

    .company {
        width: 60px;
        height: 60px;
    }

    .company:nth-child(1) {
        top: 250px;
        left: 20px;
    }

    .company:nth-child(2) {
        top: 150px;
        left: 45px;
    }

    .company:nth-child(3) {
        top: 60px;
        left: 140px;
    }

    .company:nth-child(4) {
        top: 20px;
        left: 275px;
    }

    .company:nth-child(5) {
        top: 60px;
        right: 140px;
    }

    .company:nth-child(6) {
        top: 150px;
        right: 45px;
    }

    .company:nth-child(7) {
        top: 250px;
        right: 20px;
    }

}

@media (max-width: 650px) {
    .heading-2 {
        margin-bottom: -300px;
    }

    .ellipses-container {
        width: 400px;
        height: 300px;
    }

    .ellipse-1 {
        width: 400px;
        height: 400px;
    }

    .ellipse-2 {
        width: 350px;
        height: 350px;
    }

    .ellipse-3 {
        width: 300px;
        height: 300px;
    }

    .ellipse-4 {
        width: 250px;
        height: 250px;
    }

    .ellipse-5 {
        width: 150px;
        height: 150px;
    }

    .company {
        width: 40px;
        height: 40px;
    }

    .company:nth-child(1) {
        top: 150px;


        left: 5px;
    }

    .company:nth-child(2) {
        top: 100px;
        left: 20px;
    }

    .company:nth-child(3) {
        top: 30px;
        left: 80px;
    }

    .company:nth-child(4) {
        top: 5px;
        left: 180px;
    }

    .company:nth-child(5) {
        top: 30px;
        right: 80px;
    }

    .company:nth-child(6) {
        top: 100px;
        right: 20px;
    }

    .company:nth-child(7) {
        top: 150px;
        right: 5px;
    }

    .caption-1 {
        font-size: 1rem;
    }

    .heading-2 {
        font-size: 1.5rem;
    }

}

@media (max-width: 430px) {
    .ellipses-container {
        width: 300px;
        height: 200px;
    }

    .ellipse-1 {
        width: 300px;
        height: 300px;
    }

    .ellipse-2 {
        width: 250px;
        height: 250px;
    }

    .ellipse-3 {
        width: 200px;
        height: 200px;
    }

    .ellipse-4 {
        width: 150px;
        height: 150px;
    }

    .ellipse-5 {
        width: 100px;
        height: 100px;
    }

    .company {
        width: 30px;
        height: 30px;
    }

    .company:nth-child(1) {
        top: 130px;
        left: 8px;
    }

    .company:nth-child(2) {
        top: 70px;
        left: 25px;
    }

    .company:nth-child(3) {
        top: 25px;
        left: 70px;
    }

    .company:nth-child(4) {
        top: 5px;
        left: 135px;
    }

    .company:nth-child(5) {
        top: 25px;
        right: 70px;
    }

    .company:nth-child(6) {
        top: 70px;
        right: 25px;
    }

    .company:nth-child(7) {
        top: 130px;
        right: 8px;
    }

    .caption-1 {
        font-size: 0.8rem;
    }

    .heading-2 {
        font-size: 1.2rem;
    }

}
</style>