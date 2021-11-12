<template>
  <div class="container">
    <section class="nav"></section>
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
    <section class="content">
      <div class="sub-header">
        <h3>Hot Collections</h3>
        <div class="base-btn">View All</div>
      </div>
      <div class="main"></div>
    </section>
    <section class="footer"></section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
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
#app {
  background: url("../assets/bj1.png") no-repeat;
  background-size: cover;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.header {
  color: #fff;
  position: relative;
}
.header .right input {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 25px;
}
.header .right input::-webkit-input-placeholder {
  color: #fff;
  font-size: 20px;
}
.fs72 {
  font-size: 72px;
}
.fs30 {
  font-size: 30px;
}
.fs20 {
  font-size: 20px;
}
.bold {
  font-weight: bold;
}
.mt60 {
  margin-top: 60px;
}
.mt40 {
  margin-top: 40px;
}
.mb60 {
  margin-bottom: 60px;
}
.ml40 {
  margin-left: 40px;
}
.mr40 {
  margin-right: 40px;
}

.base-btn {
  border-radius: 25px;
  border: 1px solid #33f8ff;
  padding: 15px 35px;
  background: inherit;
  color: #fff;
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
  position: relative;
}
.sub-header .viewall {
}
</style>
