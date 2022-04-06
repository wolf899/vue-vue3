<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHearder @addTodo="addTodo"></MyHearder>
      <MyList :todos="todos"></MyList>
      <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
    </div>
  </div>
</div>
</template>

<script>

  import MyHearder from './components/MyHearder.vue'
  import MyFooter from './components/MyFooter.vue'
  import MyList from './components/MyList.vue'
  

  export default{
    name:'App',
    components:{MyHearder,MyFooter,MyList},
    data(){
        return{
            // todos:[
            //     {id:'001',title:'学习',done:true},
            //     {id:'002',title:'读书',done:true},
            //     {id:'003',title:'游戏',done:false}
            // ]
            todos:JSON.parse(localStorage.getItem('todos')) || []
        }
    },
    methods:{
      addTodo(todoObj){
        this.todos.unshift(todoObj)
      },
      checkTodo(id){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.done = !todo.done
        })
      },
      updateTodo(id,title){
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.title = title
        })
      },
      deleteTodo(id){
        this.todos = this.todos.filter((todo)=>{
          return todo.id !== id
        })
      },
      checkAllTodo(done){
        this.todos.forEach((todo)=>{
          todo.done = done
        })
      },
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.done
        })
      }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem("todos",JSON.stringify(value))
        }
      }
    },
    mounted(){
      this.$bus.$on('checkTodo',this.checkTodo)
      this.$bus.$on('deleteTodo',this.deleteTodo)
      this.$bus.$on('updateTodo',this.updateTodo)
    },
    beforeDestroy(){
      this.$bus.$off('checkTodo')
      this.$bus.$off('deleteTodo')
      this.$bus.$off('updateTodo')
    }
  }

</script>

<style>
  /*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-edit{
  color: #fff;
  background-color: skyblue;
  border: 1px solid #2f60cc;
  margin-right: 5px;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
