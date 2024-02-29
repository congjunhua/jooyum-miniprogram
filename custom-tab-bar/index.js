/** tab 页面路径 */
const pages = [
	"/pages/index/index",
	"/pages/assistant/index",
	"/pages/common/index",
	"/pages/analysis/index",
	"/pages/me/index"
]

Component({
	data: {
		/** 颜色 */
		color: '#6DA908',
		/** tab 标签 */
		items: ['工作', '助手', '常用', '分析', '我'],
		/** 当前选中的页面 */
		selected: 0
	},

	methods: {
		/** tab 的点击回调 */
		tap({currentTarget: {id}}) {
			if (!id) {
				console.error('id 为空')
				return
			}
			wx.vibrateShort({type: 'medium'})
			wx.switchTab({url: pages[Number(id)]})
		}
	}
})