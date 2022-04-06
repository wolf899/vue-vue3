<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" v-model="keyWord" placeholder="enter the name you search"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axions from 'axios'
export default {
    name:"Search",
    data(){
        return{
            keyWord:''
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('updataListData',{isFrist:true,isLoading:false,errMsg:'',users:[]})
            axions.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response=>{
                    console.log('请求成功了')
                    this.$bus.$emit('updataListData',{isLoading:false,errMsg:'',users:response.data.items})
                },
                error=>{
                    console.log('请求失败了')
                    this.$bus.$emit('updataListData',{isLoading:false,errMsg:error.message,users:[]})
                }
            )
        }
    }
}
</script>

<style>

</style>