/** 设备的布局信息 */
export default Behavior({
	data: {
		rect: {
			screenHeight: 0,
			unsafeHeight: 0,
		}
	},

	lifetimes: {
		attached() {
			try {
				let {
					screenHeight,
					safeArea: {bottom}
				} = wx.getSystemInfoSync()


				let rect = {
					screenHeight,
					unsafeHeight: screenHeight - bottom,
				}

				this.setData({rect})
			} catch (e) {
				console.error('布局信息加载失败', e)
			}
		}
	}
})