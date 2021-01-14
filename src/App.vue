<template>
  <div id="app">
    <tab/>
    <router-view/>
    <loading/>
  </div>
</template>

<script>
  import tab from 'components/tab/Tab';
  import loading from 'components/loading/Loading';

  export  default {
    components:{
      tab,
      loading,
    }
  }
</script>

<style lang="less">
  @import 'assets/css/base.css';
</style>
