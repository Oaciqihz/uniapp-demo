<template>
	<view>
		<view class="inputbox">
			<input type="text" class="inp" :placeholder="$t('user.account')" v-model="accout">
		</view>
		<view class="inputbox">
			<input type="password" class="inps" :placeholder="$t('user.password')" v-model="password">
		</view>
		<view class="yzm">
			<input type="password" class="inpss" v-model="code">
			<view class="getyzm">
				{{$t('ocode')}}
			</view>
		</view>

		<view class="btn" @click="register()">
			{{$t('user.Comfirm')}}
		</view>
	</view>
</template>

<script>
	import {
		userMobile
	} from '@/api/all.js'
	export default {
		data() {
			return {
				code: '',
				accout: '',
				password: ''
			};
		},
		methods: {
			register(){
				var i = this.accout + '/' + this.password
				userMobile(i).then(res=>{
					if(res.data.message=='注册成功'){
						uni.showToast({
							title: this.$t('lws'),
							duration: 2000
						});
						setTimeout(()=>{
							uni.navigateBack()
						},2000)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.yzm {
		display: flex;
		align-items: center;
		margin: 0 auto;
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
		padding-bottom: 20rpx;
		margin-top: 80rpx;

		.inpss {
			width: 40%;
		}

		.getyzm {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 20rpx;
			height: 56rpx;
			background: #FFFFFF;
			border-radius: 8rpx 8rpx 8rpx 8rpx;
			border: 2rpx solid #FF5152;
			font-size: 28rpx;
			font-weight: 400;
			color: #FF5152;
		}
	}

	.btn {
		width: 694rpx;
		margin: 0 auto;
		margin-top: 60rpx;

		height: 108rpx;
		background: linear-gradient(90deg, #FF5152 0%, #FF8282 100%);
		box-shadow: 0rpx 8rpx 32rpx 0rpx rgba(197, 0, 0, 0.14);
		border-radius: 8rpx 8rpx 8rpx 8rpx;
		font-weight: 400;
		color: #FFFFFF;
		font-size: 32rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 38rpx;
	}

	.inp {
		margin: 0 auto;
		margin-top: 100rpx;
		font-size: 32rpx;
		font-weight: 400;
		padding-bottom: 15rpx;
		width: 90%;
		transition: 0.5s;
	}


	.inps {
		margin: 0 auto;
		margin-top: 80rpx;
		font-size: 32rpx;
		font-weight: 400;
		padding-bottom: 15rpx;
		// border-bottom: 1px solid #EEEEEE;
		width: 90%;
	}
</style>