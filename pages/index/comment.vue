<template>
	<view>
		<view class="comment" v-for="(item,index) in shaidan" @click="detail(item)">
			<view class="head">
				<u--image :showLoading="true" shape='circle' :src="getSrc(item.img)" width="88rpx" height="88rpx"></u--image>
			</view>
			<view class="nr">
				<view class="mo1">
					<view class="mo1_l">
						<p class="name">{{item.user_name}}</p>
						<p class="time">{{sjc(item.sd_time*1000)}}</p>
					</view>
					<view class="mo1_r">
						<image src="../../static/love (1).png" mode=""></image>
						{{item.sd_ping}}
						<image src="../../static/comm.png" mode=""></image>
						{{item.sd_zhan}}
					</view>
				</view>
				<view class="mo2">{{item.sd_title}}</view>
				<view class="mo3">
					{{item.sd_content}}
				</view>
				<scroll-view scroll-x="true" class="mo4">
					<view class="mo4_nr">
						<view class="imgbox" v-for="(item,index) in item.imglist">
							<u--image :showLoading="true" :src="getSrc(item)" width="208rpx" height="156rpx"
								radius='12'></u--image>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		goodspost
	} from '@/api/all.js'
	export default {
		data() {
			return {
				src: '',
				shaidan:[]
			};
		},
		onLoad(e){
			console.log(e);
			var i = this.$i18n.locale
			var b = e.id
			goodspost(i, b).then(res => {
				
				var list = res.data.data.shaidan
				list.forEach((e,i)=>{
					e.imglist = e.sd_photolist.split(';')
					e.imglist.pop()
				})
				this.shaidan = list
			})
		},
		methods:{
			detail(e){
				uni.navigateTo({
					url:'/pages/index/commentdetail?id='+e.sd_id
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
	.comment {
		width: 90%;
		margin: 0 auto;
		padding: 32rpx 0;
		display: flex;
		justify-content: space-between;
		border-bottom: 2rpx solid #EEEEEE;

		.head {
			width: 88rpx;
			height: 88rpx;
		}

		.nr {
			width: 84%;
			display: flex;
			flex-direction: column;

			.mo4 {
				width: 100%;
				height: 156rpx;
				margin-top: 16rpx;

				.mo4_nr {
					display: flex;
					align-items: center;

					.imgbox {
						margin-right: 16rpx;
						width: 208rpx;
						height: 156rpx;
						flex-shrink: 0;
					}
				}
			}

			.mo3 {
				width: 100%;
				font-weight: 400;
				color: #666666;
				font-size: 28rpx;
				line-height: 43rpx;
				margin-top: 8rpx;
				word-break: break-all;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}

			.mo2 {
				font-size: 32rpx;
				margin-top: 24rpx;
				font-weight: 600;
				color: #333333;
			}

			.mo1 {
				width: 100%;
				height: 72rpx;
				display: flex;
				justify-content: space-between;

				.mo1_r {
					display: flex;
					align-items: center;
					font-size: 20rpx;
					font-weight: 400;
					color: #666666;

					image {
						margin-left: 32rpx;
						margin-right: 5rpx;
						width: 36rpx;
						height: 36rpx;
					}
				}

				.mo1_l {
					.name {
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
			}
		}
	}
</style>