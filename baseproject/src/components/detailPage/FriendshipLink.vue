<template>
    <div class="friendship-link">
        <div class="left-title">
            友<br>情<br>链<br>接
        </div>
        <div class="right-logo">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
            <img src="../../assets/images/34.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.friendship-link {
  width: 100%;
  height: 100%;
  border: 5px solid #90b830;
  .left-title {
    width: 4%;
    height: 100%;
    float: left;
    background-color: #90b830;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right-logo {
    width: 96%;
    height: 100%;
    float: left;
    background-color: pink;
    img{
        width:9%;
        float: left;
        height: 40%;
        float: left;
    }
  }
}
</style>
