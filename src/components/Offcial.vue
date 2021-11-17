<template>
    <div class="page-wrap">
        <NavHeader from="website" />
            <section class="section1">
                <el-row :gutter="10">
                    <!-- <el-col :lg="3" :xl="2">
                        <div class="grid-content bg-purple"></div>
                    </el-col> -->
                    <!-- <el-col :lg="18" :xl="10"> -->
                    <el-col :offset="3">
                        <p class="fs72 bold">TreasurySwap</p>
                        <p class="fs30 mt40">Buy and Sell on Binance Smart Chain</p>
                        <div class="bold-btns">
                            <button class="whitepaper fs38" @click="openDapp"><span>TreasurySwap</span></button>
                            <button class="whitepaper fs38" @click="openPaper"><span>WhitePaper</span></button>
                        </div>
                        <div class="img-btn mt60">
                            <img @click="openTelegram" src="../assets/bxl-telegram.png" alt="">
                            <img @click="openTwitter" src="../assets/tuite.png" alt="">
                        </div>
                    </el-col>
                    <!-- <el-col :lg="9" :xl="12"
                    ><div class="grid-content bg-purple"></div
                    ></el-col> -->
                </el-row>
            </section>
            <section class="section2">
                <el-row :gutter="10">
                    <!-- <el-col :lg="4" :xl="4"></el-col> -->
                    <!-- <el-col :lg="16" :xl="16" class="colcontainer"> -->
                    <el-col :offset="4" class="colcontainer">
                        <img class="top-img" src="../assets/animals.png" alt="">
                    </el-col>
                    <!-- <el-col :lg="5" :xl="4"></el-col> -->
                </el-row>
                <div class="content">
                <div>
                    <div class="title fs30 mt30">Token Distribution</div>
                    <div class="rect fs18">
                        <p>Total: 1000.0000.000</p>
                        <p>7% TAX ON BUY AND SELL</p>
                        <p>+5% Reward USDT</p>
                        <p>+2% Maketing</p>
                    </div>
                </div>
                <img class="right-img" src="../assets/baifenbi.png" alt="">
                <div class="static">
                    <p>
                        <img src="../assets/circle1.png" alt="">
                        <span class="title">burn</span>
                        <span>60%</span>
                    </p>
                    <p>
                        <img src="../assets/circle2.png" alt="">
                        <span class="title">lp and release</span>
                        <span>30%</span>
                    </p>
                    <p>
                        <img src="../assets/circle3.png" alt="">
                        <span class="title">lock</span>
                        <span>7%</span>
                    </p>
                    <p>
                        <img src="../assets/circle4.png" alt="">
                        <span class="title">Marketing</span>
                        <span>3%</span>
                    </p>
                    </div>
                </div>
            </section>
            <section class="section3">
                <el-row :gutter="10">
                    <!-- <el-col :lg="4" :xl="4"></el-col> -->
                    <!-- <el-col :lg="16" :xl="16" class="colcontainer"> -->
                    <el-col class="colcontainer">
                        <div class="title fs48 bold mb20">TreasurySwap ROAD MAP</div>
                    </el-col>
                    <!-- <el-col :lg="4" :xl="4"></el-col> -->
                </el-row>
                <el-row :gutter="10">
                    <!-- <el-col :lg="2" :xl="2"></el-col>
                    <el-col :lg="12" :xl="12"></el-col> -->

                    <!-- <el-col :lg="8" :xl="8" class="colcontainer" style="padding-top: 50px;"> -->
                    <el-col :offset="14" class="colcontainer" style="padding-top: 50px;">
                        <div>
                            <img src="../assets/3_1.png" class="mb10" alt="">
                            <div class="fs24 bold mb10">presale</div>
                            <!-- <div class="fs18">We are introducing the first ever Horse racing bet game on Binance Smart Chain. Bet and have the chance of winning BNB. Players must hold Royal BET $RBET to participate in betting.</div> -->
                            <div class="fs18">
                                <p>Telegram Members</p>
                                <p>PinkSale Presale & Liquidity Lock</p>
                                <p>Presale Marketing</p>
                                <p>Launch on Pancakeswap</p>
                            </div>
                        </div>
                        <div class="mt20">
                            <img src="../assets/3_2.png" class="mb10" alt="">
                            <div class="fs24 bold mb10">CoinMarketCap Listing</div>
                            <div class="fs18">
                                <p>CoinGecko Listing</p>
                                <p>swap launched</p>
                                <p>Online News Boost</p>
                                <p>5 Million Market Cap</p>
                            </div>
                        </div>
                        <div class="mt20">
                            <img src="../assets/3_3.png" class="mb10" alt="">
                            <div class="fs24 bold mb10">30,000 holders</div>
                            <div class="fs18">
                                <p>Listing on CEX</p>
                                <p>Collab with Industry</p>
                                <p>Offline advertising & partnerships</p>
                                <p>More to be announced</p>
                            </div>
                        </div>
                    </el-col>
                    <!-- <el-col :lg="2" :xl="2"></el-col> -->
                </el-row>
            </section>
            <section class="section4">
                <el-row :gutter="10">
                    <!-- <el-col :lg="3" :xl="3"></el-col>
                    <el-col :lg="14" :xl="14"> -->
                    <el-col :offset="3">
                        <div>
                            <p class="fs48">TOKENOMICS</p>
                            <p class="fs20">TreasurySwap makes it easy to make your crypto work for you.</p>
                            <div class="img-btn mt60">
                                <img @click="openTelegram" src="../assets/bxl-telegram.png" class="mr60" alt="">
                                <img @click="openTwitter" src="../assets/tuite.png" alt="">
                            </div>
                        </div>
                    </el-col>
                    <!-- <el-col :lg="9" :xl="9"></el-col> -->
                </el-row>
            </section>

            <section class="section5">
                <div class="section-content">
                    <p class="fs48" style="margin-bottom:120px;">U P C O M I N G   L I S T I N G   O N </p>
                    <img src="../assets/logo.png" alt="">
                </div>
            </section>
    </div>
</template>

<script>
import { openTelegram, openTwitter } from '../util'
import NavHeader from "./Header.vue";
export default {
    components: {
        NavHeader
    },
    data() {
        return {
            openTelegram,
            openTwitter
        };
    },
    created() {
        
    },
    methods: {
        openPaper() {
            window.open('whitepaper.pdf', '_blank')
        },
        openDapp() {
            const routedata = this.$router.resolve({
                path: '/Home'
            })
            window.open(routedata.href, '_blank')
        }
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
.fs50 { font-size: 50px; }
.fs38 { font-size: 38px; }
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
            cursor: pointer;
        }
    }
    .bold-btns {
        display: flex;
        position: relative;
        left: -15px;
        button {
            background: url('../assets/btn-bg.png');
            background-size: 100% 100%;
            // width: 320px;
            height: 90px;
            border: none;
            color: #642EAC;
            font-weight: bold;
            cursor: pointer;
        }
        .swap {
            width: 250px;
            span {
                position: relative;
                top: -5px;
            }
        }
        .whitepaper {
            width: 320px;
            span {
                position: relative;
                top: -4px;
            }
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
            // width: 95%;
            width: 1000px;
        }
    }
    .content {
        display: flex;
        padding: 0 16%;
    }
    .rect {
        min-width: 300px;
        background: #5454C0;
        opacity: 0.9;
        border-radius: 30px;
        padding: 80px 20px;
        box-sizing: border-box;
        line-height: 50px;
        margin-right: 50px;
    }
    .right-img {
        width: 300px;
        height: 300px;
        margin-top: 120px;
        margin-right: 50px;
    }
    .static {
        margin-top: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 250px;
        img {
            width: 38px;
            height: 38px;
            margin-right: 20px;
        }
        p {
            display: flex;
            width: 250px;
            justify-content: space-between;
            align-items: center;
            span {
                display: inline-block;
                text-align: left;
            }
            .title {
                width: 120px;
            }
        }
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