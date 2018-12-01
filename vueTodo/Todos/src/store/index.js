import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default  new Vuex.Store({

    state:{
       view:"all",
       todos:[
         { text:"任洁芳",do:false},
         { text:"姚旭飚",do:true}
       ]}
      ,
      mutations:{
         editTodo:function(state,obj){
              obj.todo.text=obj.txt;
         },
         changeView:function(state,view){
              state.view=view;
         },
         add:function(state,content){
            this.state.todos.unshift({text:content,do:false});
         },
         toggleTodo:function(state,todo){
            todo.do=!todo.do;
         },

        delTodo:function(state,todo){
           let index= state.todos.findIndex(item=>
                  item == todo)

                 if(index!=-1) {
                   state.todos.splice(index, 1);
                 }
        },
        delDone:function(state){

             var rs=state.todos.filter(item =>
               item.do ==false )

               state.todos=rs;


        },

         toggleAllTodo:function(state,flag){
              state.todos.forEach(function(item){
                  item.do=flag;
              })
         }


        },


   getters:{
       isAllDone:function(state){
       let rs=state.todos.every(item=> item.do == true)
              return  rs;
       },
     UnFinshed:function(state){
         let n=0;
            state.todos.forEach(function(item){
              if(item.do==false)
                     n++;
              })
               return n;
     },

      Finshed:function(state){
        let n=0;
      state.todos.forEach(function(item){
      if(item.do==true)
        n++;
    })
    return n;
  },

     filterTodo:function(state) {
       if (state.view == 'all')
         return state.todos;

       else if (state.view == 'active')
            return state.todos.filter(item=>item.do==false)
       else if (state.view == 'completed')
         return state.todos.filter(item=>item.do==true)
       }
   }


})
