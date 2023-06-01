<template>
	<view>
		<p class="title">{{$t('oldpas')}}:</p>
		<view class="inputbox">
			<input type="text" :placeholder="$t('poldpas')" v-model="value1">
		</view>
		<p class="title">{{$t('npas')}}:</p>
		<view class="inputbox">
			<input type="text" :placeholder="$t('pnpas')" v-model="value2">
		</view>
		<p class="title">{{$t('npas')}}:</p>
		<view class="inputbox">
			<input type="text" :placeholder="$t('pnpas')" v-model="value3">
		</view>
		<view class="btn" @click="change()">
			{{$t('Confirm')}}
		</view>
	</view>
</template>

<script>
	import {
		userpassword
	} from '@/api/all.js'
	export default {
		data() {
			return {
				value1: '',
				value2: '',
				value3: ''
			};
		},


		methods: {
			change() {
				if (this.value1.length == 0) {
					this.tiops(this.$t('petop'))
					return
				} else if (this.value2.length == 0) {
					this.tiops(this.$t('petop1'))
					return
				} else if (this.value3.length == 0) {
					this.tiops(this.$t('petop2'))
					return
				}
				var i = this.$i18n.locale
				var a = {
					pwd1: this.value1,
					pwd2: this.value2,
					pwd3: this.value3
				}
				userpassword(i, a).then(res => {
					if(res.data.message=='ok'){
						uni.showToast({
							title: '',
							duration: 2000
						});
					}
				})
			},
			tiops(e) {
				uni.showToast({
					title: e,
					icon: 'none',
					duration: 2000
				});
			}
		}
	}
</script>

<style lang="scss">
	.btn {
		margin: 0 auto;
		margin-top: 88rpx;
		width: 90%;
		height: 92rpx;
		background: #FF5152;
		border-radius: 104rpx 104rpx 104rpx 104rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 400;
		color: #FFFFFF;
		font-size: 28rpx;
	}

	.inputbox {
		margin: 0 auto;
		margin-top: 16rpx;
		width: 90%;
		height: 92rpx;
		background: #FFFFFF;
		border-radius: 12rpx 12rpx 12rpx 12rpx;
		border: 2rpx solid #EEEEEE;

		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding-left: 24rpx;

		input {
			font-size: 26rpx;
		}
	}

	.title {
		width: 90%;
		margin: 0 auto;
		font-size: 28rpx;
		font-weight: 500;
		color: #333333;
		margin-top: 40rpx;
	}
</style>