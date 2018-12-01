<template>
  <div id="app">
    <section class="todoapp">
      <add-todo></add-todo>
      <section class="main" style="">
        <input type="checkbox" class="toggle-all"  @click="toggleAllTodo(!isAllDone)" :checked="isAllDone">
        <ul class="todo-list">
          <list-todo   :class="{completed:item.do}" v-for="item in filterTodo" :todo="item"></list-todo>

        </ul>
      </section>

      <footer class="footer" >
        <span class="todo-count"><strong>{{UnFinshed}}</strong> items left</span>
        <ul class="filters">
          <li><a href="" @click.prevent="changeView('all')" :class="{selected:view=='all'}">all</a></li>
          <li><a href="" @click.prevent="changeView('active')" :class="{selected:view=='active'}">active</a></li>
          <li><a href="" @click.prevent="changeView('completed')" :class="{selected:view=='completed'}">completed</a></li>
        </ul>
        <button class="clear-completed"  v-show="Finshed>0"  @click="delDone">clear completed</button>
      </footer>
    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import {mapState,mapGetters,mapMutations} from 'vuex'
require("./assets/todo-mvc.css");

export default {
  name: 'App',
  components: {
    HelloWorld,
    AddTodo,
    ListTodo
  },
   computed:{

     ...mapState(['todos','view']),
     ...mapGetters(['isAllDone','UnFinshed','filterTodo','Finshed'])
   },
  methods:{
    //事件映射在方法当中
    ...mapMutations(['toggleAllTodo','delDone','changeView'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
