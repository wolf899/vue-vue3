<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="changeTodo(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input type="text" ref="inputTitle" v-show="todo.isEdit" :value="todo.title" @blur="blurInput(todo,$event)">
        </label>
            <button class="btn btn-danger" @click="deleteInfo(todo.id)">删除</button>
            <button v-show="!todo.isEdit" class="btn btn-edit" @click="changeInfo(todo)">编辑</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['todo'],
    methods:{
        changeTodo(id){
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        deleteInfo(id){
            if(confirm('确定删除吗？')){
                // this.deleteTodo(id)
                this.$bus.$emit('deleteTodo',id)
            }
        },
        changeInfo(todo){
            if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
                todo.isEdit = true
            }else{
                this.$set(todo,'isEdit',true)
            }
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
        },
        blurInput(todo,e){
            todo.isEdit = false
            if(!e.target.value.trim()) return alert("输入不能为空")
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
        }
    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li label {
    float: left;
    cursor: pointer;
}
li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button {
    float: right;
    display: none;
    margin-top: 3px;
}
li:before {
    content: initial;
}
li:last-child {
    border-bottom: none;
}
li:hover{
    background-color: #ddd;
}
li:hover button{
    display: block;
}
</style>>

