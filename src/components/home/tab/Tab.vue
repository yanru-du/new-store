<template>
  <div class="homeTab">
    <div class="homeTabItem" v-for="(item, index) in tab" @click="listContentHandle(index)">
      <span :class="{active:index === currentIndex}">
        {{item}}
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "tab",
    data() {
      return {
        currentIndex: 0,
      }
    },
    props: {
      tab: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods:{
      listContentHandle(index){
        this.currentIndex = index;
        this.$emit('listContentTypeHandle',index)
      }
    },
  }
</script>

<style scoped>
  .homeTab {
    position: sticky;
    top: 4.4rem;
    display: flex;
    height: 4.4rem;
    line-height: 4.4rem;
    background-color: #fff;
  }

  .homeTabItem {
    flex: 1;
    text-align: center;
  }

  .active {
    padding: 0.5rem .5rem;
    color: red;
    border-bottom: solid .2rem red;
  }
</style>