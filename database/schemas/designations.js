import mongoose from 'mongoose'

const DesignationSchema = mongoose.Schema(
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

const Designations = mongoose.models.Designations || mongoose.model('Designations', DesignationSchema)

export default Designations
