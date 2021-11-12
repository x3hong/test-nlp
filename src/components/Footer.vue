<template>
  <div class="footer">
    <div class="content">
      <div class="block">
        <p class="head"><span class="line"></span> ABOUT</p>
        <p>Contact</p>
        <p>Brand</p>
        <p>Blog</p>
      </div>
      <div class="block">
        <p class="head"><span class="line"></span>HELP</p>
        <p>Customer Support</p>
        <p>Troubleshooting</p>
        <p>Guides</p>
      </div>
      <div class="block">
        <p class="head"><span class="line"></span>DEVELOPERS</p>
        <p>Github</p>
        <p>Documentation</p>
        <p>Bug Bounty</p>
      </div>
      <div>
        <img src="../assets/telegram.png" alt="telegram" style="margin-right:50px;">
        <img src="../assets/twitter.png" alt="twitter">
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less">
.footer {
  background-color: #2D167E;
  color: #fff;
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 70px 90px;
  }
  .block {
    p {
      line-height: 40px;
    }
    .head {
      font-size: 30px;
      font-weight: bold;
      position: relative;
      .line {
        display: inline-block;
        width: 8px;
        height: 26px;
        border-radius: 4px;
        background: #33F8FF;
        position: absolute;
        left: -20px;
        top: 7px;
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  .footer .content {
    max-width: 1200px;
  }
}
@media screen and (min-width: 1920px) {
  .footer .content {
    max-width: 1600px;
  }
}
@media screen and (max-width: 800px) {
  .fs72 { font-size: 60px;}
}
</style>