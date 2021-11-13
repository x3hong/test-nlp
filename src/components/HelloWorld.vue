<template>
  <div class="page-wrap">
    <div class="container">
    <NavHeader />
    <section class="header">
      <div class="left">
        <p class="fs72 bold">NFT Market</p>
        <p class="fs30 mt40">Buy and Sell NFTs on Binance Smart Chain</p>
        <div class="mt60">
          <button class="base-btn overview mr40">Overview</button>
          <button class="base-btn bold fs20">Collections</button>
        </div>
      </div>
      <div class="right">
        <input class="base-btn search" placeholder="search address" />
      </div>
    </section>
    <section class="content" style="margin-top: 50px;">
      <div class="sub-header">
          <h3 class="fs30">Hot Collections</h3>
          <div class="base-btn viewall bold">View All&nbsp;&nbsp;&nbsp;></div>
      </div>
      <div class="product">
          <div class="mb40 item" v-for="item in 8" :key="item">
              <img src="" alt="">
              <div class="info">
                  <div class="left"></div>
                  <div class="hot fs24">
                      <p>Pancake Squad</p>
                      <p>968.0684</p>
                  </div>
              </div>
          </div>
        </div>
        <div class="sub-header">
          <h3 class="fs30">Newest Arrivals </h3>
          <div class="base-btn viewall bold">View All&nbsp;&nbsp;&nbsp;></div>
        </div>
        <div class="product">
          <div class="mb40 item item2" v-for="item in 4" :key="item">
              <img src="" alt="">
              <div class="info2">
                  <div class="newest fs24 mb20">
                      <p class="fs20 mt10">Pancake Bunnies  </p>
                      <p class="fs18 mt10">Flipsie Easter '21</p>
                  </div>
                  <div class="bottom">
                      <div class="fs20">Lowest price</div>
                      <div class="price">
                          <span class="one fs20">$18.981</span>
                          <span class="two fs20">0.0785</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </div>
    <Footer class="footer" />
    </div>
</template>

<script>
import NavHeader from "./Header.vue";
import Footer from './Footer.vue'
export default {
  name: "HelloWorld",
  components: { NavHeader, Footer },
  props: {
    msg: String,
  },
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.isMobile = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)  
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
body,
p,
div {
  margin: 0;
  padding: 0;
}
body {
  background: #341A91;
}
.page-wrap {
  background: url("../assets/bj1.png") no-repeat;
  background-origin: center;
  background-size: contain;
}
.container {
  margin: 0 auto;
  position: relative;
  width: 100%;
}
.header {
  color: #fff;
  position: relative;
  padding-top: 100px;
}
.header .right input {
    position: absolute;
    right: 0;
    top: 100px;
    margin-top: 25px;
}
.header .right input::-webkit-input-placeholder { 
    color: #fff; 
    font-size: 20px;
}
.fs72 { font-size: 72px;}
.fs30 { font-size: 30px;}
.fs20 { font-size: 20px;}
.fs18 { font-size: 18px;}
.fs24 { font-size: 24px;}
.bold { font-weight: bold;}
.mt60 { margin-top: 60px;}
.mt40 { margin-top: 40px;}
.mt30 { margin-top: 30px;}
.mt20 { margin-top: 20px;}
.mb20 {margin-bottom: 20px;}
.mt10 { margin-top: 10px;}
.mb40 { margin-bottom: 40px !important;}
.mb60 { margin-bottom: 60px;}
.ml40 { margin-left: 40px;}
.mr40 { margin-right: 40px;}

.base-btn {
  border-radius: 25px;
  border: 1px solid #33F8FF;
  padding: 15px 35px;
  background: inherit;
  color: #fff;
  cursor: pointer;
}
.overview {
  color: #212222;
  font-weight: bold;
  font-size: 20px;
  background: #33f8ff;
}
.content {
  color: #fff;
}
.sub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sub-header .viewall {
  color: #33f8ff;
}
.content .product {
  display: flex;
  flex-wrap: wrap;
}
.content .product .item {
  width: 380px;
  // height: 400px;
  margin: 0 auto;
  background: linear-gradient(60deg, #9670f6, #51aefe);
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
}
.content .product .item2 {
  // height: 520px;
  position: relative;
}
.content .item img {
  width: 360px;
  height: 270px;
  background: #ccc;
}
.content .item .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}
.content .item .info .left {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #ccc;
}
.content .item .info .hot {
  text-align: right;
}
.content .item2 img {
  width: 360px;
  // height: 330px;
  background: #ccc;
}
.content .item .info2  {
  .bottom {
    // position: absolute;
    // bottom: 0;
    height: 70px;
    display: flex;
    align-items: center;
    border-top: 1px solid #2045C0;
    width: 95%;
    justify-content: space-between;
    .price {
      .one {
        display: inline-block;
        background: #3D3A99;
        opacity: 0.4;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        padding: 8px 15px;
      }
      .two {
        display: inline-block;
        background: #3D3A99;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        padding: 8px 15px;
      }
    }
  }
}



@media screen and (max-width: 1440px) {
  .container {
    max-width: 1200px;
    .fs72 { font-size: 48px;}
    .fs30 { font-size: 24px;}
    .fs20 { font-size: 14px;}
    .fs18 { font-size: 12px;}
    .fs24 { font-size: 20px;}
    .content .product .item {
      width: 280px;
      img {
        width: 98%;
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .container {
    max-width: 1600px;
  }
}
@media screen and (max-width: 800px) {
  .fs72 { font-size: 60px;}
}
</style>
