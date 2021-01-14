<template>
  <div class="recommend">
    <list-item v-for="(item,index) in recommend"><a  class="recommendList"><img :src="item.image" alt=""><p>{{item.title}}</p></a></list-item>
  </div>

</template>

<script>
  import listItem from './recommendList'
  export default {
    name: "list",
    props:['recommend'],
    components:{
      listItem,
    }
  }
</script>

<style scoped>
  .recommend{
    padding: 1rem 0;
    display: flex;
    width: 100%;
  }
  .recommendList{
    flex: 1;
    display: block;
    text-align: center;
  }
  .recommendList img{
    margin-bottom: 1rem;
    width: 80%;
  }
</style>