<template>
	<view>
		<view class="imgbox" @click="addimg()">
			<u--image :showLoading="true" :src="src" width="220rpx" height="220rpx" shape='circle'></u--image>
			<view class="imgbosx">
				<image class="img" src="../../static/head.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="btn" @click="addimg()" >
			{{$t('select')}}
		</view>
	</view>
</template>

<script>
	import {
		headimg,
		home
	} from '@/api/all.js'
	import {
		baseURL
	} from '@/api/base.js'
	export default {
		data() {
			return {
				src: ''
			}
		},
		onShow() {
			var i = this.$i18n.locale
			home(i).then(res => {
				this.src = res.data.data.member.img
			})
		},
		methods: {
			addimg() {
				var that = this
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						// uni.showLoading({
						// 	title: '正在上传'
						// });
						var userinfo = uni.getStorageSync("goshop_user_info_yz")
						uni.uploadFile({
							url: baseURL + '/?/mobile/user/headimg/1',
							filePath: tempFilePaths[0],
							name: 'Filedata',
							header: {
								token: userinfo.ushell
							},
							formData: {},
							success: (res) => {
								var json_nr = JSON.parse(res.data)
								that.src = json_nr.data.tname
								// if(json_nr.data.message=='修改成功'){
								// 	uni.showToast({
								// 		title: this.$t('suessmo'),
								// 		duration: 2000
								// 	});
								// }
							}
						})
					},
				})
			},
			upload() {

			}
		}
	}
</script>

<style lang="scss">
	.btn {
		margin: 0 auto;
		margin-top: 18rpx;
		width: 352rpx;
		height: 72rpx;
		background: #FF5152;
		border-radius: 104rpx 104rpx 104rpx 104rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 400;
		color: #FFFFFF;
		font-size: 28rpx;
		box-shadow: 0rpx 8rpx 20rpx 0rpx rgba(205, 0, 0, 0.15);
	}

	.imgbox {
		width: 100%;
		height: 334rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;

		.imgbosx {
			position: absolute;
			left: 50%;
			top: 200rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			width: 220rpx;
			margin-left: -110rpx;
			z-index: 50;

			.img {
				width: 68rpx;
				height: 68rpx;
			}
		}

	}
</style>