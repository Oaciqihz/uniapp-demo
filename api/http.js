import {
	baseURL
} from './base.js';


export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		var goshop_user_info = uni.getStorageSync("goshop_user_info_yz")
		var uid = ""
		var ushell = ""
		if(goshop_user_info){
			uid = goshop_user_info.uid
			ushell = goshop_user_info.ushell
		}
		uni.request({
			url: baseURL + options.url , 
			method: options.method || 'GET', 
			data: options.data || {}, 
			header: {
				uid: uid,
				ushell:ushell,
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
