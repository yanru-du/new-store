<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false,
      },
      pullDownRefresh: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,     // 是否监听滚动.
        pullUpLoad: this.pullUpLoad,   //是否上拉加载更多
        pullDownRefresh: this.pullDownRefresh,   //是否下滑刷新
      });
      console.log(this.scroll);
      // 监听滚动位置
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      });
      // 是否上拉加载更多
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      });
      // 是否下滑刷新
      this.scroll.on('pullingDown', () => {
        this.$emit('pullingDown')
      });
    },
    methods: {
      // 回到顶部方法
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time)
      },
      // 下拉加载更多叠加使用
      finishPullUp() {
        this.scroll.finishPullUp()
      },
      // 上滑刷新叠加使用
      finishPullDown() {
        this.scroll.finishPullDown();
      },
      //数据加载完之后重新计算高度
      refresh() {
        this.scroll.refresh();
        console.log(this.scroll);
      }
    }
  }
</script>

<style scoped>

</style>
