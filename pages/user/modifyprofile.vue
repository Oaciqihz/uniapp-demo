<template>
	<view>
		<p class="title">{{$t('NickName')}}:</p>
		<view class="inputbox">
			<input type="text" :placeholder="$t('pnickname')" v-model="name">
		</view>
		<p class="title">{{$t('Description')}}:</p>
		<view class="inputbox">
			<input type="text" :placeholder="$t('pdescr')" v-model="description">
		</view>
		<view class="btn" @click="profilechange()">
			{{$t('Confirm')}}
		</view>
	</view>
</template>

<script>
	import {
		profilechange
	} from '@/api/all.js'
	export default {
		data() {
			return {
				name: '',
				description: ''
			};
		},
		onShow() {
			
		},
		methods: {
			profilechange() {
				if(this.name.length==0){
					uni.showToast({
						title: this.$t('peyn'),
						icon:'none',
						duration: 2000
					});
				}else if(this.description.length==0){
					uni.showToast({
						title: this.$t('peyqm'),
						icon:'none',
						duration: 2000
					});
				}
				var i = {
					username:this.name,
					qianming:this.description
				}
				profilechange(i).then(res=>{
					if(res.data.message=='ok'){
						uni.showToast({
							title: this.$t('suessmo'),
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