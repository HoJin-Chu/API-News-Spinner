<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>

    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner'
import bus from './utils/bus'

export default {
  components: {
    ToolBar,
    Spinner
  },
  data(){
    return {
      loadingStatus:false
    }
  },
  methods:{
    startSpinner(){
      this.loadingStatus = true
    },
    endSpinner(){
      this.loadingStatus = false
    }
  },
  // 이벤트 버스의 경우 종료를 시켜주지않으면 쌓이기떄문에 off 를 꼭해줘야함
  created(){
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
  body{
    padding:0;
    margin: 0;
  }
  a{
    color:#34495e;
    text-decoration: none;
  }
  a .router-link-exact-active{
    text-decoration: underline;
  }
  a:hover{
    color:#42b883;
    text-decoration: underline;
  }

  /* Router Transition */
  .page-enter-active, .page-leave-active {
  transition: opacity .5s;
  }
  .page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>