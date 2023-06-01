import VueI18n from 'vue-i18n' 
import Vue from 'vue' 
import en from './en.js' 
import al from './al.js' 
Vue.use(VueI18n) 

export default new VueI18n({ 
    locale:uni.getStorageSync('locale') ? uni.getStorageSync('locale') :'al',
    messages:{ 
        'al':al, 
        'en':en 
   }
})
