<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/users?id=${m.id}&name=${m.name}`">{{m.name}}</router-link> -->
                <!-- 跳转路由并携带params参数，to的对象写法 -->
                <router-link :to="{
                    name:'users',
                    params:{
                        id:m.id,
                        name:m.name
                    }
                }">
                    {{m.name}}
                </router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Message',
    data(){
        return {
            messageList:[
                {id:'001',name:'张三'},
                {id:'002',name:'李四'},
                {id:'003',name:'王五'}
            ]
        }
    },
    methods:{
        pushShow(m){
            this.$router.push({
                name:'users',
                params:{
                    id:m.id,
                    name:m.name
                }
            })
        },
        replaceShow(m){
            this.$router.replace({
                name:'users',
                params:{
                    id:m.id,
                    name:m.name
                }
            })
        }
    }
}
</script>

<style>

</style>