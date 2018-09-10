const state = { todolists: [] };
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


const number = {
    state,
    mutations
}
export default number