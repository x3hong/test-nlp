<template>
  <div class="nav" :class="{ active: !isTop }">
    <div class="logo" @click="gotoHome" :class="{hide: isUseInWEbsite}">
      <img src="../assets/logo.png" alt="" class="logo-img" />
    </div>
    <div class="list" :class="{hide: isUseInWEbsite}">
      <div class="item bigger">
        <router-link to="/Home" class="link">Treasury</router-link>
      </div>
      <div class="item">
        <router-link to="/Coming" class="link">Trade</router-link>
      </div>
      <div class="item">
        <router-link to="/Coming" class="link">Win</router-link>
      </div>
      <div class="item">
        <router-link to="/Coming" class="link">Earn</router-link>
      </div>
      <div class="item">
        <router-link to="/Offcial" class="link">website</router-link>
      </div>
      <div class="item nft">
        <div class="p">
          <router-link to="/NFT" class="link">NFT</router-link>
        </div>
      </div>
    </div>
    <div class="right">
      <!-- <div class="walet">
        <i class="icon"></i>
        <span class="money">$18.814</span>
      </div>
      <div class="earth"></div>
      <div class="setting"></div> -->
      <template v-if="isUseInWEbsite">
        <div class="alink" @click="openTelegram">telegram</div>
        <div class="alink" @click="openTwitter">Twitter</div>
        <div class="alink" @click="openPaper">whitepaper</div>
        <div class="alink">Audit</div>
      </template>
      <div v-if="!isUseInWEbsite" class="contact">Connect Wallet</div>
      <!-- telegram Twitter whitepaper Audit -->
    </div>
  </div>
</template>
<script>
import { openTelegram, openTwitter} from '../util'
export default {
  name: "Nav",
  props: {
    msg: String,
    from: String
  },
  data() {
    return {
      isTop: true,
      openTelegram,
      openTwitter
    };
  },
  computed: {
    isUseInWEbsite() {
      return this.from === 'website'
    }
  },
  mounted() {
    document.addEventListener("scroll", () => {
      console.log(document.documentElement.scrollTop);
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 0) {
        this.isTop = false;
      } else {
        this.isTop = true;
      }
    });
  },
  methods: {
    gotoHome() {
      this.$router.push({
        path: '/Home'
      })
    },
    openPaper() {
      window.open('whitepaper.pdf', '_blank')
    },
  },
};
</script>
<style lang="less">
.hide {
  opacity: 0;
}
.right {
  display: flex;
  margin-right: 30px;
  .icon {
    width: 34px;
    height: 34px;
    // background: #f2f2f2;
    border: 1px solid #33f8ff;
    border-radius: 50%;
    display: inline-block;
    background: url(../assets/setting.png) 100% 100%;
  }
  .alink {
    color: white;
    font-size: 20px;
    padding: 0 8px;
    cursor: pointer;
    line-height: 50px;
  }
  .money,
  .earth {
    margin-right: 36px;
  }
  .money {
    width: 86px;
    height: 18px;
    font-size: 20px;
    font-family: Arial Black;
    font-weight: 400;
    color: #ffffff;
    position: relative;
    top: -11px;
    margin-left: 11px;
  }
  .earth {
    width: 26px;
    margin-top: 5px;
    height: 26px;
    background: url(../assets/earth.png) 100% 100%;
  }
  .setting {
    width: 26px;
    height: 26px;
    margin-top: 5px;
    background: url(../assets/setting.png) 100% 100%;
    margin-right: 22px;
  }
  .contact {
    font-weight: bold;
    color: #ffffff;
    padding: 13px 35px;
    background: linear-gradient(90deg, #9670f6, #51aefe);
    border-radius: 21px;
    position: relative;
    top: -7px;
  }
}
.logo {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 30px;
  .logo-img {
    width: 36px;
    height: 40px;
    display: inline-block;
    margin-top: 10px;
  }
}

.nav {
  padding: 10px 0px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  // background-color: #46369c;
  z-index: 20;
  &.active {
    background: #2d167e;
  }
  .list {
    margin-left: 24px;
    flex-grow: 1;
    display: flex;
    .item.bigger {
      .link {
        margin-top: 10px;
        width: 116px;
        height: 22px;
        font-size: 24px;
        // font-family: Arial Black;
        font-weight: 400;
        text-decoration: none;
        color: #ffffff;
        cursor: pointer;
      }
    }

    .item {
      padding-top: 4px;
      padding-bottom: 4px;
      .p {
        width: 70px;

        border: 2px solid #33f8ff;
        border-radius: 17px;
        font-size: 22px;
        font-family: DIN Alternate;
        font-weight: bold;
        color: #33f8ff;
        width: 60px;
        height: 29px;
        line-height: 29px;
        position: relative;
        top: 6px;
        .link {
          color: #33f8ff;
          cursor: pointer;
        }
      }
      &.nft {
        .link {
          height: 30px;
          width: 70px;
          cursor: pointer;
        }
      }
      .link {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        padding: 0px 16px;
        text-decoration: none;
        height: 48px;
        cursor: pointer;
      }
    }
  }
}
</style>