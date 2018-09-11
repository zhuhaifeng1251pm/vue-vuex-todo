import axios from "axios";
const state = { todolists: [] };//或者写成 const state = [],但是数组内要写成对象元素
 const mutations = {
  increments(state,obj) {
    state.todolists.push(obj);
    }, 
deleteId(state,id) {
        state.todolists.splice(state.todolists.findIndex(t=>t.id===id),1)
  },deleteAll(state,id) {
    state.todolists= state.todolists.filter(t=>t.id===id)
     },
     getData(state, todos) {
        state.todolists.push(...todos)
     },
     changeIscompleted(state,id) {
         state.todolists.find(t=>t.id===id).isComplete=!state.todolists.find(t=>t.id===id).isComplete
     }
 }
//可能需要异步修改state 状态，我们通常将异步请求写在模块下的actions内，actions函数并不能直接修改state，而是会触发mutations 从而修改状态state .通常actions函数的名字和对应的mutations函数名相同。

const actions = {
    getData({ commit })//{commit}相当于 {commit}=context
    {
        axios.get('http://localhost:3008/todolists').then(res => { 
            commit('getData',res.data)
            
        }).catch(err => {
            
        })
    },
    changeIscompleted({ commit },obj) {
        axios.patch(`http://localhost:3008/todolists/${obj.id}`,{isComplete:!obj.isComplete}).then(res=>{
            commit('changeIscompleted',id)
           }).catch(res=>{}) 
    },
    deleteId({ commit }, obj) {
        axios.delete(`http://localhost:3008/todolists/${obj.id}`).then(res => {
            commit('deleteId',obj.id)
        }).catch(err=>{})
    },
    deleteAll({ commit }, arr) {
        arr.forEach(ele => {
            axios.delete(`http://localhost:3008/todolists/${ele.id}`).then(res => {
                commit('deleteAll',ele.id)
            }).catch(err=>{})
        });
    }

}




const getters = {
    activeNum(state) {
        return state.todolists.length
      }  ,
    showNewTodolists(state) {
        return function(type) {
            return  state.todolists.filter(t=>type==='active'?!t.isComplete:type==='completed'?t.isComplete:true)
        }
    }


}

const todolists = {
    state,
    mutations, getters,
    actions
}
export default todolists