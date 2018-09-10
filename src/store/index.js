import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
import todolists from "../module/todolists";
import type from '../module/type'
import todo from '../module/todo'
const store = new Vuex.Store({
    modules: {
        todolists: todolists,
        type: type,
        todo:todo
    }
});

export default store;
