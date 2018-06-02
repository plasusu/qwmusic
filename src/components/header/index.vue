<template>
  <div class="container">
    <header class="header">
      <i class="header-logo"></i>
    </header>
    <div class="nav">
      <router-link tag="a" class="nav-item" to="/home">推荐</router-link>
      <router-link tag="a" class="nav-item" to="/rank">排行榜</router-link>
      <router-link tag="a" class="nav-item" to="/search">搜索</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.header {
    position: relative;
    height: 44px;
    background: #31c27c;

    .header-logo {
        float: left;
        display: block;
        width: 90px;
        height: 25px;
        margin: 9px 0 0 10px;
        background-image: url(https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423);
        background-size: cover;
        background-repeat: no-repeat;
        text-indent: -9999px;
    }
}

.nav {
    display: flex;
    background: #fff;

    .nav-item {
        flex: 1;
        position: relative;
        display: block;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        text-align: center;
        font-size: 16px;
        color: rgba(0,0,0,.6);

        &.active {
            color: #31c27c;

            &:after {
                content: "";
                display: block;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: #31c27c;
            }
        }
    }
}
</style>
