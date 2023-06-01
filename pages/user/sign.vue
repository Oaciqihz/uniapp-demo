<template>
	<view class="cont">
		<view class="top"></view>
		<view class="nr">
			<view class="to">
				<p>{{$t('lxqd')}}：<span>{{info.sum}}</span>{{$t('lxqd_t')}}</p>
			</view>
			<view class="to">
				<p>{{$t('Total')}}：<span>{{info.lianxu}}</span>{{$t('day')}}</p>
			</view>
			<view class="to">
				<p>{{$t('lasttime')}}：{{sjc(info.time*1000)}}</p>
				<view class="btn" @click="sign_sj()">
					{{$t('sign')}}
				</view>
			</view>
		</view>
		<view class="tips">
			<p class="title">{{$t('sign_tips')}}</p>
			<p class="ms">{{$t('sign_tips1')}}</p>
			<p class="ms">{{$t('sign_tips2')}}</p>
			<p class="title mtop">{{$t('sign_tips4')}}</p>
			<scroll-view scroll-y="true" class="scview">
				<view class="boxnr">

				</view>
			</scroll-view>
			<p class="ms">{{$t('sign_tips5')}}</p>
		</view>
	</view>
</template>

<script>
	import {
		userqiandao,
		qiandaof
	} from '@/api/all.js'
	export default {
		data() {
			return {
				info: {}
			};
		},
		onShow() {
			userqiandao().then(res => {
				this.info = res.data.data.qiandao
			})
		},
		methods:{
			sign_sj(){
				qiandaof().then(res=>{
					if(res.data.message=='签到成功'){
						uni.showToast({
							title: this.$t('successsigned'),
							duration: 2000
						});
					}else{
						uni.showToast({
							icon:'none',
							title: this.$t('adg'),
							duration: 2000
						});
					}
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
			}
		}
	}
</script>

<style lang="scss">
	.top {
		position: absolute;
		left: 0;
		top: 0;
		width: 750rpx;
		height: 308rpx;
		filter: blur(165px);
		background: linear-gradient(to left, #FEC808, #FF5152);
	}

	.tips {
		margin: 0 auto;
		margin-top: 32rpx;
		width: 90%;
		height: 844rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		position: relative;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.scview {
			margin-bottom: 40rpx;
			width: 90%;
			height: 340rpx;

			.boxnr {
				text-align: center;
			}
		}

		.ms {
			font-weight: 400;
			color: #333333;
			font-size: 24rpx;
			width: 90%;
			text-align: center;
			line-height: 48rpx;
		}

		.title {

			font-size: 28rpx;
			font-weight: 500;
			color: #FF5152;
			line-height: 33rpx;
			margin-bottom: 20rpx;
		}

		.mtop {
			margin-top: 40rpx;
		}
	}

	.nr {
		position: relative;
		z-index: 10;
		width: 90%;
		height: 164rpx;
		margin: 0 auto;
		margin-top: 70rpx;
		background-color: #FFFFFF;
		box-shadow: 0rpx 12rpx 20rpx 0rpx rgba(69, 0, 0, 0.05);
		border-radius: 20rpx 20rpx 20rpx 20rpx;
		opacity: 1;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 24rpx;
		flex-direction: column;

		.to {
			margin-top: 5rpx;
			font-size: 24rpx;
			font-weight: 400;
			color: #333333;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.btn {
				padding: 0 20rpx;
				font-weight: 400;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 50rpx;
				font-size: 24rpx;
				background: #FF5152;
				border-radius: 30rpx 30rpx 30rpx 30rpx;
			}

			span {
				color: #FF5152;
			}
		}
	}

	.cont {
		width: 750rpx;
		position: fixed;
		padding-top: 70rpx;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: #f8f8f8;
	}
</style>