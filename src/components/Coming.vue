<template>
    <div class="page-wrap">
        <NavHeader />
        <section class="section1" :class="{fixheight: isMobile}">
            <img class="coming" src="../assets/coming.png" alt="">
        </section>
        <Footer />
    </div>
</template>

<script>
import NavHeader from "./Header.vue";
import Footer from './Footer.vue'
export default {
    name: 'Home',
    components: { NavHeader, Footer },
    data() {
        return {
            isMobile: false
        };
    },
    mounted() {
        this.isMobile = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)  
    },
    methods: {
        
    }
};
</script>

<style lang="less" scoped>
.page-wrap {
    // background: url("../assets/bg.png") no-repeat;
    background-origin: center;
    background-size: contain;
    background: #2D167E;
}
.section1 {
    // background: url("../assets/coming.png") no-repeat;
    // background-origin: center;
    // background-size: 100% 100%;
    // width: 100%;
    // height: 700px;
    &.fixheight {
        margin-bottom: 1600px;
    }

    .coming {
        width: 100%;
    }
}
</style>