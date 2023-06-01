<template>
	<view>
		<view class="" v-if="type == 0">
			<input type="text" class="inp" v-model="account" :placeholder="$t('user.account')">
			<view class="btn" @click="submit()">
				{{$t('user.Submit')}}
			</view>
		</view>
		<view class="" v-if="type == 1">
			<view class="name">
				<p>{{$t('user.send')}}</p>
				<p>{{account}}</p>
			</view>
			<view class="inss">
				<u-code-input v-model="value" maxlength='4' @finish="finish"></u-code-input>
			</view>
		</view>
		<view class="" v-if="type == 2">
			<input type="safe-password" class="inp" v-model="password" :placeholder="$t('user.newpas')">
			<input type="safe-password" class="inps" v-model="passwords" :placeholder="$t('user.renewpas')">
			<view class="btn" @click="newpassword()">
				{{$t('user.Comfirm')}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				account: '',
				type: 2,
				value: '',
				password: '',
				passwords: ''
			};
		},
		methods: {
			submit() {
				if (this.account.length == 0) {
					uni.showToast({
						title: this.$t('user.tips1'),
						icon: 'none',
						duration: 2000
					});
				} else {

				}
			},
			finish(e) {
				this.type = 2
			},
			newpassword() {
				if (this.password == '') {
					
				} else if (this.password != this.passwords) {
					uni.showToast({
						title: this.$t('user.incon'),
						icon: 'none',
						duration: 2000
					});
				}
			}
		}

	}
</script>

<style lang="scss">
	.inss {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 80rpx;
	}

	.name {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		padding-top: 60rpx;

		p {
			font-weight: 400;
			line-height: 33rpx;
			color: #999999;
			font-size: 28rpx;
			margin-top: 12rpx;
		}
	}

	.inp {
		margin: 0 auto;
		margin-top: 100rpx;
		font-size: 32rpx;
		font-weight: 400;
		padding-bottom: 15rpx;
		border-bottom: 1px solid #EEEEEE;
		width: 90%;
	}

	.inps {
		margin: 0 auto;
		margin-top: 70rpx;
		font-size: 32rpx;
		font-weight: 400;
		padding-bottom: 15rpx;
		border-bottom: 1px solid #EEEEEE;
		width: 90%;
	}

	.btn {
		width: 694rpx;
		margin: 0 auto;
		margin-top: 62rpx;
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
</style>