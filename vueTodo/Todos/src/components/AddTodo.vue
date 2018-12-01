<template>

  <header class="header">
    <h1>todos</h1>
    <input type="text" v-model="content" @keyup.enter="add(content);content=''" placeholder="what need to be done?" class="new-todo">
  </header>
</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
        name: "AddTodo",
       data:function(){
          //return{}
          return {
             content:''
          }
       },
      methods:{
        ...mapMutations(["add"])
      }
    }
</script>

<style scoped>

</style>
