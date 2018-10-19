<template>
    <div class="product-store">
        <div class="top-nav">
            <em></em>
            <router-link to="/HelloWorld">
                <span>首页</span>
            </router-link>
            <img src="../../assets/images/left.png" alt="">
            <router-link to="/HelloWorld">
                <span>公共产品库</span>
            </router-link>
        </div>
        <div class="search-content">
            <input type="text" placeholder="输入搜索关键字" class="search-product fl">
            <span class="first-cate fl">一级分类:</span>
            <el-select v-model="value1" placeholder="请选择" class="fl">
                <el-option v-for="item in firstCategory" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <span class="fl">二级分类:</span>
            <el-select v-model="value2" placeholder="请选择" class="fl">
                <el-option v-for="item in secondCategory" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select><span class="fl">三级分类:</span>
            <el-select v-model="value3" placeholder="请选择" class="fl">
                <el-option v-for="item in thirdCategory" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <div class="search-btn fl">搜索</div>
        </div>
        <div class="navbar">
            <div class="comprehensive nav-item">
                综合
            </div>
            <div class="creadit nav-item">
                信用
            </div>
            <div class="price nav-item">
                价格
            </div>
            <div class="sales-volume nav-item">
                销量
            </div>
            <div class="right-nav nav-item2">
                1/12
            </div>
        </div>
        <div class="nav-list-product">
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>
            <div class="product-item">
                <img src="../../assets/images/P_1.jpg" alt="">
                <p class="description">乐事 无限薯片三连装（原味+番茄+烤肉）104g*3/组</p>
                <p class="title">三只松鼠旗舰店</p>
                <div class="add-btn">加入店铺</div>
            </div>

        </div>
        <div class="paging">
            <div class="start">首页</div>
            <Page :total="100" prev-text="上一页" next-text="下一页" />
            <div class="end">尾页</div>
        </div>
    </div>
</template>

<script>
// 分页功能
//    iview的page组件，有一个on-change方法会返回页码，把得到的页码传递给后台，返回对应的数据，点击上一页的时候让页码自减，点击下一页的时候让页码自增，注意
// 页码小于或等于0的时候自减无效，页码大于最大页码的时候自增无效，点击首页的时候，让页码
// 变为0,点击尾页的时候，让页码变为最大值  

// 搜索功能
//    1，搜索功能的实现，先传入搜索的关键字，得到与关键字相关的所有内容，如果没有输入关键字就是搜索框为空的时候，默认搜索所有的内容；
// 得到的内容需要分页，这个时候传入页码就可以了。及实现搜索共能和分页功能传入两个参数 搜索关键字 页码即可
export default {
  data() {
    return {
      value1: 1,
      value2: 2,
      value3: 3,
      firstCategory: [
        { value: 1, label: "水果" },
        { value: 2, label: "蔬菜" },
        { value: 3, label: "肉类" },
        { value: 4, label: "干粮" },
        { value: 5, label: "鱼类" }
      ],
      secondCategory: [
        { value: 1, label: "水果" },
        { value: 2, label: "蔬菜" },
        { value: 3, label: "肉类" },
        { value: 4, label: "干粮" },
        { value: 5, label: "鱼类" }
      ],
      thirdCategory: [
        { value: 1, label: "水果" },
        { value: 2, label: "蔬菜" },
        { value: 3, label: "肉类" },
        { value: 4, label: "干粮" },
        { value: 5, label: "鱼类" }
      ]
    };
  }
};
</script>

<style>
.product-store .search-content input {
  width: 160px !important;
  height: 30px !important;
}
</style>

<style lang="scss" scooped>
.product-store {
  width: 1200px;
  height: 1200px;
  margin: 0 auto;
  .top-nav {
    height: 50px;
    display: flex;
    align-items: center;
    em {
      display: block;
      background: url("../../assets/images/indexhead_sprite.png") right -440px;
      width: 28px;
      height: 28px;
      float: left;
    }
    img {
      width: 10px;
      height: 10px;
    }
  }
  .search-content {
    display: flex;
    align-items: center;
    margin: 20px 0;
    input {
      width: 260px;
      height: 30px;
    }
    .search-btn {
      width: 60px;
      height: 30px;
      background-color: #90b830;
      color: #fff;
      float: left;
      margin-left: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      font-size: 14px;
    }
  }
  .navbar {
    height: 42px;
    width: 1200px;
    background-color: #f3f3f3;
    border: 1px solid #ccc;
    .nav-item,
    .nav-item2 {
      float: left;
      width: 60px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #ccc;
    }
    .nav-item2 {
      float: right;
      border: none;
      border-left: 1px solid #ccc;
    }
  }
  .nav-list-product {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .product-item {
      width: 220px;
      height: 340px;
      margin: 10px;
      float: left;
      img {
        width: 218px;
        height: 220px;
      }
      .description {
        height: 20px;
        display: flex;
        align-items: center;
      }
      .title {
        height: 40px;
        display: flex;
        align-items: center;
        color: #666666;
        font-size: 14px;
      }
      .add-btn {
        width: 107px;
        height: 32px;
        background-color: #90b830;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .product-item:hover {
      //   box-shadow:2px 2px 2px #aaa;
      border: 1px solid #ccc;
    }
  }
  .paging {
    width: 600px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .start {
      float: left;
    }
    /deep/ .ivu-page {
      float: left;
      margin: 0 20px;
      /deep/ .ivu-page-item-active {
        border: none;
        background-color: red;
      }
      /deep/ .ivu-page-item:hover{
         border:none;
         background-color: red;
      }
    }
    .end {
      float: left;
    }
  }
}
</style>
