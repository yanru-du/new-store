<template>
  <div class="banner">
    <div class="bannerImg clearfix" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd"
         ref="swiperDiv">
      <swiper-item v-for="(item,index) in banner">
        <div class="bannerItem">
          <!--<a :href="item.link"><img :src="item.image" alt=""></a>-->
          <a href="#"><img :src="item.image" alt=""></a>
        </div>
      </swiper-item>
      <swiper-item v-for="(item,index) in banner">
        <div class="bannerItem">
          <!--<a :href="item.link"><img :src="item.image" alt=""></a>-->
          <a href="#"><img :src="item.image" alt=""></a>
        </div>
      </swiper-item>
    </div>

    <ul class="bannerDot clearfix">
      <li v-for="(item,index) in banner" :class="{active:index === currentIndex}"></li>
    </ul>
  </div>

</template>

<script>
  import swiperItem from './SwiperItem'

  export default {
    name: "swiper",
    data() {
      return {
        currentIndex: 0,    // 当前下标
        distanceIndex: 0,  // 当前图片位移下标
        clientX: 0,     // 手指触摸点
        moveX: 0,      // 手指移动点
        distanceX: 0,  // 图片最终位移
        unit: 10,     // px 与 rem  之间的转化的单位
        clientWidth: 0,  //图片宽度
        len: 0,   // 图片个数
        timer: null, // 图片定时器
      }
    },
    components: {
      swiperItem,
    },
    mounted() {
      this.imgAutoClick();
    },
    props: ['banner'],
    methods: {
      touchStart(e) {
        // 清除定时器
        clearInterval(this.timer)
        // 获取图片宽度和数量
        this.getClientWidthAndLen;
        // 取消动画
        this.$refs.swiperDiv.style.transition = 'none';
        // 获取手机触摸点
        this.clientX = e.touches[0].clientX;
        // 当前照片是第一张时，移动到复制的第一张
        if (this.distanceIndex == 0)
          this.distanceIndex = this.len / 2;
        // 当前照片是最后一张时，移动到第一份的最后一张图片
        if (this.distanceIndex == this.len - 1)
          this.distanceIndex = this.len / 2 - 1;

        this.distanceX = -this.distanceIndex * this.clientWidth;
        this.$refs.swiperDiv.style.transform = `translateX(${this.distanceX}rem)`;
      },
      touchMove(e) {
        // 手指移动的距离
        this.moveX = (e.touches[0].clientX - this.clientX);
        this.distanceX = -this.distanceIndex * this.clientWidth + this.moveX / this.unit;
        //手指移动时当前 swiperDiv 移动
        this.$refs.swiperDiv.style.transform = `translateX(${this.distanceX}rem)`;
      },
      touchEnd() {
        this.getClientWidthAndLen;
        // 判断当前手指滑动的距离是否超过 1/3
        if (Math.abs(this.moveX / this.unit) > this.clientWidth / 4) {
          if (this.moveX < 0)// 左滑
            this.distanceIndex++;
          if (this.moveX > 0) // 右滑
            this.distanceIndex--;
        }
        this.$refs.swiperDiv.style.transition = 'all .3s';
        this.moveCommonHandle();
        //使用定时器
        this.imgAutoClick();
      },
      moveCommonHandle() {
        // 当前的下标始终是图片位移小标 % （长度 / 2）
        this.currentIndex = this.distanceIndex % (this.len / 2)
        this.distanceX = -this.distanceIndex * this.clientWidth;
        this.$refs.swiperDiv.style.transform = `translateX(${this.distanceX}rem)`;
      },
      imgAutoClick() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.$refs.swiperDiv.style.transition = 'all .3s';
          this.getClientWidthAndLen;
          this.distanceIndex++;
          this.$refs.swiperDiv.addEventListener('transitionend',()=>{
            if(this.distanceIndex >= this.len - 1){
              this.distanceIndex = this.len / 2 - 1 ;
              this.$refs.swiperDiv.style.transition = 'none';
              this.moveCommonHandle();
            }
          })
          this.moveCommonHandle();
        }, 2000)
      }

    },
    computed: {
      getClientWidthAndLen() {
        this.clientWidth = (document.documentElement.clientWidth || document.body.clientWidth) / this.unit;
        this.len = this.$refs.swiperDiv.children.length;
      },

    }
  }
</script>

<style scoped>
  .banner {
    margin-top: 4.4rem;
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .banner .bannerImg {
    display: flex;
    width: 800%;
  }

  .banner .bannerImg .bannerItem {
    flex: 1;
  }

  .banner .bannerImg .bannerItem a img {
    width: 100%;
  }

  .banner .bannerDot {
    position: absolute;
    left: 50%;
    bottom: 1rem;
    transform: translateX(-50%);
  }

  .banner .bannerDot li {
    float: left;
    margin-right: .8rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #999;
  }

  .banner .bannerDot .active {
    background-color: #fff;
  }

</style>