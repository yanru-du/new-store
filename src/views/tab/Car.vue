<template>
  <div>
    <!--注意是给组件添加高度-->
    <scroll class="wrapper" ref="scroll" :probeType="3" @scroll="scroll" @pullingUp="pullingUp" :pullUpLoad="true" @pullingDown="pullingDown" :pullDownRefresh="true">
      <ul>
        <li v-for="item in data">{{item}}</li>
      </ul>
    </scroll>
    <div class="top" v-if="isShowTopIcon" @click="scrollToTop">
      ↑
    </div>
  </div>
</template>

<script>
  import scroll from 'components/bscroll/BScroll'
  export default {
    name: "car",
    data(){
      return{
        scrollNumber:"60",
        isShowTopIcon:false,
        data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,]
      }
    },
    components:{
      scroll,
    },
    methods:{
      // 回到顶部按钮显示
      scroll(position){
        return -position.y > this.scrollNumber ? this.isShowTopIcon = true : this.isShowTopIcon = false
      },
      // 回到顶部
      scrollToTop(){
        this.$refs.scroll.scrollTo(0,0,500);
      },
      // 是否上拉加载更多
      pullingUp(){
        console.log('下拉加载更多');
        // 重新计算高度
        // this.$refs.scroll.refresh();
        //数据加载完成之后还要调用 finishPullUp 这个函数，一边下次可以继续
        this.$refs.scroll.finishPullUp();
      },
      // 是否下滑刷新
      pullingDown(){
        console.log('是否上滑刷新');
        this.$refs.scroll.finishPullDown();
        // this.$refs.scroll.refresh();
      },
    },
    wacth:{
      data(){
        this.$nextTick(()=>{
          this.$refs.scroll.refresh();
        })
      }
    },
  }
</script>

<style scoped>
  .wrapper{
    height: 40rem;
    background-color: yellow;
    overflow: hidden;
  }
  .top{
    position: fixed;
    right: 1rem;
    bottom: 5rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: blue;
    color: #fff;
    text-align: center;
    line-height: 4rem;
    font-size: 2.6rem;
  }
</style>