const state = { todo: "" };
const mutations = {
    todoClear(state) {
        state.todo = '';
    }
};

const number = {
    state,
    mutations
};
export default number;
