<template>
    <div class="row">
        <div class="card" v-show="msg.users.length" v-for="user in msg.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
        <h1 v-show="msg.isFrist">欢迎使用</h1>
        <h1 v-show="msg.isLoading">加载中，请稍等。。。</h1>
        <h1 v-show="msg.errMsg">{{msg.errMsg}}</h1>
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return{
            msg:{
                isFrist:true,
                isLoading:false,
                errMsg:'',
                users:[],
            }
        }
    },
    mounted(){
        this.$bus.$on('updataListData',(dataObj)=>{
            // console.log('我是List组件,已收到数据',dataObj)
            this.msg = {...this.msg,...dataObj}
        })
    }
}
</script>

<style>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>