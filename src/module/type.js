const state = { type: "all" };
const mutations = {
    changetype(state, str) {
        if(state.type!==str){
        state.type = str;}
    }
};

const number = {
    state,
    mutations
};
export default number;
