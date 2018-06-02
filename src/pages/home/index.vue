<template>
  <div class="container">
    <ui-header></ui-header>
    <div class="content-wrap">
      <div class="slide-wrap"></div>
      <div class="twocol-wrap">
        <h2 class="twocol-title">电台</h2>
        <ul class="twocol-list">
          <li class="twocol-item" v-for="(item, index) in radioList" :key="index">
            <a href="" class="twocol-item-main">
              <div class="twocol-item-media">
                <img class="twocol-item-img" :src="item.picUrl" alt="">
                <span class="twocol-item-btn"></span>
              </div>
              <div class="twocol-item-info">
                <h3 class="twocol-item-title">{{item.name}}</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="twocol-wrap">
        <h2 class="twocol-title">热门歌单</h2>
        <ul class="twocol-list">
          <li class="twocol-item" v-for="(item, index) in hotList" :key="index">
            <a href="" class="twocol-item-main">
              <div class="twocol-item-media">
                <img class="twocol-item-img" :src="item.coverImgUrl" alt="">
                <span class="twocol-item-listen">
                  <i class="icon-listen"></i>
                  {{item.playNum}}
                </span>
                <span class="twocol-item-btn"></span>
              </div>
              <div class="twocol-item-info">
                <h3 class="twocol-item-title">{{item.name}}</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {getData} from 'common/js/api'
import uiHeader from '../../components/header'
export default {
  name: 'home',
  components: {
    uiHeader
  },
  data () {
    return {
      radioList: [],
      hotList: []
    }
  },
  mounted () {
    this.initRadio()
    this.initHot()
  },
  methods: {
    initRadio () {
      getData('/api/personalized/djprogram').then(res => {
        this.radioList = res.result.splice(0, 2)
        console.log(this.radioList)
      })
    },
    initHot () {
      getData('/api/top/playlist?order=hot&limit=6').then(res => {
        this.hotList = res.playlists
        this.hotList.forEach(v => {
          const p = v.playCount
          v.playNum = p > 9999 ? `${(p / 10000).toFixed(1)}万` : p
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./index.less" scoped="less"></style>
