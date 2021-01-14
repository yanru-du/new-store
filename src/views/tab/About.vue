<template>
</template>

<script>
  export default {
    name: "about",
    data(){
      return{
        startY:0,    // 手指触摸点
        moveY:0,     // 手指移动的距离
        lastDistanceY:0, // 记录上次滑动的距离
        transition:0, // 动画的距离
        distanceY:0,   // 最终移动的距离
        unit:10,   // px 与 rem  之间的转化
        downDistance:3, // 下拉封顶的距离
        scroolUnit:3 , // 滚动的倍数
        pageHeight:0, //  整个内容的宽度
        contentHeight:0, // 当前窗口高度 -
        liHeight:0,     // 每个内容的高度
      }
    },
    
    methods:{
      touchStart(e){
        // 取消位移特效
        this.$refs.wrapper.style.transition = 'none';
        // 获取移动的距离
        this.transition = parseFloat((this.$refs.wrapper.style.transform).split('(')[1]) || 0;
        // 手指按下的距离
        this.startY = (e.touches[0].pageY).toFixed(2) ;
        //
        this.contentHeight = this.$refs.wrapper.offsetHeight / this.unit;
        var len = this.$refs.wrapper.children.length;
        var liHeight = this.$refs.wrapper.children[0].clientHeight;
        this.pageHeight = len * liHeight / this.unit - parseFloat(this.contentHeight);
        console.log(this.pageHeight);
        // 记录上次移动的位置
        this.lastDistanceY = this.distanceY;
      },
      touchMove(e){
        this.moveY = e.touches[0].pageY - this.startY;
        this.distanceY = this.transition + this.moveY / this.unit;
        // 下拉封顶
        if(this.distanceY > this.downDistance)
          return;
        // // 上滑封顶
        // if(this.distanceY / this.pageHeight > -0.6 && this.distanceY / this.pageHeight < 0)
        //   return;
        // 下滑封顶
        console.log(this.distanceY,this.pageHeight);
        if(Math.abs(this.distanceY) > this.pageHeight)
          return;
        // 手指移动的距离
        this.$refs.wrapper.style.transition = 'none';
        this.$refs.wrapper.style.transform=`translateY(${this.distanceY}rem)`;
      },
      touchEnd(){
        // 下拉封顶手指放开
        if( this.distanceY > 0 ){
          this.distanceY = 0;
          console.log("上拉请求数据");
        }

        // 计算页面滚动的距离，当距离大于 0 时，让距离变少
        this.distanceY = this.transition + (this.distanceY - this.lastDistanceY) * this.scroolUnit;
        if(this.distanceY > 0){
          this.distanceY = this.downDistance - 1;
          // console.log("上拉请求数据");
        }
        if(this.distanceY < -this.pageHeight){
          this.distanceY = -(this.pageHeight + this.downDistance);
          console.log("下拉请求数据");
        }

        this.$refs.wrapper.addEventListener('transitionend',()=>{
          let distanceY = parseFloat((this.$refs.wrapper.style.transform).split('(')[1]);
          // 上拉封顶
          if(distanceY > 0)
            this.distanceY = 0;
          // 下拉封顶
          if(this.distanceY < -this.pageHeight)
            this.distanceY = -this.pageHeight;
          // 移动动画
          this.$refs.wrapper.style.transition = 'all .5s';
          this.$refs.wrapper.style.transform = `translateY(${this.distanceY }rem)`;
          return;
        });
        this.$refs.wrapper.style.transition = 'all .5s';
        this.$refs.wrapper.style.transform = `translateY(${this.distanceY }rem)`
      },
    },
  }
</script>

<style scoped>
.wrapper{
  padding: 1rem;
  font-size: 1.6rem;
  width: 100%;
  height: 50rem ;
  overflow: hidden;
  background-color: red;

}
  .wrapper .content{
    padding: 1rem;
    margin-top: 1rem;
    height: 100%;
  }
</style>