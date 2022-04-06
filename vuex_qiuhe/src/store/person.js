//人员管理配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context,value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert("请输入姓王的人")
            }
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {
                id: '001',
                name: '张三'
            },
            {
                id:'002',
                name:'李四'
            }
        ]
    },
    getters: {
        fristPersonName(state){
            return state.personList[0].name
        }
    }
}