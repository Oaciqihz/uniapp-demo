<template>
	<view>
		<view class="list" v-for="(item,index) in list" @click="junp(item)">
			<u--image :showLoading="true" :src="src" width="88rpx" height="88rpx" shape='circle'></u--image>
			<view class="nr">
				<p class="name">name</p>
				<p class="gm">{{$t('Purchased')}}<span>3</span>{{$t('news.pr')}}</p>
			</view>
			<view class="time">
				2022-02-02 18:00
			</view>
		</view>
	</view>
</template>

<script>
	import {
		buyrecords
	} from '@/api/all.js'
	export default {
		data() {
			return {
				src: '',
				list : []
			};
		},
		onLoad(e) {
			var i = this.$i18n.locale
			var a = e.id
			buyrecords(i,a).then(res=>{
				this.list=res.data.data.cords
			})
		},
		methods: {
			junp(e) {
				uni.navigateTo({
					url: '/pages/index/personalhome'
				})
			}
		}
	}
</script>

<style lang="scss">
	.list {
		width: 90%;
		height: 152rpx;
		display: flex;
		align-items: center;
		margin: 0 auto;
		justify-content: space-between;

		.nr {
			flex: 1;
			height: 88rpx;
			display: flex;
			justify-content: space-between;
			margin-left: 18rpx;
			flex-direction: column;

			.name {
				font-size: 28rpx;
				color: #5BB6EA
			}

			.gm {
				font-size: 28rpx;

				span {
					color: #FF5152;
				}
			}
		}

		.time {
			width: 210rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: #999999;
		}
	}
</style>