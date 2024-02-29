/** 当前 Tab 页索引 */
const selected = 4

Component({
	lifetimes: {
		attached() {
			try {
				this.getTabBar().setData({selected})
			} catch (e) {
				console.error('页面加载失败：', e)
			}
		}
	}
})