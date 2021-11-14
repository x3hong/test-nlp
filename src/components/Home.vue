<template>
    <div class="page-wrap">
        <NavHeader />
        <section class="section1" :class="{fixheight: isMobile}">
            <el-row :gutter="10">
                <!-- <el-col :lg="3" :xl="2">
                    <div class="grid-content bg-purple"></div>
                </el-col> -->
                <!-- <el-col :lg="18" :xl="10"> -->
                <el-col :offset="3">
                    <p class="fs72 bold">Earn your tokens in <br> Treasure. </p>
                    <p class="fs30 mt40">Trade, earn, and win crypto on the most popular decentralized <br> platform in the galaxy.</p>
                    
                    <div class="img-btn mt60">
                        <button class="base-btn overview mr40">Overview</button>
                        <button class="base-btn bold fs20">Collections</button>
                    </div>
                </el-col>
                <!-- <el-col :lg="9" :xl="12"/ 
                ><div class="grid-content bg-purple"></div
                ></el-col>-->
            </el-row>
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
    // background-origin: center;
    // background-size: contain;
    background: #2D167E;
}
.fs48 { font-size: 48px; }
.fs30 { font-size: 30px; }
.fs36 { font-size: 36px; }
.fs28 { font-size: 28px; }
.fs24 { font-size: 24px; }
.fs20 { font-size: 20px; }
.fs18 { font-size: 18px; }
.fs68 { font-size: 68px; }
.bold { font-weight: bold;}
.mt30 { margin-bottom: 30px;}
.mt10 { margin-top: 10px;}
.mb10 { margin-bottom: 10px;}
.mt40 { margin-bottom: 40px;}
.mt50 { margin-bottom: 50px;}
.mr60 { margin-right: 60px;}
// .section-content {
//   margin: 0 auto;
//   position: relative;
//   width: 100%;
// }
.section1 {
    color: #fff;
    padding-top: 150px;
    padding-bottom: 200px;
    background: url("../assets/bg.png") no-repeat;
    background-origin: center;
    background-size: 100% 100%;

    &.fixheight {
        margin-bottom: 1600px;
    }
    .img-btn {
        img {
            width: 108px;
            height: 108px;
            display: inline-block;
            margin-right: 76px;
        }
    }
}
</style>