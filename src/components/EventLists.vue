<template>
    <div v-if="this.$store.getters.activeNum" class="main">
        <ul>
            <li v-for="todo in newTodolists" :key="todo.id"  @click="hangleClick(todo.id,todo.isComplete)">
                <div class="check-box"><input :id="`${todo.id}in`" type="checkbox" v-model="todo.isComplete" >
                    <label :for="`${todo.id}in`" :style="`text-decoration:${todo.isComplete?'line-through':'none'}`">{{todo.todoText}}</label>
                </div>
                <button class="delete-btn" @click.stop="handleDelId(todo.id)"></button>
            </li>
        </ul>

        <footer>
            <span class="num">{{leaveEvent}} items left</span>
            <div class="toShow">
                <span @click="$store.commit('changetype','all')"  :class="{selected:this.$store.state.type.type==='all'}">All</span>
                <span @click="$store.commit('changetype','active')" :class="{selected:this.$store.state.type.type==='active'}" >Active</span>
                <span @click="$store.commit('changetype','completed')" :class="{selected:this.$store.state.type.type==='completed'}">Completed</span>
            </div>
            <!-- <span>{{newTodolists}}</span> -->
            <button class="clear" @click="handleDelAll(completedEvents)" :style="`display:${completedEvent?'block':'none'}`">ClearCompleted</button>
        </footer>

    </div>

</template>
<script>
import axios from 'axios';
export default {
    name: "eventLists",
    props: [  "type", "changeType"],
    computed: {
        completedEvent() {
            return this.$store.state.todolists.todolists.filter(t => t.isComplete === true).length;
        },
        completedEvents(){
            return this.$store.state.todolists.todolists.filter(t => t.isComplete === true)
        },
        leaveEvent() {
            return this.$store.state.todolists.todolists.filter(t => t.isComplete === false).length;
        },
        newTodolists() {
            // return this.$store.state.type.type === "active"
            //     ? this.$store.state.todolists.todolists.filter(t => t.isComplete === false)
            //     : this.$store.state.type.type === "completed"
            //         ? this.$store.state.todolists.todolists.filter(t => t.isComplete === true)
            //         : this.$store.state.type.type === "all" ? this.$store.state.todolists.todolists : this.$store.state.todolists.todolists;
            return this.$store.getters.showNewTodolists(this.$store.state.type.type )
        }
    },methods:{
        hangleClick(id,isComplete){
           this.$store.dispatch('changeIscompleted',{id:id,isComplete:isComplete})
        },
        handleDelId(id){
            this.$store.dispatch('deleteId',{id:id})
        },handleDelAll(arr){
            this.$store.dispatch('deleteAll',arr)
        }
    }
};
</script>
<style scoped lang="scss">
@import '../assets/style.scss';
.main {
    width: 100%;
    margin: 0 auto;
}
ul {
    margin: 0;
    padding: 0;
}
li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 15px 60px;
    border-bottom: 1px solid #ccc;
    position: relative;
    font-size: 24px;
}
li .check-box input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
}
li .check-box label::before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    border: 2px solid #ccc;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 18px;
    left: 10px;
}
li .check-box label {
    margin-left: 10px;
}
li .check-box input:checked ~ label::before {
    background-image: url("http://pcgnine5c.bkt.clouddn.com/%E5%AF%B9%E9%92%A9.png");
    background-repeat: no-repeat;
    background-size: contain;
}
.delete-btn {
    width: 30px;
    height: 30px;
    background-image: url("http://pcgnine5c.bkt.clouddn.com/x.png");
    background-repeat: no-repeat;
    background-size: contain;
    border: 0;
    outline: 0;
    background-color: #fff;
}
footer {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 10px 10px 0 10px;
}
span {
    margin-right: 20px;
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 5px;
}
.num {
    margin-right: 30px;
}
.clear {
    margin-left: 20px;
    outline: 0;
    border: 0;
    width: 120px;
    line-height: 30px;
    border-radius: 5px;
    background-color: #1992ff;
    color: $color;
}
.selected {
    border-color: rgba(175, 47, 47, 0.2);
}
</style>

