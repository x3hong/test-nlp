<template>
  <div class="nav">
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
  </div>
</template>
<script>
export default {
  name: "Nav",
  props: {
    msg: String,
  },
};
</script>
<style lang="less">
.logo {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: #000000;
  vertical-align: center;
  position: relative;
  .logo-img {
    width: 17px;
    height: 17px;
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
  transition: top 0.2s ease 0s;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: #46369c;
  border-bottom: 1px solid #46369c;
  z-index: 20;
  transform: translate3d(0px, 0px, 0px);
  padding-left: 16px;
  padding-right: 16px;
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
        font-family: Arial Black;
        font-weight: 400;
        text-decoration: none;
        color: #ffffff;
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
        top: 4px;
        .link {
          color: #33f8ff;
        }
      }
      &.nft {
        .link {
          height: 34px;
          width: 70px;
        }
      }
      .link {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(122, 110, 170);
        font-size: 16px;
        font-weight: 400;
        padding: 0px 16px;
        text-decoration: none;
        height: 48px;
      }
    }
  }
}
</style>