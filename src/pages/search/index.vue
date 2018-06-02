<template>
  <div class="container">
    <ui-header></ui-header>
    <div class="content-wrap">
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
      radioList: [],
      hotList: []
    }
  },
  mounted () {
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
