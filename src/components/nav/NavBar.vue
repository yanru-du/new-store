<template>
  <nav-item class="navCenterColor">
    <template v-slot:navCenter>购物街</template>
  </nav-item>
</template>

<script>
  import navItem from './NavItem'
  export default {
    name: "nav-bar",
    components:{
      navItem
    }
  }
</script>

<style scoped>
.navCenterColor{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index:666;
  color: #fff;
  background-color: #ff5777 ;
  font-size: 1.8rem;
}
</style>