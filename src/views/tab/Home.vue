<template>
  <div id="home">
    <nav-bar/>
    <swiper :banner="banner"/>
    <recommend-list :recommend="recommend"></recommend-list>
    <tab :tab="['流行','新款','精选']" @listContentTypeHandle="listContentTypeHandle"></tab>
    <list-content :contentList="getContentListType"></list-content>
  </div>
</template>

<script>
  import navBar from 'components/nav/NavBar';
  import swiper from 'components/swiper/Swiper';
  import recommendList from 'components/home/recommend/recommendList';
  import tab from 'components/home/tab/Tab';
  import listContent from 'components/home/listContent/ListContent'

  import {getMultidata,getListContent} from "network/home";
  export default {
    name: "home",
    data() {
      return{
        banner:[],
        recommend:[],
        listContent:{
         'pop':{page:1,list:[]},
         'new':{page:1,list:[]},
         'sell':{page:1,list:[]},
        },
        currentType:'pop',
      }
    },
    components: {
      navBar,
      swiper,
      recommendList,
      tab,
      listContent,
    },
    created() {
      // 获取轮播图数据
     this.getMultidataHandle();
      // 获取列表数据
      this.getListContentHandle('pop',this.listContent['pop'].page);
    },
    methods:{
      // 获取轮播图数据
      getMultidataHandle(){
        getMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list
        })
      },
      // 获取列表数据
      getListContentHandle(type,page){
        getListContent(type,page).then(res =>{
          console.log(res);
          // 下拉加载更多时再 page ++
          // this.listContent[type].page += 1;
        })
      },
      // 获取列表类型
      listContentTypeHandle(index){
        switch(index){
          case 0: this.currentType = 'pop'; break;
          case 1: this.currentType = 'new'; break;
          case 2: this.currentType = 'sell'; break;
        }
        console.log(this.currentType);
        // 在获取数据
        this.listContent[this.currentType].page = 1 ;
        this.getListContentHandle(this.currentType,  this.listContent[this.currentType].page )
      },
    },
    computed:{
      // 获取当前接口类型
      getContentListType(){
        return this.listContent[this.currentType]
      }
    },

  }
</script>

<style scoped>
  #home {
    font-size: 1.6rem;
  }
</style>