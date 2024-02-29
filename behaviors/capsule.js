/** 胶囊按钮的布局信息 */
export default Behavior({
	data: {
		capsule: {}
	},

	lifetimes: {
		attached() {
			try {
				this.setData({capsule: wx.getMenuButtonBoundingClientRect()})
			} catch (e) {
				console.error('【Behavior】 capsule 设置失败：', e)
			}
		}
	}
})