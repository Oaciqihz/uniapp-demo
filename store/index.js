import Vue from 'vue';
import Vuex from 'vuex';
import list from '../uni_modules/uview-ui/libs/config/props/list';
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		list: []
	},
	mutations:{
		change_list(e){
			console.log(e);
			// this.state.list=e
		}
	}
})

export default store