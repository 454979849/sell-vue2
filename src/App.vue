<template>
  <div id="app">
    <div class="header">
      <vHeader :seller="seller"></vHeader>
    </div>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link :to="{path:'/goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'/seller'}">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import {urlParse} from './common/js/util.js'
  import header from './components/header/header'
  export default {
    created() {
      this.$http.get('/api/seller?id=' + this.seller.id).then((res) => {
        res = res.body;
//        this.seller = res.data;
        this.seller = Object.assign({}, this.seller, res.data);
        console.log(this.seller.id);
      })
    },
    data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            console.log(queryParam);
            return queryParam.id;
          })()
        }
      }
    },
    components: {
      vHeader: header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin"
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)
</style>
