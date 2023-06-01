<template>
	<view class="gg">
		<!-- title -->
		<view class="top">
			<p class="tilte">{{$t('Cart')}}</p>
			<p class="bj">{{$t('Edit')}}</p>
		</view>
		<!-- 购物车 -->
		<view class="car">
			<view class="car_item" v-for="(item,index) in list">
				<!-- <view :class="[{'car_item_chack_box':item.chack_type},'car_item_chack']"></view> -->
				<view class="car_item_nr">
					<view class="imgbox"><u--image :showLoading="true" :src="getSrc(item.thumb)" width="172rpx" radius="6" height="172rpx"></u--image></view>
					<view class="car_item_nr_box">
						<p class="car_item_nr_title">{{item.title}}</p>
						<p class="car_item_nr_sy">{{$t('Remaining')}}{{item.zongrenshu-item.canyurenshu}}{{$t('Times')}}</p>
						<view class="car_item_nr_btom">
							<p>$<span class="le">{{(item.yunjiage*num_list[index].sun).toFixed(2)}}</span><span class="ri">/{{num_list[index].sun}}{{ $t('Remaining')}}</span></p>
							<view class="jz">
								<p @click="cart_item_cle(item,index)">-</p>
								<input class="inpbox" type="number" v-model="num_list[index].sun">
								<p @click="cart_item_add(item,index)">+</p>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- bottom -->
		<view class="bottom">
			<view class="le">
				<!-- <view class="kg"></view>
				<p>{{$t('car.all')}}</p> -->
			</view>
			<view class="ri">
				<p><span>￥</span>{{auto_num}}</p>
				<view class="btn" @click="pays()">
					{{$t('car.settlement')}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		pay,
		addShopCart,
		cartlist
	} from '@/api/all.js'
	export default {
		data() {
			return {
				auto_num:0,
				list:[],
				num_list:[{sun:''}]
			};
		},
		onLoad() {
		},
		onShow() {
			var i = this.$i18n.locale
			cartlist(i).then(res => {
				var arr = []
				for (let i in res.data.data.shoplist) {
					res.data.data.shoplist[i].chack_type=false
					res.data.data.shoplist[i].car_num = 1
					arr.push(res.data.data.shoplist[i])
				}
				this.list = arr
				
				var num = []
				for (let i in res.data.data.Mcartlist) {
					num.push(res.data.data.Mcartlist[i])
					this.auto_num+=res.data.data.Mcartlist[i].sun*res.data.data.Mcartlist[i].money
				}
				this.num_list = num
				console.log(this.num_list);
				
			})
		},
		methods:{
			pays(){
				uni.navigateTo({
					url:'/pages/index/settlementPayment'
				})
				// var i = this.$i18n.locale
				// pay(i).then(res=>{
					
				// })
			},
			cart_item_add(e,i){
				console.log(e,i);
				if(this.num_list[i].sun<=(e.zongrenshu - e.canyurenshu)){
					this.num_list[i].sun+=1
					var n = this.num_list[i].sun
					var i = this.$i18n.locale
					var a = e.id+'/'+n+'/cart'
					this.auto_num += (e.yunjiage-0)
					addShopCart(i,a).then(res=>{
						
					})
				}
				
			},
			cart_item_cle(e,i){
				if(this.num_list[i].sun>1){
					var n = this.num_list[i].sun
					var i = this.$i18n.locale
					this.auto_num -= (e.yunjiage-0)
					var a = e.id+'/'+n+'/cart'
					addShopCart(i,a).then(res=>{
						
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.gg {
		width: 750rpx;
		min-height: calc(100vh - var(--window-bottom));
	}

	.car {
		padding-top: 40rpx;
		width: 750rpx;
		.car_item{
			width: 90%;
			margin: 0 auto;
			margin-bottom: 60rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.car_item_chack{
				width: 44rpx;
				height: 44rpx;
				background: #FFFFFF;
				border-radius: 50%;
				border: 3rpx solid #EEEEEE;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.car_item_chack_box{
				background-color: #ff5152;
			}
			.car_item_nr{
				width: 100%;
				height: 175rpx;
				display: flex;
				align-items: center;
				.imgbox{
					width: 172rpx;
					height: 172rpx;
					box-shadow: 0rpx 8rpx 24rpx 0rpx rgba(0,0,0,0.14);
					border-radius: 12rpx 12rpx 12rpx 12rpx;
				}
				.car_item_nr_box{
					width: 75%;
					display: flex;
					flex-direction: column;
					height: 100%;
					margin-left: 20rpx;
					.car_item_nr_title{
						height: 40rpx;
						font-size: 28rpx;
						width: 100%;
						word-break:break-all;
						display: -webkit-box;
						-webkit-line-clamp:1;
						-webkit-box-orient: vertical;
						overflow: hidden;
						font-weight: 500;
						color: #333333;
						margin-bottom: 16rpx;
					}
					.car_item_nr_sy{
						font-size: 24rpx;
						font-weight: 500;
						color: #999999;
					}
					.car_item_nr_btom{
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						width: 100%;
						margin-top: 22rpx;
						.jz{
							width: 184rpx;
							height: 60rpx;
							background: #F6F6F6;
							border-radius: 39rpx 39rpx 39rpx 39rpx;
							display: flex;
							align-items: center;
							justify-content: space-between;
							.inpbox{
								background-color: #F6F6F6;
								font-size: 24rpx;
								width: 33%;
								text-align: center;
							}
							p{	
								display: flex;
								align-items: center;
								justify-content: center;
								color: #333333;
								width: 33%;
								height: 100%;
								font-size: 28rpx;
							}
						}
						p{
							color: #FF5152;
							font-size: 24rpx;
							.le{
								font-size: 36rpx;
							}
							.ri{
								color: #333333;
							}
						}
					}
				}
			}
		}
		
	}

	.top {
		width: 750rpx;
		height: 88rpx;
		background: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: relative;

		.tilte {
			position: absolute;
			left: 50%;
			margin-left: -150rpx;
			top: 50%;
			margin-top: -25rpx;
			height: 50rpx;
			width: 300rpx;
			text-align: center;
			font-weight: 600;
			color: #333333;
			font-size: 36rpx;
		}

		.bj {
			line-height: 88rpx;
			font-size: 28rpx;
			font-weight: 500;
			color: #666666;
			margin: 0 28rpx;
		}
	}

	.bottom {
		width: 750rpx;
		height: 120rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -2rpx 8rpx 0rpx rgba(0, 0, 0, 0.06);
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		left: 0;
		bottom: var(--window-bottom);

		.le {

			display: flex;
			align-items: center;
			height: 100%;

			.kg {
				margin: 0 28rpx;
				width: 44rpx;
				height: 44rpx;
				background: #FFFFFF;
				opacity: 1;
				border: 3rpx solid #EEEEEE;
				border-radius: 50%;
				// margin-right: 12rpx;
			}

			p {
				font-weight: 500;
				color: #333333;
				font-size: 28rpx;
			}
		}

		.ri {

			display: flex;
			align-items: center;
			height: 100%;

			p {
				font-size: 40rpx;
				font-weight: 600;
				color: #FF5152;

				span {
					font-size: 24rpx;
				}
			}

			.btn {
				margin: 0 28rpx;
				width: 220rpx;
				height: 84rpx;
				background: #FF5152;
				border-radius: 42rpx 42rpx 42rpx 42rpx;
				font-weight: 400;
				color: #FFFFFF;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>