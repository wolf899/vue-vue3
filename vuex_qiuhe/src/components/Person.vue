<template>
    <div>
        <h1>人员列表</h1>
        <h3>上方组件Count组件求和为：{{sum}}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add()">添加</button>
        <button @click="addWang()">添加一个姓王的人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
import {nanoid} from 'nanoid'

export default {
    name:'Person',
    data(){
        return{
            name:''
        }
    },
    computed:{
        ...mapState('countOptions',['sum']),
        ...mapState('personOptions',['personList']),
        ...mapGetters('personOptions',['fristPersonName'])
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name}
            //'personOptions/ADD_PERSON'  固定写法
            this.$store.commit('personOptions/ADD_PERSON',personObj)
            //清空输入框
            this.name = ""
        },
        addWang(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personOptions/addPersonWang',personObj)
            this.name = ""
        }
    }
}
</script>

