<template>
	<view class="bit">
		<view class="ge"></view>
		<view class="box" v-for="(item,index) in list">
			<view class="user">
				<p class="mor" v-if="item.default=='Y'">{{$t('Default')}}</p>
				<p class="pp">{{item.shouhuoren}}</p>
				<p class="phone">{{item.mobile}}</p>
			</view>
			<p class="addname">{{item.sheng+item.shi+item.xian+item.jiedao}}</p>
			<view class="cz">
				<view class="libs tss" @click="change(item)"><image src="../../static/change.png" mode="widthFix"></image>{{$t('Edit')}}</view>
				<view class="libs" @click="deleteitem()"><image src="../../static/ljt.png" mode="widthFix"></image>{{$t('Delete')}}</view>
			</view>
		</view>
		<view class="gss" @click="add()">{{$t('zjshdz')}}</view>
	</view>
</template>

<script>
	import {
		address,
		deladdress
	} from '@/api/all.js'
	export default {
		data() {
			return {
				list: []
			};
		},
		onShow() {

			address().then(res => {
				this.list = res.data.data.dizhi
			})
		},
		methods:{
			add(){
				uni.navigateTo({
					url:'/pages/user/NewAddress'
				})
			},
			deleteitem(e){
				
			},
			change(e){
				uni.showModal({
					title: this.$t('prompt'),
					content: this.$t('aystdi'),
					success: function (res) {
						if (res.confirm) {
							var i = e.id
							deladdress(i).then(res=>{
								
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.bit {
		width: 750rpx;
		min-height: 80vh;
		background-color: #f8f8f8;

		.ge {
			width: 750rpx;
			height: 20rpx;
		}

		.box {
			.addname {
				color: #333333;
				line-height: 33rpx;
				font-weight: 600;
				width: 100%;
				padding: 20rpx 0;
				border-bottom: 1px solid #EEEEEE;
				word-break: break-all;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			.cz{
				display: flex;
				align-items: center;
				justify-content: flex-end;
				height:80rpx;
				.tss{
					margin: 0 50rpx;
				}
				.libs{
					image{
						width: 28rpx;
						height: auto;
						margin: 0 10rpx;
					}
					display: flex;
					align-items: center;font-size: 28rpx;
					color: #333333;
				}
			}
			.user {
				.phone {
					margin: 0 20rpx;
					font-size: 24rpx;
					color: #666666;
				}

				.pp {
					margin: 0 10rpx;
					font-size: 24rpx;
					color: #666666;
				}

				.mor {
					padding: 0 10rpx;
					height: 28rpx;
					background: #FF5152;
					border-radius: 6rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					font-weight: 400;
					color: #FFFFFF;
					font-size: 20rpx;
				}

				display: flex;
				align-items: center;
				color: #666666;
			}

			box-sizing: border-box;
			padding: 28rpx;
			width: 90%;
			height: 220rpx;
			background: #FFFFFF;
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			margin: 0 auto;
			margin-bottom: 20rpx;
		}

		.gss {
			width: 450rpx;
			height: 80rpx;
			background: #FF5152;
			border-radius: 78rpx 78rpx 78rpx 78rpx;
			position: fixed;bottom: 72rpx;
			left: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: 400;
			color: #FFFFFF;
			margin-left: -200rpx;
			font-size: 28rpx;
		}
	}
</style>