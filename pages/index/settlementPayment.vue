<template>
	<view class="big">
		<view class="list" v-for="(item,index) in list">
			<view class="imgbox"><u--image :showLoading="true" :src="getSrc(item.thumb)" width="172rpx" radius="6"
					height="172rpx"></u--image></view>
			<view class="car_item_nr_box">
				<p class="car_item_nr_title">{{item.title}}</p>
				<view class="car_item_nr_btom">
					<p>$<span class="le">{{item.yunjiage}}</span><span
							class="ri">/1{{ $t('Remaining')}}</span></p>
					<p class="slss">x{{num_list[index].sun}}</p>
				</view>
			</view>
		</view>

		<view class="zf" @click="check=!check">
			<view class="le">
				<p class="name">{{$t('PaybyIntegral')}}</p>
				<p class="jf">({{$t('YourIntegral')}}:<span>{{money}}</span>)</p>
			</view>
			<view :class="[{'yuan_t':check},'yuan']"></view>
		</view>

		<view class="bottom">
			<p>合计：<span>￥</span><span class="prize">{{auto_num}}</span></p>
			<view class="qr" @click="add">
				{{$t('ConfirmPayment')}}
			</view>
		</view>
	</view>
</template>

<script>
	import {
		pay,
		addShopCart,
		cartlist,
		home,
		paysubmit
	} from '@/api/all.js'
	export default {
		data() {
			return {
				check: false,
				list: [],
				num_list:[],
				auto_num:0,
				money:0,
				userinfo:{}
			};
		},
		onShow() {
			var i = this.$i18n.locale
			home(i).then(res => {
				this.userinfo = res.data.data.member
				this.money = res.data.data.member.money
			})
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
					this.auto_num += res.data.data.Mcartlist[i].sun * res.data.data.Mcartlist[i].money
				}
				this.num_list = num
			})
		},
		methods: {
			add(){
				if(!this.check){
					uni.showToast({
						title: this.$t('Choosepaymentmethod'),
						icon:'none',
						duration: 2000
					});
					return
				}
				pay().then(res=>{
					var i = 'bank/9/'+res.data.data.MoenyCount+'/'+this.userinfo.score+'/'+res.data.data.submitcode
					paysubmit(i).then(res=>{
						
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.list {
		width: 750rpx;
		height: 232rpx;
		display: flex;
		background-color: white;
		align-items: center;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 28rpx;
		box-sizing: border-box;
		.imgbox {
			width: 172rpx;
			height: 172rpx;
			box-shadow: 0rpx 8rpx 24rpx 0rpx rgba(0, 0, 0, 0.14);
			border-radius: 12rpx 12rpx 12rpx 12rpx;
		}

		.car_item_nr_box {
			width: 75%;
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: center;
			margin-left: 20rpx;
			.car_item_nr_btom{
				display: flex;
				justify-content: space-between;
				align-items: flex-end;
				width: 100%;
				margin-top: 22rpx;
				.slss{
					color: #999999;
				}
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
			.car_item_nr_title {
				height: 40rpx;
				font-size: 28rpx;
				width: 100%;
				word-break: break-all;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
				font-weight: 600;
				color: #333333;
				margin-bottom: 16rpx;
			}

			.car_item_nr_sy {
				font-size: 24rpx;
				font-weight: 500;
				color: #999999;
			}
		}
	}

	.zf {
		.yuan {
			width: 36rpx;
			height: 36rpx;
			background: #FFFFFF;
			border: 2rpx solid #EEEEEE;
			border-radius: 50%;
			transition: 0.3s;
		}

		.yuan_t {
			background-color: #ff5152;
		}

		.le {
			display: flex;
			align-items: center;

			.name {
				font-size: 30rpx;
			}

			.jf {
				margin-left: 10rpx;
				font-size: 20rpx;

				span {
					color: #FF5152;
				}
			}
		}

		margin-top: 24rpx;
		width: 750rpx;
		background-color: white;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 28rpx;
		box-sizing: border-box;

	}

	.big {
		width: 750rpx;
		min-height: 80vh;
		background-color: #f8f8f8;

		.bottom {
			width: 100%;
			height: 112rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: white;
			box-sizing: border-box;
			padding: 0 28rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;

			p {
				display: flex;
				align-items: center;
				font-size: 28rpx;

				span {
					color: #FF5152;
					font-size: 28rpx;
				}

				.prize {
					margin-bottom: 8rpx;
					font-size: 48rpx;
				}
			}

			.qr {
				padding: 0 54rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 84rpx;
				background: #FF5152;
				border-radius: 42rpx 42rpx 42rpx 42rpx;
				font-size: 28rpx;
				color: #FFFFFF;
			}
		}
	}
</style>