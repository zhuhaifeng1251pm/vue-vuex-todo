const state = { todolists: [] };//或者写成 const state = [],但是数组内要写成对象元素
 const mutations = {
  increments(state,obj) {
    state.todolists.push(obj);
    }, 
deleteId(state,id) {
        state.todolists.splice(state.todolists.findIndex(t=>t.id===id),1)
  },deleteAll(state) {
    state.todolists= state.todolists.filter(t=>t.isComplete===false)
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

const number = {
    state,
    mutations,getters
}
export default number