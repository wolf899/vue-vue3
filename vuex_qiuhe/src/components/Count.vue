<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大十倍为：{{tenSum}}</h3>
    <h3>我叫：{{name}}&nbsp;&nbsp;&nbsp;性别：{{sex}}</h3>
    <h3>下方Person组件的总人数：{{personList.length}}</h3>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="addition(number)">+</button>
    <button @click="subtraction(number)">-</button>
    <button @click="additionOdd(number)">当前求和为奇数再加</button>
    <button @click="additionWait(number)">等0.5S再加</button>
  </div>
</template>

<script>

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: 'Count',
  data(){
    return{
      number:1,
    }
  },
  computed:{
    ...mapState('countOptions',['sum','name','sex']),
    ...mapState('personOptions',['personList']),
    ...mapGetters('countOptions',['tenSum'])
  },
  methods:{
    ...mapMutations('countOptions',{addition:'ADD',subtraction:'SUBTRACT'}),
    ...mapActions('countOptions',{additionOdd:'addOdd',additionWait:'addWait'})
  },
  mounted(){
    
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>
