<template>
  <div class="tab" >
    <!--要添加 tab  的内容只需将 tab-item  复制一份放到下面即可，将路由和图片改变就好-->
    <tab-item link="/home">
      <template v-slot:tabImg><img src="~assets/img/tab/home.png" alt=""></template>
      <template v-slot:tabImgActive><img src="~assets/img/tab/homeActive.png" alt=""></template>
      <template v-slot:tabText>首页</template>
    </tab-item>
    <tab-item link="/about">
      <template v-slot:tabImg><img src="~assets/img/tab/about.png" alt=""></template>
      <template v-slot:tabImgActive><img src="~assets/img/tab/aboutActive.png" alt=""></template>
      <template v-slot:tabText>关于</template>
    </tab-item>
    <tab-item link="/car">
      <template v-slot:tabImg><img src="~assets/img/tab/car.png" alt=""></template>
      <template v-slot:tabImgActive><img src="~assets/img/tab/carActive.png" alt=""></template>
      <template v-slot:tabText>购物车</template>
    </tab-item>
    <tab-item link="/profile">
      <template v-slot:tabImg><img src="~assets/img/tab/profile.png" alt=""></template>
      <template v-slot:tabImgActive><img src="~assets/img/tab/profileActive.png" alt=""></template>
      <template v-slot:tabText>我的</template>
    </tab-item>
  </div>

</template>

<script>
  import tabItem from './TabItem'
  export default {
    name: "tab",
    components:{
      tabItem
    }
  }
</script>

<style scoped>
  .tab{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 4.9rem;
    background-color: #e9e9e9;
    font-size: 1.4rem;
  }
 img{
    width: 2rem;
  }
</style>