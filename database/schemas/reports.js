import mongoose from 'mongoose'

const ReportSchema = mongoose.Schema(
	{
		user: {
			id: {
				type: String,
				default: ''
			}
		},
		type: {
			type: String,
			default: ''
		},
		description: {
			type: String,
			default: ''
		},
		file: {
			url: {
				type: String,
				default: ''
			},
			name: {
				type: String,
				default: ''
			},
			size: {
				type: Number,
				default: 0
			}
		},
		status: {
			type: String,
			default: 'unread'
		},
		created: {
			type: String,
			default: ''
		},
		updated: {
			type: String,
			default: ''
		}
	},
	{ timestamps: true }
)

const Reports = mongoose.models.Reports || mongoose.model('Reports', ReportSchema)

export default Reports
