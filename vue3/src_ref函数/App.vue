<template>
  <div>
    <h1>姓名：{{name}}</h1>
    <h1>年龄：{{age}}</h1>
    <h1>obj姓名：{{obj.name}}</h1>
    <h1>obj职业：{{obj.job}}</h1>
    <button @click="change">改变</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'App',
  setup(){

    let name = ref('fzs')
    let age = ref(18)
    let obj = ref({
      name:'fzs111',
      job:'cxy'
    })

    function change(){
      name.value = 'fff'
      age.value = 24
      obj.value.job = 'cxy2'
    }

    return{
      name,
      age,
      obj,
      change
    }
  }
}
</script>

<style>

</style>
