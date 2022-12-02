import mongoose from 'mongoose'

const RequestSchema = mongoose.Schema(
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
		purpose: {
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
		approved: {
			by: {
				type: String,
				default: ''
			},
			date: {
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
			}
		},
		rejected: {
			by: {
				type: String,
				default: ''
			},
			date: {
				type: String,
				default: ''
			}
		},
		cancelled: {
			date: {
				type: String,
				default: ''
			}
		},
		status: {
			type: String,
			default: 'waiting'
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

const Requests = mongoose.models.Requests || mongoose.model('Requests', RequestSchema)

export default Requests
