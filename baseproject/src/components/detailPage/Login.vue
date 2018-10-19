<template>
    <div class="login-page">
        <div class="top-login">
            <div class="top-login-content">
                <div class="logo fl">
                    LOGO
                </div>
                <div class="welcome fr">
                    您好，欢迎为生活充电在线！
                </div>
            </div>
        </div>
        <div class="login-content">
            <div class="goback">
                <img src="../../assets/images/left.png" alt="">
                <span>返回首页</span>
            </div>
            <div class="login-form">
                <div class="left fl">
                    <el-tabs v-model="tabaActiveName" @tab-click="handleClick">
                        <el-tab-pane label="用户管理" name="first">
                            <div class="Buyer">
                                <div class="user">
                                    <Input prefix="md-person" placeholder="请输入买家用户名" style="width: 260px;height:100px;" />
                                </div>
                                <div class="password">
                                    <Input prefix="ios-contact" placeholder="请输入密码" style="width: 260px;height:100px;" />
                                </div>
                                <div class="out-register-forget">
                                    <div class="register-now fl">立即注册</div>
                                    <div class="forget fr">忘记密码</div>
                                </div>
                                <div class="login-btn">
                                    登录
                                </div>
                            </div>

                        </el-tab-pane>
                        <el-tab-pane label="配置管理" name="second">
                            <div class="Buyer">
                                <div class="user">
                                    <Input prefix="md-person" placeholder="请输入卖家用户名" style="width: 260px;height:100px;"  />
                                </div>
                                <div class="password">
                                    <Input prefix="ios-contact" placeholder="请输入卖家密码" style="width: 260px;height:100px;"  />
                                </div>
                                <div class="out-register-forget">
                                    <div class="register-now fl">立即注册</div>
                                    <div class="forget fr">忘记密码</div>
                                </div>
                                <div class="login-btn">
                                    登录
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>

                </div>
                <div class="right fr">
                    <div class="img-content">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tabaActiveName: "first"
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
 
<style>
.el-tabs__item:hover {
  background-color: #90b831;
  cursor: pointer;
  color: #fff;
  border: none;
}
.el-tabs__item.is-active {
  color: #fff;
  border: none;
  background-color: #90b831;
}
.el-tabs__active-bar {
  background-color: rgba(0, 0, 0, 0);
}
.el-tabs__header {
  margin: 0;
}
</style>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  .top-login {
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    .top-login-content {
      width: 62.5%;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      .logo {
        font-size: 30px;
      }
      .welcome {
        font-size: 14px;
        position: absolute;
        right: 0;
      }
    }
  }
  .login-content {
    width: 1200px;
    margin: 2% auto;
    height: 50%;
    border: 1px solid #ccc;
    //   background-color: pink;
    box-shadow: 2px 2px 3px #ccc;
    .goback {
      height: 16%;
      display: flex;
      // justify-content:center;
      align-items: center;
      font-size: 20px;
      margin-left: 5%;
      img {
        width: 15px;
      }
    }
    .login-form {
      height: 84%;
      width: 100%;
      .left {
        width: 35%;
        height: 100%;
        margin-left:60px;
        // background-color: pink;
        /deep/ .el-tabs {
          width: 80%;
          height: 100%;
          margin: 0 auto;
        //   background-color: pink;
          /deep/ .el-tabs__content {
            width: 100%;
            height: 80%;
            /deep/ #pane-first,
            #pane-second {
              width: 100%;
              height: 100%;
              .Buyer {
                width: 100%;
                height: 100%;
                border: 1px solid #ccc;
               
                .user {
                  width: 70%;
                  height: 40px;
                  margin: 50px auto 30px;

                  /deep/ .ivu-input {
                    height: 50px;
                  }
                  /deep/ .ivu-input-prefix i {
                    font-size: 16px;
                    line-height: 32px;
                    color: #808695;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 8px;
                  }
                }
                .password {
                  width: 70%;
                  height: 40px;
                  margin: 0 auto;
                  /deep/ .ivu-input {
                    height: 50px;
                  }
                  /deep/ .ivu-input-prefix i {
                    font-size: 16px;
                    line-height: 32px;
                    color: #808695;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 8px;
                  }
                }
                .out-register-forget{
                    font-size:12px;
                    width:260px;
                    height: 40px;
                    margin-top:10px;
                    margin-left:50px;
                    line-height: 40px;
                    .register-now{
                        color:red;
                    }
                }
                .login-btn{
                     width:260px;
                    height: 40px;
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    background-color: #90b831;
                    color:#fff;
                     margin-left:50px;
                    border-radius:5px;
                    font-size:16px;
                }
                
              }
            }
           
          }
        }
      }
      .right {
        width: 50%;
        height: 100%;
        display:flex;
        justify-content:center;
        align-items:center;
        .img-content{
            width:507px;
            height: 325px;
            background-image: url('../../assets/images/login-pic.jpg');
            background-size: contain;
        }
      }
    }
  }
}
</style>
