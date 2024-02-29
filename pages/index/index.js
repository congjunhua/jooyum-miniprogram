import capsule from '../../behaviors/capsule'
import dayStage from '../../behaviors/daystage'
import rect from '../../behaviors/rect'

Component({
	behaviors: [capsule, dayStage, rect],

	data: {
		/** 颜色 */
		colors: {
			color: '#6DA908',
			background: '#262A3B',
			secondaryBackground: 'grey'
		},

		/** 用户信息 */
		user: {
			name: '张三',
			gender: '先生'
		},

		/** 未读消息 */
		messages: new Array(8),

		/** 功能 */
		functions: {
			main: {
				items: new Array(5),
				current: 0
			},
			sub: {
				items: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
				current: 0
			},
			modal: {
				items: new Array(10),
				current: 0
			}
		},

		/** Modal 的显隐 */
		show: false
	},

	methods: {
		/** 子功能按钮的点击回调 */
		sub({currentTarget: {id}}) {
			if (!id) {
				console.error('id为空')
				return
			}
			this.setData({
				'functions.sub.current': Number(id),
				show: true
			})
		},

		/** 关闭弹窗 */
		close({target: {id}}) {
			if (id !== 'close') {
				return
			}
			this.setData({show: false})
		}
	}
})