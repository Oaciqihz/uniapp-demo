<template>
	<view>
		<!-- top -->
		<view class="top">

		</view>
		<!-- 顶部tbas -->
		<scroll-view scroll-x="true" class="classification">
			<view class="classbox">
				<view @click="tabs(item,index)" :class="[{'boxs':class_index==index},'box']"
					v-for="(item,index) in $t('index.classification')">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				class_index:3
			};
		},
		methods:{
			tabs(e,i){
				if(i==1){
					uni.switchTab({
						url:'/pages/commodity/commodity'
					})
				}else if(i==2){
					uni.switchTab({
						url:'/pages/news/news'
					})
				}else if(i==0){
					uni.switchTab({
						url:'/pages/index/index'
					})
				}else if(i==4){
					uni.navigateTo({
						url:'/pages/user/sign'
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	.top {
		width: 750rpx;
		height: 88rpx;
		position: relative;

	}

	.classification {
		width: 750rpx;
		height: 88rpx;

		.classbox {
			display: flex;
			align-items: center;
			padding-left: 38rpx;

			.box {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 16rpx;
				background-color: #eeeeee;
				padding: 0 32rpx;
				color: #666666;
				height: 58rpx;
				line-height: 28rpx;
				flex-shrink: 0;
				font-weight: 400;
				border-radius: 40rpx;
			}

			.boxs {
				background: #FF5152;
				color: white;
			}
		}
	}
</style>