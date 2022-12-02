import mongoose from 'mongoose'

const RequestTypeSchema = mongoose.Schema(
	{
		name: {
			type: String,
			default: ''
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

const RequestTypes = mongoose.models.RequestTypes || mongoose.model('RequestTypes', RequestTypeSchema)

export default RequestTypes
