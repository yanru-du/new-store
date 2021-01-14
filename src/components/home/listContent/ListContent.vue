<template>
  <list-content-item>{{contentList}}</list-content-item>
</template>

<script>
  import listContentItem from './ListContentItem'
  export default {
    name: "list",
    props:['contentList'],
    components:{
      listContentItem,
    },
  }
</script>

<style scoped>

</style>