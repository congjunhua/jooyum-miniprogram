/** 根据当前时间判断早上、上午、中午、下午、晚上。 */
export default Behavior({
	data: {
		dayStage: ''
	},

	lifetimes: {
		attached() {
			try {
				let dayStage = ''
				let h = new Date().getHours()
				const [morning, lateMorning, noon, afternoon, evening] = [4, 9, 11, 14, 18]
				if (h >= morning && h < lateMorning) {
					dayStage = '早上'
				} else if (h >= lateMorning && h < noon) {
					dayStage = '上午'
				} else if (h >= noon && h < afternoon) {
					dayStage = '中午'
				} else if (h >= afternoon && h < evening) {
					dayStage = '下午'
				} else if (h >= evening || h < morning) {
					dayStage = '晚上'
				}
				this.setData({dayStage})
			} catch (e) {
				console.error('【Behavior】 dayStage 设置失败：', e)
			}
		}
	}
})