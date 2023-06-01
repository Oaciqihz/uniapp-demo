<script>
	export default {
		onLaunch: function() {
			// this.tabi()
			// uni.hideTabBar();
			var lo = uni.getStorageSync('locale')
			if (lo == 'al') {
				document.documentElement.setAttribute("dir", "rtl")
				this.$i18n.locale = 'al'
				uni.setLocale('al');
			} else {
				document.documentElement.setAttribute("dir", "")
				this.$i18n.locale = 'en'
				uni.setLocale('en');
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	view {
		color: #333333;
	}

	.inputbox {
		.uni-input-input {
			transition: 0.5s;
			padding-bottom: 15rpx;
			border-bottom: 1px solid #EEEEEE;
			&:focus {
				
				// border: 1px solid black;
				border-image: linear-gradient(270deg, rgba(254, 200, 8, 1), rgba(255, 81, 82, 1)) 2 2;
			}
		}
	}

	/*每个页面公共css */
</style>