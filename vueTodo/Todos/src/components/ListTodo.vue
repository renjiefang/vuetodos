<template>
  <section class="main">

    <ul class="todo-list">
      <li class="todo" :class="{editing:isEdit}">
        <div class="view">
          <input type="checkbox" @click="toggleTodo(todo)" class="toggle" :checked="todo.do">
          <label  @dblclick="isEdit=true">{{todo.text}}</label>
          <button class="destroy"  @click="delTodo(todo)"></button>
        </div>
        <input type="text"  ref="con" :value=todo.text class="edit" @blur="endEdit(todo)" @keyup.enter="endEdit(todo)" v-show="isEdit">
      </li>
    </ul>
  </section>

</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
        name: "ListTodo",
      props:{
          todo:{
            type:Object
          }
      },
      data:function(){
        return{
          isEdit:false
        }
      },
      methods:{
        ...mapMutations(['toggleTodo',"delTodo",'editTodo']),
        endEdit(obj){
          let newText=this.$refs.con.value.trim();

          this.editTodo({todo:obj,txt:newText} );
           this.isEdit=false;
        }
      }


    }
</script>

<style scoped>

</style>
