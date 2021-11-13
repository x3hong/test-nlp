<template>
    <div class="page-wrap">
            <NavHeader />
            <section class="section1">
                <el-row :gutter="10">
                    <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="2">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :xs="18" :sm="18" :md="9" :lg="18" :xl="10">
                        <p class="fs72 bold">NFT Market</p>
                        <p class="fs30 mt40">Buy and Sell NFTs on Binance Smart Chain</p>
                        <div class="img-btn mt60">
                            <img src="../assets/bxl-telegram.png" alt="">
                            <img src="../assets/tuite.png" alt="">
                        </div>
                    </el-col>
                    <el-col :xs="6" :sm="3" :md="9" :lg="9" :xl="12"
                    ><div class="grid-content bg-purple"></div
                    ></el-col>
                </el-row>
            </section>
            <section class="section2">
                <el-row :gutter="10">
                    <el-col :lg="2" :xl="2"></el-col>
                    <el-col :lg="20" :xl="20" class="colcontainer">
                        <img class="top-img" src="../assets/animals.png" alt="">
                    </el-col>
                    <el-col :lg="2" :xl="2"></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :xs="2" :sm="2" :md="4" :lg="6" :xl="6"
                    ><div class="grid-content bg-purple"></div
                    ></el-col>
                    <el-col :xs="12" :sm="12" :md="10" :lg="8" :xl="8">
                        <div>
                            <div class="title fs36 mt30">Token Distribution</div>
                            <div class="rect fs20">
                                <p>Total: 1000.0000.000</p>
                                <p>7% TAX ON BUY AND SELL</p>
                                <p>+5% Reward USDT</p>
                                <p>+2% Maketing</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :xs="10" :sm="10" :md="8" :lg="10" :xl="10"
                    ><img class="right-img" src="../assets/baifenbi.png" alt="">
                    </el-col>
                </el-row>
            </section>
            <section class="section3">
                <el-row :gutter="10">
                    <el-col :lg="4" :xl="4"></el-col>
                    <el-col :lg="16" :xl="16" class="colcontainer">
                        <div class="title fs48 bold mb20"><span>ROYAL</span> ECOSYSTEM</div>
                    </el-col>
                    <el-col :lg="4" :xl="4"></el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :lg="2" :xl="2"></el-col>
                    <el-col :lg="12" :xl="12"></el-col>

                    <el-col :lg="8" :xl="8" class="colcontainer" style="padding-top: 50px;">
                        <div>
                            <img src="../assets/3_1.png" class="mb10" alt="">
                            <div class="fs24 bold mb10">8% TAX ON BUY TRANSACTIONS</div>
                            <div class="fs18">We are introducing the first ever Horse racing bet game on Binance Smart Chain. Bet and have the chance of winning BNB. Players must hold Royal BET $RBET to participate in betting.</div>
                        </div>
                        <div class="mt20">
                            <img src="../assets/3_2.png" class="mb10" alt="">
                            <div class="fs24 bold mb10">8% TAX ON BUY TRANSACTIONS</div>
                            <div class="fs18">We are introducing the first ever Horse racing bet game on Binance Smart Chain. Bet and have the chance of winning BNB. Players must hold Royal BET $RBET to participate in betting.</div>
                        </div>
                        <div class="mt20">
                            <img src="../assets/3_3.png" class="mb10" alt="">
                            <div class="fs24 bold mb10">8% TAX ON BUY TRANSACTIONS</div>
                            <div class="fs18">We are introducing the first ever Horse racing bet game on Binance Smart Chain. Bet and have the chance of winning BNB. Players must hold Royal BET $RBET to participate in betting.</div>
                        </div>
                    </el-col>
                    <el-col :lg="2" :xl="2"></el-col>
                </el-row>
            </section>
            <section class="section4">
                <el-row :gutter="10">
                    <el-col :lg="3" :xl="3"></el-col>
                    <el-col :lg="14" :xl="14">
                        <div>
                            <p class="fs48">TOKENOMICS</p>
                            <p class="fs20">PancakeSwap makes it easy to make your crypto work for you.</p>
                            <div class="img-btn mt60">
                                <img src="../assets/bxl-telegram.png" class="mr60" alt="">
                                <img src="../assets/tuite.png" alt="">
                            </div>
                        </div>
                    </el-col>
                    <el-col :lg="9" :xl="9"></el-col>
                </el-row>
            </section>

            <section class="section5">
                <div class="section-content">
                    <p class="fs48" style="margin-bottom:120px;">U P C O M I N G   L I S T I N G   O N </p>
                    <img src="../assets/logo.png" alt="">
                </div>
            </section>
        <Footer />
    </div>
</template>

<script>
import NavHeader from "./Header.vue";
import Footer from './Footer.vue'
export default {
    components: { NavHeader, Footer },
    data() {
        return {
            
        };
    },
    created() {
        
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
    background: #3b2990;
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
.section-content {
  margin: 0 auto;
  position: relative;
  width: 100%;
}
.section1 {
    color: #fff;
    padding-top: 150px;
    padding-bottom: 200px;
    background: url("../assets/bg.png") no-repeat;
    background-origin: center;
    background-size: 100% 100%;
    .img-btn {
        img {
            width: 108px;
            height: 108px;
            display: inline-block;
            margin-right: 76px;
        }
    }
}
.section2 {
    background: url('../assets/2.png') no-repeat;
    background-origin: center;
    background-size: 100% 100%;
    color: #fff;
    padding-bottom: 120px;
    .colcontainer {
        position: relative;
        .top-img {
            position: relative;
            top: -40%;
            width: 95%;
        }
    }
    .rect {
        width: 350px;
        background: #5454C0;
        opacity: 0.9;
        border-radius: 30px;
        padding: 80px 40px;
        box-sizing: border-box;
        line-height: 50px;
    }
    .right-img {
        width: 353px;
        height: 353px;
        margin-top: 120px;
    }
}
.section3 {
    background: url('../assets/3.png') no-repeat;
    background-origin: center;
    background-size: 100% 100%;
    width: 100%;
    color: #fff;
    // padding-bottom: 150px;
    .title {
        text-align: center;
    }
}
.section4 {
    background: url('../assets/4.png') no-repeat;
    background-origin: center;
    background-size: 100% 100%;
    color: #fff;
    padding-top: 300px;
    padding-bottom: 150px;
}
.section5 {
    background: url('../assets/5.png') no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    margin: auto;
    padding-top: 60px;
    padding-bottom: 200px;
}
@media screen and (max-width: 1440px) {
//   .section-content {
//     max-width: 1200px;
//   }
}
@media screen and (min-width: 1920px) {
//   .section-content {
//     max-width: 1600px;
//   }
}

</style>