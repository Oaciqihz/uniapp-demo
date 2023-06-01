<template>
	<view class="content">
		<view class="top">
			<view class="back" @click="back()">
				<image :src="$t('image.arrowLeftward')" mode="widthFix"></image>
			</view>
			<image class="bg" :src="$t('image.login_top')" mode="widthFix"></image>

		</view>
		<view class="title">
			{{$t('user.welcome')}}!
		</view>
		<!-- <view class="phone">{{$t('user.phone')}}</view> -->
		<view class="inputbox">
			<input type="text" class="inp" :placeholder="$t('user.account')" v-model="accout">
		</view>
		<view class="inputbox">
			<input type="password" class="inps" :placeholder="$t('user.password')" v-model="password">
		</view>
		<view class="np">
			<p @click="junp('/pages/user/forgetPassword')">{{$t('user.fpassword')}}?</p>
		</view>
		<view class="btn" @click="login()">
			{{$t('user.login')}}
		</view>
		<view class="or">
			<p></p><span>or</span>
			<p></p>
		</view>
		<p class="tips">{{$t('user.noph')}} <span @click='register()'>{{$t('user.register')}}</span> </p>
	</view>
</template>

<script>
	import {
		userlogin
	} from '@/api/all.js'
	import md5 from "@/api/md5.js";
	export default {
		data() {
			return {
				accout: '',
				password: ''
			};
		},
		methods: {
			login() {
				if (this.accout.length == 0) {
					uni.showToast({
						title: this.$t('eaccout'),
						icon: 'none',
						duration: 2000
					});
					return
				} else if (this.password.length == 0) {
					uni.showToast({
						title: this.$t('epassword'),
						icon: 'none',
						duration: 2000
					});
					return
				}


				// var jm = md5.hex_md5(this.password)
				var i = this.accout + '/' + this.password
				userlogin(i).then(res => {
					if (res.data.message == 'ok') {
						var da = {
							uid:res.data.data.uid,
							ushell:res.data.data.ushell
						}
						uni.setStorage({
							key: "goshop_user_info_yz",
							data: da
						})
						uni.setStorage({
							key: "goshop_user_info",
							data: res.data.data.member,
							success() {
								uni.showToast({
									title: '',
									icon: 'success',
									duration: 2000
								});
								setTimeout(() => {
									uni.switchTab({
										url: '/pages/user/user'
									})
								}, 2000)
							}
						})
					} else {
						uni.showToast({
							title: this.$t('Loginfailed'),
							icon: 'none',
							duration: 2000
						});
					}
				})
			},
			utf16to8(str) {

				var out, i, len, c;

				out = "";

				len = str.length;

				for (i = 0; i < len; i++) {

					c = str.charCodeAt(i);

					if ((c >= 0x0001) && (c <= 0x007f)) {

						out += str.charAt(i);

					} else if (c > 0x07ff) {

						out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));

						out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));

						out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));

					} else {

						out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));



						out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));

					}

				}

				return out;

			},
			base64encode(str) {

				var out, i, len;

				var c1, c2, c3;

				len = str.length;

				i = 0;

				out = "";

				while (i < len) {

					c1 = str.charCodeAt(i++) & 0xff;

					if (i == len) {

						out += base64encodechars.charAt(c1 >> 2);

						out += base64encodechars.charAt((c1 & 0x3) << 4);

						out += "==";

						break;

					}

					c2 = str.charCodeAt(i++);

					if (i == len) {

						out += base64encodechars.charAt(c1 >> 2);

						out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));

						out += base64encodechars.charAt((c2 & 0xf) << 2);

						out += "=";

						break;

					}

					c3 = str.charCodeAt(i++);

					out += base64encodechars.charAt(c1 >> 2);

					out += base64encodechars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));

					out += base64encodechars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));

					out += base64encodechars.charAt(c3 & 0x3f);

				}

				return out;

			},
			register() {
				uni.navigateTo({
					url: '/pages/user/register'
				})
			},
			back() {
				uni.navigateBack()
			},
			junp(e) {
				uni.navigateTo({
					url: e
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 750rpx;
		position: relative;

		.tips {
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			margin-top: 30rpx;
			font-weight: 400;
			color: #999999;
			font-size: 28rpx;

			span {
				margin: 0 10rpx;
				color: #FF5152;
			}
		}

		.or {
			width: 90%;
			margin: 0 auto;
			margin-top: 206rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			font-weight: 400;
			color: #999999;

			p {
				width: 45%;
				height: 1px;
				background-color: #EEEEEE;
			}
		}

		.btn {
			width: 694rpx;
			margin: 0 auto;
			margin-top: 32rpx;

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

		.np {

			margin: 0 auto;
			margin-top: 80rpx;
			width: 90%;
			font-weight: 400;
			color: #FF5152;
			line-height: 33rpx;
			font-size: 28rpx;

			p {
				width: 50%;
			}
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

		.phone {
			margin: 0 auto;
			margin-top: 100rpx;
			font-size: 32rpx;
			font-weight: 400;
			color: #999999;
			width: 90%;

		}

		.top {
			position: absolute;
			top: 0;
			left: 0;
			width: 750rpx;
			display: flex;
			justify-content: space-between;

			.bg {
				cursor: pointer;
				width: 452rpx;
				height: auto;
			}

			.back {
				width: 60rpx;
				height: 60rpx;
				margin-left: 30rpx;
				margin-right: 30rpx;
				margin-top: 30rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					width: 52rpx;
					height: auto;
				}
			}
		}

		.title {
			padding-top: 268rpx;
			width: 90%;
			margin: 0 auto;
			font-size: 52rpx;
			font-weight: 600;
			font-weight: bold;
			color: #333333;
			line-height: 61rpx;
		}

	}
</style>