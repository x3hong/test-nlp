<template>
  <div class="footer">
    <div class="content">
      <div class="block">
        <p class="head"><span class="line"></span> ABOUT</p>
        <p style="cursor: pointer;" @click="openContact">Contact</p>
        <!-- <p>Brand</p>
        <p>Blog</p> -->
      </div>
      <div class="block">
        <p class="head"><span class="line"></span>HELP</p>
        <!-- <p>Customer Support</p>
        <p>Troubleshooting</p>
        <p>Guides</p> -->
      </div>
      <div class="block">
        <p class="head"><span class="line"></span>DEVELOPERS</p>
        <p style="cursor: pointer;" @click="openGithub">Github</p>
        <!-- <p>Documentation</p>
        <p>Bug Bounty</p> -->
      </div>
      <div class="social">
        <img src="../assets/telegram.png" alt="telegram" style="margin-right:50px;" @click="openTelegram">
        <img src="../assets/twitter.png" alt="twitter" @click="openTwitter">
      </div>
    </div>
  </div>
</template>
<script>
import { openTelegram, openTwitter, openContact, openGithub } from '../util'
export default {
  data() {
    return {
      openTelegram,
      openTwitter,
      openContact,
      openGithub
    }
  }
};
</script>

<style lang="less">
.footer {
  // position: fixed;
  // bottom: 0px;
  // left: 0;
  // right: 0;
  width:100%;
  background-color: #2D167E;
  color: #fff;
  .social {
    cursor: pointer;
  }
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
// @media screen and (max-width: 1440px) {
//   .footer .content {
//     max-width: 1200px;
//   }
// }
// @media screen and (min-width: 1920px) {
//   .footer .content {
//     max-width: 1600px;
//   }
// }
@media screen and (max-width: 800px) {
  .fs72 { font-size: 60px;}
}
</style>