<template>
	<view>
		<view class="top">
			<view class="head">
				<u--image :showLoading="true" shape='circle' :src="getSrc(member.img)" width="88rpx"
					height="88rpx"></u--image>
				<p class="name">{{member.username}}</p>
			</view>

			<p class="time">{{sjc(info.sd_time*1000)}}</p>
		</view>
		<view class="mo2">{{info.sd_title}}</view>
		<view class="mo3">
			{{info.sd_content}}
		</view>
		<scroll-view scroll-x="true" class="mo4">
			<view class="mo4_nr">
				<view class="imgbox" v-for="(item,index) in sd_photolist">
					<u--image :showLoading="true" :src="getSrc(item)" width="336rpx" height="252rpx"
						radius='12'></u--image>
				</view>
			</view>
		</scroll-view>
		<view class="mo5">
			<p>
				<image src="../../static/love (1).png" mode="widthFix"></image>
				{{info.sd_ping}}
			</p>
			<p>
				<image src="../../static/comm.png" mode="widthFix"></image>
				{{info.sd_zhan}}
			</p>
		</view>
		<view class="huifu_list">
			<view class="h_list" v-for="(item,index) in shaidan_hueifu">
				<u--image :showLoading="true" shape='circle' @click="showimg(item,index)" :src="getSrc(item.img)" width="68rpx"
					height="68rpx"></u--image>
				<view class="rightbox">
					<p class="name">{{item.user_name}}</p>
					<p class="cnotent">{{item.sdhf_content}}<span>{{timess(item.sdhf_time)}}</span></p>
				</view>
			</view>
		</view>

		<view class="btn_box">
			<view class="inputbox">
				<input type="text" :placeholder="$t('plleasecomm')" v-model="inp_value">
				<p @click="cend()">发送</p>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		shaidandetail,
		plajax
	} from '@/api/all.js'
	export default {
		data() {
			return {
				id: '',
				inp_value: '',
				info: {},
				member: {},
				sd_photolist: [],
				shaidan_hueifu: []
			};
		},
		onLoad(e) {
			var i = this.$i18n.locale
			var a = e.id
			this.id = e.id
			shaidandetail(i, a).then(res => {
				this.member = res.data.data.member
				this.info = res.data.data.shaidan
				this.sd_photolist = res.data.data.sd_photolist
				this.shaidan_hueifu = res.data.data.shaidan_hueifu
			})
		},
		methods: {
			showimg(){
				wx.previewImage({
					urls: this.data[i].images, //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
					current: this.data[i].images[l], // 当前显示图片的http链接，默认是第一个
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
			},
			cend() {
				var i = {
					count: this.inp_value,
					sd_id: this.id
				}
				plajax(i).then(res => {

				})
			},
			sjc(value) {
				if (value == undefined) {
					return;
				}
				// let date = new Date(value * 1000);
				let date = new Date(value);
				//时间戳为10位需*1000，时间戳为13位的话不需乘1000
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM; //月补0
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d; //天补0
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h; //小时补0
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m; //分钟补0
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s; //秒补0
				// return y + '-' + MM + '-' + d; //年月日
				return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s; //年月日时分秒
			},
			timess(stringTime) {
				var minute = 1000 * 60;
				var hour = minute * 60;
				var day = hour * 24;
				var week = day * 7;
				var month = day * 30;
				var year = month * 12;
			
				var time1 = new Date().getTime(); //当前的时间戳
			
				var time2 = stringTime * 1000; //指定时间的时间戳
			
				var time = time1 - time2;
			
				var result = null;
				if (time < 0) {
					result = stringTime;
				} else if (time / year >= 1) {
					result = parseInt(time / year) + "年前";
				} else if (time / month >= 1) {
					result = parseInt(time / month) + "月前";
				} else if (time / week >= 1) {
					result = parseInt(time / week) + "周前";
				} else if (time / day >= 1) {
					result = parseInt(time / day) + "天前";
				} else if (time / hour >= 1) {
					result = parseInt(time / hour) + "小时前";
				} else if (time / minute >= 1) {
					result = parseInt(time / minute) + "分钟前";
				} else {
					result = "刚刚";
				}
				console.log("格式化后的时间", result);
				return result;
			},
		}
	}
</script>

<style lang="scss">
	.top {
		width: 90%;
		margin: 0 auto;
		padding: 32rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.head {
			height: 88rpx;
			display: flex;
			align-items: center;
		}

		.name {
			margin-left: 20rpx;
			width: 178rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: #5BB6EA;
		}

		.time {
			margin-top: 4rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
		}
	}

	.mo2 {
		width: 90%;
		margin: 0 auto;
		font-size: 32rpx;
		font-weight: 600;
		color: #333333;
		// margin-top: 28rpx;
	}

	.mo3 {
		width: 90%;
		margin: 0 auto;
		font-size: 28rpx;
		font-weight: 500;
		color: #333333;
		margin-top: 8rpx;
	}

	.mo4 {
		width: 90%;
		margin: 0 auto;
		height: 252rpx;
		margin-top: 20rpx;

		.mo4_nr {
			display: flex;
			align-items: center;

			.imgbox {
				width: 336rpx;
				height: 252rpx;
				margin-right: 22rpx;
			}
		}
	}

	.huifu_list {
		width: 90%;
		margin: 0 auto;
		margin-top: 32rpx;
		display: flex;
		flex-direction: column;

		.h_list {
			margin-bottom: 32rpx;
			width: 100%;
			display: flex;
			justify-content: space-between;

			.rightbox {
				display: flex;
				flex-direction: column;
				width: 85%;
				border-bottom: 1px solid #EEEEEE;
				padding-bottom: 20rpx;
				.name {
					font-size: 24rpx;
					font-weight: 400;
					color: #5BB6EA;
				}

				.cnotent {
					margin-top: 8rpx;
					font-weight: 400;
					color: #333333;
					font-size: 28rpx;
					line-height: 33rpx;

					span {
						margin-left: 20rpx;
						color: #999999;
						font-size: 20rpx;
					}
				}
			}
		}
	}

	.mo5 {
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		// margin-top: 20rpx;
		box-sizing: border-box;
		padding: 20rpx 80rpx;
		border-bottom: 1px solid #EEEEEE;

		p {
			display: flex;
			align-items: center;
		}

		image {
			width: 36rpx;
			height: 36rpx;
			margin-right: 10rpx;
		}

		font-size: 20rpx;
		font-weight: 400;
		color: #666666;
	}

	.btn_box {
		width: 100vw;
		height: 84rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: white;
		z-index: 50;
		box-sizing: border-box;
		padding: 0 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.inputbox {
			width: 100%;
			border-radius: 30rpx;
			height: 68rpx;
			background-color: #f8f8f8;
			position: relative;
			display: flex;
			align-items: center;

			input {
				padding-top: 5rpx;
				margin-left: 28rpx;
				font-size: 20rpx;
			}

			p {
				width: 120rpx;
				height: 68rpx;
				position: absolute;
				top: 0;
				right: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				color: #FF5152;
			}
		}
	}
</style>