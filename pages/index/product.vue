<template>
	<view>
		<!-- 顶部tbas -->
		<scroll-view scroll-x="true" class="classification">
			<view class="classbox">
				<view @click="tabs(item,index)" :class="[{'boxs':class_index==index},'box']"
					v-for="(item,index) in shoplist">
					{{$t('di')}}{{shoplist.length-index}}
				</view>
			</view>
		</scroll-view>
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="item" v-for="(item,index) in picarr">
				<u--image :showLoading="true" :src="getSrc(item)" width="750rpx" height="560rpx"></u--image>
			</swiper-item>
		</swiper>
		<!-- 描述 -->
		<view class="mo1">
			<view class="jg">￥<span>{{gooditem.money}}</span></view>
			<view class="jd_box">
				<u-line-progress :percentage="((gooditem.canyurenshu/gooditem.zongrenshu)*100)" :showText='false'
					:striped="true" height='8rpx' active-color="#ff5152"></u-line-progress>
			</view>
			<view class="tips">
				<p><span>{{gooditem.canyurenshu}}</span>{{$t('Participated')}}</p>
				<p><span>{{gooditem.zongrenshu-gooditem.canyurenshu}}</span>{{$t('Remaining')}}</p>
			</view>
			<p class="title">{{gorecode.shopname}}</p>
		</view>
		<!-- 间隔 -->
		<view class="jg_box"></view>
		<!-- 评论 -->
		<view class="comment" @click="junp('/pages/index/comment?id='+sid)">
			<view class="title">
				{{$t('Comment')}}
				<image :src="$t('image.arrowRightward')" mode="widthFix"></image>
			</view>
			<view class="comment_box" v-for="(item,index) in shaidan.slice(0,2)">
				<view class="imgbox"><u--image :showLoading="true" shape='circle' :src="getSrc(item.img)" width="88rpx"
						height="88rpx"></u--image></view>
				<view class="user">
					<p class="name">{{item.user_name}}<span>{{sjc(item.sd_time*1000)}}</span></p>
					<p class="user_comment">{{item.sd_content}}</p>
				</view>
			</view>
		</view>
		<!-- 间隔 -->
		<view class="jg_box"></view>
		<!-- 所有夺宝记录 -->
		<view class="history" @click="junp('/pages/index/history?id='+gooditem.id)">
			{{$t('history')}}
			<image :src="$t('image.arrowRightward')" mode="widthFix"></image>
		</view>
		<!-- 间隔 -->
		<view class="jg_box"></view>
		<!-- 产品详情 -->
		<view class="rich">
			<rich-text
				:nodes="rich_text.replace(/\<img/gi, '<img style=\'max-width: 100%;height:auto;display:block;\'')"></rich-text>
		</view>

		<!-- 底部 -->
		<view class="footer">
			<view class="le" @click="add_product('/pages/shoppingCar/shoppingCar')"
				:style="{borderRadius:''+$t('yuanjiao_l')+' '+$t('yuanjiao_r')+' '+$t('yuanjiao_r')+' '+$t('yuanjiao_l')+' '}">
				{{$t('JoinNow')}}
			</view>
			<view class="ri" @click="add_product()"
				:style="{borderRadius:''+$t('yuanjiao_r')+' '+$t('yuanjiao_l')+' '+$t('yuanjiao_l')+' '+$t('yuanjiao_r')+' '}">
				{{$t('addcar')}}
			</view>
		</view>
	</view>
</template>

<script>
	import {
		item,
		goodspost,
		addShopCart
	} from '@/api/all.js'
	export default {

		data() {
			return {
				id:'',
				sid:'',
				product_type: true,
				src: '',
				class_index: 0,
				rich_text: '',
				category: {},
				gorecode: {},
				gooditem: {},
				shoplist: [],
				shaidan: [],
				picarr: []
			};
		},
		onLoad(e) {
			this.id = e.id
			this.sid = e.sid
			var i = this.$i18n.locale
			var a = e.id
			item(i, a).then(res => {
				this.category = res.data.data.category
				this.gorecode = res.data.data.gorecode
				this.shoplist = res.data.data.itemlist
				this.gooditem = res.data.data.item
				this.rich_text = res.data.data.item.content
				this.picarr = res.data.data.item.picarr
				uni.$store.state.list = res.data.data.shoplist
			})
			var b = e.sid
			goodspost(i, b).then(res => {
				this.shaidan = res.data.data.shaidan
			})
		},
		methods: {
			add_product(e){
				if(this.gooditem.id){
					var i = this.$i18n.locale
					var a = this.gooditem.id+'/'+'1'
					addShopCart(i,a).then(res=>{
						if(res.data.message=='ok'){
							if(e){
								uni.switchTab({
									url:e
								})
								return
							}
							uni.showToast({
								title: this.$t('Addedsuccessfully'),
								duration: 2000
							});
						}else{
							uni.showToast({
								title: this.$t('Addno'),
								icon:'none',
								duration: 2000
							});
						}
					})
					
				}
				
			},
			junp(e) {
				uni.navigateTo({
					url: e
				})
			},
			tabs(e, i) {

				var nu = this.shoplist[this.shoplist.length - i - 1]
				uni.navigateTo({
					url: '/pages/index/revealing?id=' + nu.id + '&sid=' + nu.sid
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
	.footer {
		width: 750rpx;
		height: 116rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		bottom: 0;
		box-shadow: 0rpx -2rpx 8rpx 0rpx rgba(0, 0, 0, 0.06);
		background-color: white;

		.le {
			width: 348rpx;
			height: 92rpx;
			font-weight: 400;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			background: linear-gradient(88deg, #FEC808 0%, #FF9605 100%);
			// border-radius: 46rpx 0rpx 0rpx 46rpx;
			font-size: 28rpx;
		}

		.ri {
			width: 348rpx;
			height: 92rpx;
			font-weight: 400;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			background: linear-gradient(88deg, #fe5c03 0%, #ff5151 100%);
			// border-radius:  0 46rpx 46rpx 0;
			font-size: 28rpx;
		}
	}

	.rich {
		width: 750rpx;
		padding-bottom: 150rpx;
		min-height: 300rpx;
	}

	.history {
		margin: 0 auto;
		width: 93%;
		height: 92rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 600;
		color: #333333;
		font-size: 32rpx;
		line-height: 38rpx;
		border-bottom: 1px solid #F8F8F8;

		image {
			width: 35rpx;
			height: auto;
		}
	}

	.comment {
		width: 750rpx;
		display: flex;
		align-items: center;
		flex-direction: column;


		.comment_box {
			width: 93%;
			height: 168rpx;
			border-bottom: 1px solid #F8F8F8;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.imgbox {
				margin-bottom: 20rpx;
			}

			.user {
				width: 84%;
				display: flex;
				flex-direction: column;

				.user_comment {
					width: 100%;
					font-weight: 400;
					color: #666666;
					font-size: 28rpx;
					margin-top: 24rpx;
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				.name {
					display: flex;
					font-size: 28rpx;
					align-items: center;
					justify-content: space-between;
					color: #5BB6EA;
					line-height: 33rpx;

					span {
						font-size: 20rpx;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}

		.title {
			width: 93%;
			height: 92rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-weight: 600;
			color: #333333;
			font-size: 32rpx;
			line-height: 38rpx;
			border-bottom: 1px solid #F8F8F8;

			image {
				width: 35rpx;
				height: auto;
			}
		}
	}

	.jg_box {
		width: 750rpx;
		height: 20rpx;
		background-color: #f7f7f7;
	}

	.mo1 {
		width: 750rpx;
		height: 316rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -12rpx 28rpx 0rpx rgba(0, 0, 0, 0.06);
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		box-sizing: border-box;
		padding: 28rpx;

		.title {
			width: 100%;
			font-weight: 500;
			color: #333333;
			line-height: 33rpx;
			font-size: 28rpx;
			margin-top: 32rpx;
		}

		.tips {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 10rpx;
			font-weight: 400;
			color: #666666;
			font-size: 24rpx;

			span {
				color: #FF5152;
			}
		}

		.jd_box {
			margin-top: 32rpx;
			width: 100%;
		}

		.jg {
			font-size: 24rpx;
			font-weight: bold;
			color: #FF5152;

			span {
				font-size: 52rpx;
			}
		}
	}

	.swiper {
		width: 750rpx;
		height: 560rpx;

		.item {
			width: 750rpx;
			height: 560rpx;
		}
	}

	.classification {
		width: 750rpx;
		height: 88rpx;

		.classbox {
			display: flex;
			align-items: center;
			padding-left: 38rpx;
			// flex-direction: row-reverse;

			.box {
				flex-shrink: 0;
				margin-right: 80rpx;
				position: relative;
				height: 46rpx;
			}

			.boxs {
				color: #FF5152;

			}

			.boxs::before {
				content: '';
				background-color: #FF5152;
				z-index: 10;
				width: 76rpx;
				height: 2px;
				border-radius: 4px;
				position: absolute;
				left: 50%;
				bottom: -10rpx;
				margin-left: -38rpx;
			}
		}
	}
</style>