<template>
  <div class="content-box">
    <div class="swiper-container">
      <el-carousel :interval="5000" :autoplay="false" arrow="always">
        <el-carousel-item>
          <img src="../assets/images/ad-1.jpg" alt="">
        </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/ad-2.jpg" alt="">
        </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/images/ad-1.jpg" alt="">
        </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/images/ad-2.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-category">
      <div class="product-category-left">
        <div class="title">
          <Icon type="ios-list" size="30" />
          <span>所有商品分类</span>
        </div>
        <div class="info">
          <div class="Sample-tea">
            <div class="title"><i class="el-icon-arrow-left" size="24"></i>茶品类</div>
            <p class="info-detail">
              <span>茅台</span>
              <span>五粮液</span>
              <span>郎酒</span>
              <span>剑南春</span>
              <span>茅台</span>
              <span>茅台</span>
              <span>五粮液</span>
              <span>郎酒</span>
            </p>
          </div>
          <div class="Sample-tea">
            <div class="title"><i class="el-icon-arrow-left" size="24"></i>茶品类</div>
            <p class="info-detail">
              <span>茅台</span>
              <span>五粮液</span>
              <span>郎酒</span>
              <span>剑南春</span>
              <span>茅台</span>
              <span>茅台</span>
              <span>五粮液</span>
              <span>郎酒</span>
            </p>
          </div>
          <div class="Sample-tea">
            <div class="title"><i class="el-icon-arrow-left" size="24"></i>茶品类</div>
            <p class="info-detail">
              <span>茅台</span>
              <span>五粮液</span>
              <span>郎酒</span>
              <span>剑南春</span>
              <span>茅台</span>
              <span>茅台</span>
              <span>五粮液</span>
              <span>郎酒</span>
            </p>
          </div>
          <div class="Sample-tea">
            <div class="title"><i class="el-icon-arrow-left" size="24"></i>茶品类</div>
            <p class="info-detail">
              <span>茅台</span>
              <span>五粮液</span>
              <span>郎酒</span>
              <span>剑南春</span>
              <span>茅台</span>
              <span>茅台</span>
              <span>五粮液</span>
              <span>郎酒</span>
            </p>
          </div>
        </div>
      </div>
      <div class="product-cagegory-right">
        <div class="top-nav">
          <div class="new-product">新品上市</div>
          <div class="Super-value-special-benefit">超值特惠</div>
          <div class="group-purchase">本期团购</div>
          <div class="Product-selection">产品精选</div>
          <div class="take-the-first-step">抢先一步</div>
        </div>

        <div class="product-scroll">
          <div id="bscroll" ref="bscroll">
            <div class="bscroll-container">
              <!-- <div class="out">
                <div class="product">
                  <img src="../assets/images/p_19.jpg" alt="">
                  <div class="info">
                    <div class="detail">
                      <p>乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                    </div>
                    <div class="price">￥23.00</div>
                  </div>
                </div>
                <div class="product">
                  <img src="../assets/images/p_19.jpg" alt="">
                  <div class="info">
                    <div class="detail">
                      <p>乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                    </div>
                    <div class="price">￥23.00</div>
                  </div>
                </div>
                <div class="product">
                  <img src="../assets/images/p_19.jpg" alt="">
                  <div class="info">
                    <div class="detail">
                      <p>乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                    </div>
                    <div class="price">￥23.00</div>
                  </div>
                </div>
                <div class="product">
                  <img src="../assets/images/p_19.jpg" alt="">
                  <div class="info">
                    <div class="detail">
                      <p>乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                    </div>
                    <div class="price">￥23.00</div>
                  </div>
                </div>
                <div class="product">
                  <img src="../assets/images/p_19.jpg" alt="">
                  <div class="info">
                    <div class="detail">
                      <p>乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                    </div>
                    <div class="price">￥23.00</div>
                  </div>
                </div>
                <div class="product">
                  <img src="../assets/images/p_19.jpg" alt="">
                  <div class="info">
                    <div class="detail">
                      <p>乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                    </div>
                    <div class="price">￥23.00</div>
                  </div>
                </div>
              </div> -->
              pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  mounted() {
    var bscrollDom = document.getElementById("bscroll");
    let scroll = new BScroll(bscrollDom, {
      //options
      startX: 0,
      startY: 0
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
  width: 100%;

  /deep/ .el-carousel {
    height: 450px;
    /deep/ .el-carousel__container {
      height: 450px;
      /deep/ .el-carousel__item {
        height: 450px;
        img {
          height: 450px;
        }
      }
    }
    /deep/ .el-carousel__indicators {
      /deep/ .el-carousel__indicator {
        /deep/ .el-carousel__button {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #000;
        }
      }
      /deep/ .el-carousel__indicator,
      .is-active {
        /deep/ .el-carousel__button {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: red !important;
        }
      }
    }
  }
}
.product-category {
  width: 1200px;
  height: 590px;
  margin: 0 auto;
  .product-category-left {
    float: left;
    width: 220px;
    height: 590px;
    border: 1px solid #90b830;
    .title {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      color: #fff;
      background-color: #90b830;
      /deep/ .ivu-icon {
        color: #fff;
      }
    }
    .info {
      height: 550px;
      padding: 10px;
      .Sample-tea {
        height: 100px;
        .title {
          height: 30px;
          font-size: 16px;
          color: #333;
          background-color: #fff;
        }
        .info-detail {
          color: #666;
          text-indent: 2em;
          height: 30px;
          line-height: 30px;
          span {
            padding: 0 5px;
            margin: 5px 0;
            border-right: 5px;
            border-right: 1px solid #666;
          }
        }
      }
    }
  }
  .product-cagegory-right {
    float: left;
    width: 953px;
    height: 590px;
    background-color: pink;
    .top-nav {
      height: 40px;
      line-height: 40px;
      border-top: 2px solid #ff9933;
      border-bottom: 1px solid #ccc;
      div {
        width: 190px;
        float: left;
        height: 38px;
        text-align: center;
        border-right: 1px solid #ccc;
      }
      div:hover {
        background-color: #ff9933;
      }
    }
    .product-scroll {
      width: 955px;
      height: 236px;
      // background-color: pink;
      overflow: hidden;
      #bscroll {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .bscroll-container {
          width: 100%;
          height: 100%;
          .out {
            .product {
              width: 194px;
              height: 236px;
              background-color: pink;
              float: left;
              img {
                width: 194px;
                height: 159px;
              }
              .info {
                height: 77px;
                width: 194px;
                .detail {
                  height: 34px;
                  width: 194px;
                  font-size: 12px;
                  p {
                    height: 17px;
                    line-height: 17px;
                  }
                }
                .price {
                  height: 21px;
                  line-height: 21px;
                  color: red;
                  font-size: 16px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
