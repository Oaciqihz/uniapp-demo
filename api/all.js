import {
	myRequest
} from './http.js'


export function paysubmit(url, config) {
	return myRequest({
		url: '/?/mobile/cart/paysubmit/' + url,
		method: 'get',
		data: config
	})
}

export function deladdress(url, config) {
	return myRequest({
		url: '/?/mobile/home/deladdress/' + url,
		method: 'get',
		data: config
	})
}

export function address(config) {
	return myRequest({
		url: '/?/mobile/home/address',
		method: 'get',
		data: config
	})
}


export function profilechange(config) {
	return myRequest({
		url: '/?/mobile/user/profilechange',
		method: 'post',
		data: config
	})                                                                                                                            
}


export function headimg(config) {
	return myRequest({
		url: '/?/mobile/user/headimg/1/',
		method: 'post',
		data: config
	})
}

export function userpassword(i18, config) {
	return myRequest({
		url: '/?/mobile/user/userpassword/' + i18,
		method: 'post',
		data: config
	})
}

export function getUserConsumption(i18, url, config) {
	return myRequest({
		url: '/?/mobile/shopajax/getUserConsumption/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function getUserRecharge(i18, url, config) {
	return myRequest({
		url: '/?/mobile/shopajax/getUserRecharge/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function getUserUnPostList(i18, url, config) {
	return myRequest({
		url: '/?/mobile/shopajax/getUserUnPostList/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function getUserPostList(i18, url, config) {
	return myRequest({
		url: '/?/mobile/shopajax/getUserPostList/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function getUserOrderList(i18, url, config) {
	return myRequest({
		url: '/?/mobile/shopajax/getUserOrderList/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}


export function getUserBuyList(i18, url, config) {
	return myRequest({
		url: '/?/mobile/shopajax/getUserBuyList/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function qiandaof(i18, url, config) {
	return myRequest({
		url: '/?/mobile/home/qiandao/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function userqiandao(i18, url, config) {
	return myRequest({
		url: '/?/mobile/home/userqiandao/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function getLotteryList(i18, url, config) {
	return myRequest({
		url: '/?/mobile/ajax/getLotteryList/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function xianmu(config) {
	return myRequest({
		url: '/?/mobile/shaidan/xianmu',
		method: 'post',
		data: config
	})
}

export function plajax(config) {
	return myRequest({
		url: '/?/mobile/shaidan/plajax',
		method: 'post',
		data: config
	})
}


export function shaidandetail(i18, url, config) {
	return myRequest({
		url: '/?/mobile/shaidan/detail/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function home(i18, config) {
	return myRequest({
		url: '/?/mobile/home/init/' + i18,
		method: 'get',
		data: config
	})
}

export function pay(i18, config) {
	return myRequest({
		url: '/?/mobile/cart/pay/' + i18,
		method: 'get',
		data: config
	})
}

export function cartlist(i18, config) {
	return myRequest({
		url: '/?/mobile/cart/cartlist/' + i18,
		method: 'get',
		data: config
	})
}

export function addShopCart(i18, url, config) {
	return myRequest({
		url: '/?/mobile/ajax/addShopCart/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function buyrecords(i18, url, config) {
	return myRequest({
		url: '/?/mobile/mobile/buyrecords/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function goodspost(i18, url, config) {
	return myRequest({
		url: '/?/mobile/mobile/goodspost/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

export function item(i18, url, config) {
	return myRequest({
		url: '/?/mobile/mobile/item/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}


export function glistajax(i18, url, config) {
	return myRequest({
		url: '/?/mobile/mobile/glistajax/' + url + '/' + i18,
		method: 'get',
		data: config
	})
}

// 注册
export function userlogin(url, config) {
	return myRequest({
		url: '/?/mobile/ajax/userlogin/' + url,
		method: 'get',
		data: config
	})
}

export function userMobile(url, config) {
	return myRequest({
		url: '/?/mobile/ajax/userMobile/' + url,
		method: 'get',
		data: config
	})
}


export function init(i18, url, config) {
	return myRequest({
		url: '/?/mobile/mobile/init/' + i18,
		method: 'get',
		data: config
	})
}