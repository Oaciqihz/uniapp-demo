<template>
	<view>
		<view class="num">
			<p class="p1">{{$t('Balance')}}</p>
			<p class="p2">￥{{money}}</p>
		</view>
		<view class="cchang">
			<view :class="[{'xz':xz_index==0},'le']" @click="change_index(0)"
				:style="{borderRadius:''+$t('yuanjiao_l')+' '+$t('yuanjiao_r')+' '+$t('yuanjiao_r')+' '+$t('yuanjiao_l')+' '}">
				{{$t('cdetails')}}
			</view>
			<view :class="[{'xz':xz_index==1},'ri']" @click="change_index(1)"
				:style="{borderRadius:''+$t('yuanjiao_r')+' '+$t('yuanjiao_l')+' '+$t('yuanjiao_l')+' '+$t('yuanjiao_r')+' '}">
				{{$t('rdetails')}}
			</view>
		</view>
		<view class="month">
			<p class="months"><!-- <span>7</span>{{$t('Month')}} --></p>
			<p class="au">{{$t('autalcon')}}：￥0</p>
		</view>
		<view class="list" v-for="(item,index) in list">
			<view class="name">
				<p class="tyoe">{{$t('pluckcode')}}</p>
				<p class="time">2022-02-02 18:00:00</p>
			</view>
			<p class="nums">-200.00</p>
		</view>
	</view>
</template>

<script>
	import {
		home,
		getUserRecharge,
		getUserConsumption
	} from '@/api/all.js'
	export default {
		data() {
			return {
				xz_index: 0,
				money: 0,
				list:[],
				index: 0
			};
		},
		onShow() {
			var i = this.$i18n.locale
			var a = this.index + '/10/1'
			getUserRecharge(i, a).then(res => {
				
			})
			getUserConsumption(i, a).then(res => {
				this.list = res.data.listItems
			})
		},
		onLoad() {
			var i = this.$i18n.locale
			home(i).then(res => {
				this.money = res.data.data.member.money
			})
		},
		methods: {
			change_index(e) {
				this.xz_index = e
			}
		}
	}
</script>

<style lang="scss">
	.list {
		.nums {
			font-weight: 500;
			color: #333333;
			line-height: 38rpx;
			font-size: 32rpx;
		}

		.name {
			.tyoe {
				font-size: 28rpx;
				font-weight: 500;
				color: #333333;
				line-height: 33rpx;
				margin-bottom: 10rpx;
			}

			.time {
				font-weight: 400;
				color: #999999;
				font-size: 20rpx;
				line-height: 23rpx;
			}
		}

		width: 90%;
		margin: 0 auto;
		height: 136rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #EEEEEE;
	}

	.month {
		width: 90%;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.months {
			font-weight: 500;
			color: #333333;
			font-size: 24rpx;

			span {
				font-size: 40rpx;
			}
		}

		.au {
			font-size: 24rpx;
			font-weight: 400;
			color: #666666;
		}
	}

	.cchang {
		width: 750rpx;
		height: 116rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: white;

		.le {
			width: 348rpx;
			height: 68rpx;
			font-weight: 400;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #FF5152;
			box-sizing: border-box;
			border: 1px solid #FF5152;
			font-size: 28rpx;
		}

		.ri {
			width: 348rpx;
			height: 68rpx;
			font-weight: 400;
			color: #FF5152;
			box-sizing: border-box;
			border: 1px solid #FF5152;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
		}

		.xz {
			background-color: #FF5152;
			color: #FFFFFF;
		}
	}

	.num {
		width: 90%;
		margin: 0 auto;
		margin-top: 28rpx;
		height: 192rpx;
		background: linear-gradient(90deg, #FF7677 0%, #FF5152 100%);
		border-radius: 12rpx 48rpx 12rpx 12rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 48rpx;


		.p1 {
			font-weight: 400;
			color: #FFFFFF;
			line-height: 33rpx;
			font-size: 28rpx;
			margin-bottom: 10rpx;
		}

		.p2 {
			font-weight: 600;
			color: #FFFFFF;
			line-height: 56rpx;
			font-size: 48rpx;
		}
	}
</style>