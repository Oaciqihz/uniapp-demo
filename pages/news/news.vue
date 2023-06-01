<template>
	<view>
		<view class="anno_box" v-for="(item,index) in list">
			<view class="imgbox">
				<u--image :showLoading="true" :src="getSrc(item.thumb)" width="216rpx" height="216rpx"></u--image>
			</view>
			<view class="nr">
				<view class="user">
					<u--image :showLoading="true" :src="getSrc(item.userphoto)" width="88rpx" radius='12' height="88rpx" shape='circle'></u--image>
					<view class="user_nr">
						<p>{{$t('news.lucky')}}：<span class="sp1">{{item.q_user}}</span></p>
						<p>{{$t('news.bq')}}<span class="sp2">{{item.zongrenshu}}</span>{{$t('news.pr')}}</p>
					</view>
				</view>
				<p class="ph">{{$t('news.code')}}：<span>{{item.q_user_code}}</span></p>
				<p class="ph">{{$t('news.time')}}：{{item.q_end_time}}</p>
			</view>
			<view class="jt">
				<image :src="$t('index.jt')" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getLotteryList
	} from '@/api/all.js'
	
	export default {
		data() {
			return {
				index:0,
				list:[],
				src: '',
			};
		},
		onShow() {
			
		},
		onLoad() {
			var i = this.index+'/10/1'
			var a = this.$i18n.locale
			getLotteryList(a,i).then(res=>{
				this.list = res.data.listItems
			})
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.anno_box{
		width: 90%;
		height: 280rpx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2rpx solid #EEEEEE;
		position: relative;
		.imgbox{
			width: 216rpx;
			height: 216rpx;
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			overflow: hidden;
			box-shadow: 0rpx 8rpx 24rpx 0rpx rgba(0,0,0,0.14);
		}
		.nr{
			display: flex;
			flex-direction: column;
			.user{
				display: flex;
				align-items: center;
				.user_nr{
					margin: 0 8rpx;
					display: flex;
					flex-direction: column;
					p{
						width: 260rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
					}
					.sp1{
						color: #5BB6EA;
					}
					.sp2{
						color: #FF5152;
					}
				}
			}
			.ph{
				font-size: 20rpx;
				margin-top: 10rpx;
				color: #666666;
				span{
					color: #FF5152;
				}
			}
		}
		.jt{
			position: absolute;
			top: 0;
			right: 0;
			width: 750rpx;
			// background-color: skyblue;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			image{
				width: 22rpx;
				height: auto;
			}
		}
	}
</style>
