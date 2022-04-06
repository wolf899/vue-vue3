<template>
  <div>
    <input type="text" v-model="keyWord">
    <h1>{{keyWord}}</h1>
  </div>
</template>

<script>
import { customRef } from 'vue'
export default {
  name: 'App',
  setup(){

    function myRef(value,delay){
      return customRef((track,trigger)=>{
        let timer
        return{
          get(){
            track()//追踪value的变化
            return value
          },
          set(newValue){
            clearTimeout(timer)
            timer = setTimeout(()=>{
              value = newValue
              trigger()//重新解析模板
            },delay)
          }
        }
      })
    }

    let keyWord = myRef('hello',500)

    return{
      keyWord
    }
  }
}
</script>

<style>

</style>
