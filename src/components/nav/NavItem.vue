<template>
 <div class="navItem">
   <div class="navLeft"><slot name="navLeft"></slot></div>
   <div class="navCenter"><slot name="navCenter"></slot></div>
   <div class="navRight"><slot name="navRight"></slot></div>
 </div>
</template>

<script>
  export default {
    name: "nav-item"
  }
</script>

<style scoped>
  .navItem{
    display: flex;
    align-items: center;
    width: 100%;
    height: 4.4rem;
  }
  .navItem>div{
    height: 100%;
    text-align: center;
    line-height:  4.4rem;
  }
  .navLeft,.navRight{
    width: 20%;
  }
  .navCenter{
    flex: 1;
  }
</style>