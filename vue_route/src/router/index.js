//用于创建整个应用的路由器
import Router from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Users from '../pages/Users.vue'
//创建并暴露路由器
const router =  new Router({
    //哈希模式
    mode:'hash',
    //路由配置
    routes:[
        {
            path:'/about',
            component:About,
            meta:{
                title:'关于'
            }
        },
        {
            name:'home',
            path:'/home',
            component:Home,
            meta: {
                title: '主页'
            },
            children:[
                {
                    name:'news',
                    path:'news',
                    component:News,
                    meta:{
                        title: '新闻',
                        isAuth:true
                    }
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta: {
                        title: '消息',
                        isAuth: true
                    },
                    children:[
                        {
                            name:'users',
                            path: 'users/:id/:name',
                            component: Users,
                            props:true
                        }
                    ]
                },
            ]
        },
    ]
})

//全局前置路由守卫——————初始化的时候被调用，每次切换路由之前被调用
router.beforeEach((to,from,next)=>{
    //如果要去的路由名字是news或者message
    // if(to.name === 'news' || to.name === 'message'){
    
    //在路由器路由元meta中配置一个属性isAuth：true，就是需要验证权限的组件
    if(to.meta.isAuth){
        //假设从本地拿取数据
        if(localStorage.getItem('address') === 'fuZhou'){
            next()
        //不匹配不放行，或者可以弹到其他路由，比如上面是没登录，让他弹到登录路由
        }else{
            alert('地址不是福州，没有权限查看news跟message模块')
        }
    //不去news或者message，直接放行
    }else{
        next()
    }
})


//后置路由守卫，改网页标题
router.afterEach((to)=>{
    document.title = to.meta.title || 'Vue路由'
})


export default router


