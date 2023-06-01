<template>
	<view>
		<!-- 用户信息 -->
		<view class="user">
			<u--image :showLoading="true" :src="img" width="132rpx" height="132rpx" shape='circle'></u--image>
			<view class="userbox" @click="login()">
				<p class="phone" v-if="!login_type">{{$t('user.login')}}</p>
				<p class="phone" v-else>{{userinfo.username}}</p>
				<p class="tips" v-if="login_type">{{yungoudj}}</p>
			</view>
			<view class="btn" @click="junp('/pages/user/recharge')">
				{{$t('user.zc')}}
			</view>
		</view>
		<!-- 数值 -->
		<view class="sz">
			<view class="box">
				<p class="nm">{{userinfo.score}}</p>
				<p class="tips">{{$t('user.lv')}}</p>
			</view>
			<view class="box">
				<p class="nm">{{userinfo.jingyan}}</p>
				<p class="tips">{{$t('user.jy')}}</p>
			</view>
			<view class="box">
				<p class="nm">{{userinfo.money}}</p>
				<p class="tips">{{$t('user.dl')}}</p>
			</view>
		</view>
		<!-- 列表1 -->
		<view class="list">
			<view class="list_box" v-for="(item,index) in list" @click="list_junp(item,index)">
				<view class="img">
					<u--image :showLoading="true" :src="item.img" width="60rpx" height="60rpx"
						shape='circle'></u--image>
				</view>
				<view class="nr">
					{{$t('user.list')[index]}}
					<image :src="$t('index.jt')" mode="widthFix"></image>
				</view>
			</view>
		</view>
		<!-- 中间 -->
		<view class="geduan"></view>

		<!-- 列表2 -->
		<view class="list">
			<view class="list_box" v-for="(item,index) in lists" @click="lists_junp(index)">
				<view class="img">
					<u--image :showLoading="true" :src="item.img" width="60rpx" height="60rpx"
						shape='circle'></u--image>
				</view>
				<view class="nr">
					{{$t('user.lists')[index]}}
					<image :src="$t('index.jt')" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		home
	} from '@/api/all.js'
	export default {
		data() {
			return {
				login_type: false,
				userinfo: {},
				img: '',
				yungoudj: '',
				src: '',
				list: [{
						img: '../../static/user/q60@2x.png'
					},
					{
						img: '../../static/user/q61@2x.png'
					},
					{
						img: '../../static/user/q62@2x.png'
					},
					{
						img: '../../static/user/q63@2x.png'
					},
					{
						img: '../../static/user/q64@2x.png'
					},
					{
						img: '../../static/user/q65@2x.png'
					}
				],
				lists: [{
						img: '../../static/user/q80@2x.png'
					},
					{
						img: '../../static/user/q81@2x.png'
					},
					{
						img: '../../static/user/q83@2x.png'
					},
					{
						img: '../../static/user/q84@2x.png'
					},
					{
						img: '../../static/user/q85@2x.png'
					},
					{
						img: '../../static/user/q87@2x.png'
					}
				]
			};
		},
		onShow() {
			var i = this.$i18n.locale
			home(i).then(res => {
				this.yungoudj = res.data.data.member.yungoudj
				this.img = res.data.data.member.img
				this.userinfo = res.data.data.member

			})
			var userinfo = uni.getStorageSync("goshop_user_info")
			if (userinfo) {
				this.login_type = true
				
			}
		},
		methods: {
			list_junp(e, i) {
				if (i == 0) {
					this.junp('/pages/user/sign')
				} else if (i == 1) {
					this.junp('/pages/user/record')
				} else if (i == 2) {
					this.junp('/pages/user/obtained')
				} else if (i == 3) {
					this.junp('/pages/user/showing')
				} else if (i == 4) {
					this.junp('/pages/user/history')
				} else if (i == 5) {
					this.junp('/pages/user/inviteManagement')
				}
			},
			lists_junp(i) {
				var that = this
				if (i == 0) {
					this.junp('/pages/user/changepassword')
				} else if (i == 1) {
					this.junp('/pages/user/changeimage')
				} else if (i == 2) {
					this.junp('/pages/user/modifyprofile')
				} else if (i == 3) {
					this.junp('/pages/user/address')
				} else if (i == 5) {
					uni.showModal({
						title: this.$t('prompt'),
						content: this.$t('aystlo'),
						success: function(res) {
							if (res.confirm) {
								uni.removeStorage({
									key: "goshop_user_info",
									success() {

										that.login_type = false
										that.userinfo = {}
										that.$router.go(0)
									}
								})
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			junp(e) {
				uni.navigateTo({
					url: e
				})
			},
			login() {
				if (this.login_type) {

				} else {
					uni.navigateTo({
						url: '/pages/user/login'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.list {
		width: 750rpx;

		.list_box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;

			.img {
				margin: 0 28rpx;
			}
		}

		.nr {
			width: 87%;
			height: 116rpx;
			font-size: 28rpx;
			display: flex;
			font-weight: 400;
			color: #333333;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #EEEEEE;

			image {
				margin: 0 30rpx;
				width: 20rpx;
				height: auto;
			}
		}
	}

	.geduan {
		width: 750rpx;
		height: 16rpx;
		background: #EEEEEE;
	}

	.sz {

		width: 692rpx;
		margin: 0 auto;
		margin-bottom: 50rpx;
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		.box {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 33%;

			justify-content: center;

			.nm {
				font-weight: bold;
				font-size: 40rpx;
				color: #333333;
				line-height: 47rpx;
			}

			.tips {
				margin-top: 8rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #999999;
				line-height: 28rpx;
			}
		}
	}

	.user {
		width: 692rpx;
		margin: 36rpx auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.userbox {
			display: flex;
			flex-direction: column;
			width: 350rpx;

			.phone {
				font-weight: 600;
				color: #333333;
				font-size: 32rpx;
				margin-bottom: 12rpx;
				line-height: 38rpx;
			}

			.tips {
				color: #999999;
				font-size: 24rpx;
				line-height: 28rpx;
			}
		}

		.btn {

			height: 50rpx;
			line-height: 50rpx;
			font-size: 24rpx;
			background: #FF5152;
			border-radius: 58rpx 58rpx 58rpx 58rpx;
			text-align: center;
			font-weight: 400;
			color: #FFFFFF;
			padding: 0 20rpx;
		}
	}
</style>