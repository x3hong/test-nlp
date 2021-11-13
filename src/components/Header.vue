<template>
  <div class="nav" :class="{ active: !isTop }">
    <div class="logo">
      <img src="../assets/logo.png" alt="" class="logo-img" />
    </div>
    <div class="list">
      <div class="item bigger">
        <a href="/" class="link">Treasury</a>
      </div>
      <div class="item">
        <a href="/" class="link">Trade</a>
      </div>
      <div class="item">
        <a href="/" class="link">Win</a>
      </div>
      <div class="item">
        <a href="/" class="link">Earn</a>
      </div>
      <div class="item nft">
        <div class="p">
          <a href="/" class="link">NFT</a>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="walet">
        <i class="icon"></i>
        <span class="money">$18.814</span>
      </div>
      <div class="earth"></div>
      <div class="setting"></div>
      <div class="contact">Connect Wallet</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav",
  props: {
    msg: String,
  },
  data() {
    return {
      isTop: true,
    };
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
};
</script>
<style lang="less">
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
  vertical-align: center;
  position: relative;

  margin-left: 30px;
  .logo-img {
    width: 36px;
    height: 34px;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.nav {
  padding-top: 14px;
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