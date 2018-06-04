<template>
  <div class="container">
    <ui-header></ui-header>
    <div class="content-wrap">
      <div class="search-wrap">
        <div class="search-bar">
          <i class="iconfont search-icon">&#xe651;</i>
          <input class="search-input" type="text" placeholder="搜索歌曲、歌单、专辑">
        </div>
        <div class="search-cancel">取消</div>
      </div>
      <div class="hot-search">
        <h3 class="hot-title">热门搜索</h3>
        <div class="hot-tag-wrap">
          <a v-for="(item, index) in hotList" :key="index" href="" class="hot-tag">{{item.first}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getData} from 'common/js/api'
import uiHeader from '../../components/header'
export default {
  name: 'search',
  components: {
    uiHeader
  },
  data () {
    return {
      hotList: []
    }
  },
  mounted () {
    this.initHot()
  },
  methods: {
    initHot () {
      getData('/api/search/hot').then(res => {
        this.hotList = res.result.hots.splice(0, 9)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./index.less" scoped="less"></style>
