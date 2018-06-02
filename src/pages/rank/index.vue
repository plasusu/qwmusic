<template>
  <div class="container">
    <ui-header></ui-header>
    <div class="content-wrap">
       <ul>
         <li class="rank-item" v-for="(item, index) in rankList" :key="index">
           <div class="item-box">
             <a href="" class="item-media">
               <img :src="item.playlist.coverImgUrl" alt="" class="item-media-img">
               <span class="twocol-item-listen">
                  <i class="icon-listen"></i>
                  {{item.playlist.playNum}}
                </span>
             </a>
             <div class="item-info">
               <div class="info-content">
                <h3 class="info-title">{{item.playlist.name}}</h3>
                <p v-for="(it, i) in item.playlist.tracks" :key="i" v-if="i < 3">
                  {{i+1}}
                  <span class="info-name">{{it.name}}</span>
                  - {{it.ar[0].name}}
                </p>
               </div>
               <i class="info-arrow"></i>
             </div>
           </div>
         </li>
       </ul>
    </div>
  </div>
</template>

<script>
import {getData} from 'common/js/api'
import uiHeader from '../../components/header'
export default {
  name: 'rank',
  components: {
    uiHeader
  },
  data () {
    return {
      rankList: []
    }
  },
  mounted () {
    this.initRadio()
  },
  methods: {
    initRadio () {
      const length = 23
      const promise = []
      for (let i = 0; i <= length; i++) {
        promise.push(getData(`/api/top/list?idx=${i}`))
      }

      Promise.all(promise).then(res => {
        this.rankList = res
        this.rankList.forEach(v => {
          const p = v.playlist.playCount
          v.playlist.playNum = p > 99999999 ? `${(p / 100000000).toFixed(1)}亿`
            : (p > 9999 ? `${(p / 10000).toFixed(1)}万` : p)
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./index.less" scoped="less"></style>
