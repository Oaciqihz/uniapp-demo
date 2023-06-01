<template>
	<view class="bigbox">
		<view class="top">
			<u-tabs :list="list" @change="change" lineHeight='2' bg-color="#f0f5ff" is-scroll="false"
				lineColor="#fefefe" :current="current" lineWidth="46" inactive-color="#606266"
				:inactiveStyle="{fontWeight:'500',fontSize: '30rpx'}" :activeStyle="{
				          color: '#FE2C55',
						  fontSize: '30rpx',
						  fontWeight:'500'
				        }">
			</u-tabs>
		</view>

		<view class="gaae"></view>

		<view class="box" v-for="(item,index) in listItems">
			<view class="imgbox">
				<!-- <p class="tips">已揭晓</p> -->
				<u--image :showLoading="true" :src="getSrc(item.thumb)" radius='6' width="180rpx"
					height="180rpx"></u--image>
			</view>
			<view class="nr">
				<p class="title">{{item.title}}</p>
				<p class="tips">{{$t('luck')}}：<span>{{item.q_user_code}}</span></p>
				<p class="time">{{$t('RevealTime')}}：<span>{{sjc(item.time*1000)}}</span></p>
			</view>
		</view>

		<view class="gaae"></view>
	</view>
</template>

<script>
	import {
		getUserUnPostList,
		getUserPostList
	} from '@/api/all.js'
	export default {
		data() {
			return {
				src: '',
				current: 0,
				list: [{
					name: this.$t('ys')
				}, {
					name: this.$t('ns')
				}],
				index: 0,
				listItems: []
			};
		},
		onShow() {
			var i = this.$i18n.locale
			var a = this.index + '/10/1'
			if (this.current == 0) {
				getUserPostList(i, a).then(res => {
					this.listItems = res.data.listItems
				})
			} else {
				getUserUnPostList(i, a).then(res => {
					this.listItems = res.data.listItems
				})
			}
			
		},
		methods: {
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
			change(e) {
				this.current = e.index
				var i = this.$i18n.locale
				var a = this.index + '/10/1'
				if (this.current == 0) {
					getUserPostList(i, a).then(res => {
						this.listItems = res.data.listItems
					})
				} else {
					getUserUnPostList(i, a).then(res => {
						this.listItems = res.data.listItems
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.bigbox {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f8f8f8;
	}



	.box {

		.nr {
			flex: 0.95;
			height: 100%;
			display: flex;
			flex-direction: column;

			.luck {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
				margin-top: 20rpx;

				span {
					color: #5BB6EA;
				}
			}

			.time {
				margin-top: 5rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
				span{
					color: #999999;
				}
			}

			.tips {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
				line-height: 38rpx;
				word-break: break-all;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
				margin-top: 20rpx;
				span{
					color: #FF5152;
				}
			}

			.title {
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 38rpx;
				word-break: break-all;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
		}

		.imgbox {
			width: 180rpx;
			height: 180rpx;
			box-shadow: 0rpx 8rpx 24rpx 0rpx rgba(0, 0, 0, 0.14);
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			position: relative;
			overflow: hidden;

			.tips {
				z-index: 50;
				position: absolute;
				bottom: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.38);
				width: 180rpx;
				height: 44rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 20rpx;
				color: #FFFFFF;
				font-weight: 400;
				line-height: 23rpx;
			}
		}

		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 20rpx;
		margin: 0 auto;
		margin-bottom: 20rpx;
		width: 90%;
		height: 220rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
	}


	.top {
		z-index: 100;
		position: fixed;
		top: 80rpx;
		left: 0;
		width: 750rpx;
		height: 100rpx;
		box-sizing: border-box;
		padding: 0rpx 50rpx 20rpx 50rpx;
		height: auto;
		display: flex;
		background-color: white;
		align-items: center;
		justify-content: space-evenly;
	}

	.gaae {
		width: 750rpx;
		height: 120rpx;
	}
</style>