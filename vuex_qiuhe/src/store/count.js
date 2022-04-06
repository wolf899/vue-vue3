//求和配置
export default {
    //模块命名空间，写true在组件才能用 ...mapState('countOptions',['sum','name','sex'])
    //中'countOptions',['sum','name','sex']的形式
    namespaced: true,
    //逻辑判断
    actions: {
        addOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('ADD', value)
            }
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value)
            }, 500);
        }
    },
    //操作数据
    mutations: {
        ADD(state, value) {
            state.sum += value
        },
        SUBTRACT(state, value) {
            state.sum -= value
        },
    },
    //数据
    state: {
        sum: 0,
        name: '傅',
        sex: '男',
    },
    //可以理解为state的计算属性
    getters: {
        tenSum(state) {
            return state.sum * 10
        }
    }
}

