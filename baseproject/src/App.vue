<template>
  <div id="app">
    <div class="top">
      <div class="top-content">
        <div class="login-register fl">
          <span>请登陆</span>
          <span>请注册</span>
        </div>
        <div class="top-content-right fr">
          <div>首页</div>
          <div>我的小充</div>
          <div>消息中心</div>
          <div>商品分类</div>
          <div class="cart">我的购物车<em>(23)</em></div>
        </div>
      </div>
    </div>
    <div class="header type-page">
      <div class="logo fl">
        <img src="./assets/images/logo.png" alt="">
      </div>
        <div class="search-box fl">
          <div class="search-top clearfix">
            <div class="product">产品</div>
            <div class="info">信息</div>
          </div>
          <div class="search-input clearfix">
            <input type="text" placeholder="请输入搜索内容">
            <div class="btn">搜索</div>
          </div>
          <div class="search-keywords">
            <span>茶叶</span>
            <span>草莓</span>
            <span>葡萄</span>
            <span>菜油</span>
          </div>
        </div>
        <div class="shopping-cart fr">
          <el-badge :value="12" class="item">
            <el-button size="small">我的购物车</el-button>
            <i class="el-icon-arrow-right"></i>
          </el-badge>
        </div>
      </div>
      <div class="nav">
        <div class="nav-content type-page">
          <div :class="{'active-nav':this.navActiveIndex==='a'}" @click="navtab1()">首页</div>
          <div class="living-circle" :class="{'active-nav-more':this.navActiveIndex==='b'}" @click="navtab2()">
            <span class="circle"></span>
            半小时生活圈
            </div>
          <div :class="{'active-nav':this.navActiveIndex==='c'}" @click="navtab3()">你身边的超市</div>
          <div :class="{'active-nav':this.navActiveIndex==='d'}" @click="navtab4()">预售专区</div>
          <div :class="{'active-nav':this.navActiveIndex==='e'}" @click="navtab5()">商城</div>
          <div :class="{'active-nav':this.navActiveIndex==='f'}" @click="navtab6()">好评商户</div>
          <div :class="{'active-nav':this.navActiveIndex==='g'}" @click="navtab7()">热销活动</div>
          <div :class="{'active-nav':this.navActiveIndex==='h'}" @click="navtab8()">联系我们</div>
        </div>
      </div>
      <router-view />
    </div>

</template>

<script>
export default {
  data () {
    return {
      navActiveIndex: 'a'
    }
  },
  mounted () {},
  methods: {
    navtab1 () {
      // alert ("我是")
      this.navActiveIndex = 'a'
    },
    navtab2 () {
      this.navActiveIndex = 'b'
    },
    navtab3 () {
      this.navActiveIndex = 'c'
    },
    navtab4 () {
      this.navActiveIndex = 'd'
    },
    navtab5 () {
      this.navActiveIndex = 'e'
    },
    navtab6 () {
      this.navActiveIndex = 'f'
    },
    navtab7 () {
      this.navActiveIndex = 'g'
    },
    navtab8 () {
      this.navActiveIndex = 'h'
    }
  }
}
</script>

<style lang="scss">
@import "./assets/css/common.css";
#app {
  .top {
    height: 30px;
    border-bottom: 1px solid #ccc;
    line-height: 30px;
    background-color: #ededed;
    .top-content {
      width: 1200px;
      margin: 0 auto;
      .login-register {
        span {
          padding: 0 5px;
        }
      }
      .top-content-right {
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        .cart {
          em {
            color: #ff007b;
          }
        }
        div {
          // color:red;
          float: right;
          padding: 0 5px;
          height: 16px;
          line-height: 16px;
          border-right: 1px solid #ccc;
        }
      }
    }
  }
  .header {
    height: 100px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    font-size: 16px;
    position: relative;
    .logo {
      height: 100px;
      width: 200px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .search-box {
      height: 100px;
      width: 552px;
      margin-left: 140px;
      .search-top {
        float: left;
        height: 30px;
        .product,
        .info {
          float: left;
          width: 60px;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }
        .product {
          background-color: #90b830;
          color: #fff;
        }
        .info {
          background-color: #fff;
          color: #666;
        }
      }
      .search-input {
        height: 50px;
        width: 552px;
        border: 2px solid #90b830;
        margin-top: 30px;
        input {
          float: left;
          width: 452px;
          height: 46px;
          line-height: 46px;
          padding-left: 30px;
        }
        .btn {
          float: left;
          width: 96px;
          height: 46px;
          line-height: 46px;
          text-align: center;
          background-color: #90b830;
          font-size: 20px;
        }
      }
      .search-keywords {
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #959595;
        span {
          padding-right: 20px;
        }
      }
    }
    .shopping-cart {
      position: absolute;
      right: 0;
      float: right;
      background-image: url("./assets/images/homecart.png");
      width: 193px;
      height: 42px;
      // margin-top:29px;
      /deep/ .el-badge {
        position: absolute !important;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        .el-button {
          background-color: rgba(0, 0, 0, 0);
          border: none;
          color: #fff;
          font-size: 16px;
        }
        .el-icon-arrow-right {
          color: #fff;
        }
      }
    }
  }
  .nav {
    height: 40px;
    width: 100%;
    background-color: #90b830;
    margin-top: 20px;
    .nav-content {
      width: 1200px;
      margin: 0 auto;
      div {
        float: left;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        background-color: #90b830;
        color: #fff;
      }
    }
  }
}
/deep/ .el-button--small,
.el-button--small.is-round {
  padding: 9px 3px;
}
.active-nav {
  background-color: #fb914a!important;
}
</style>
