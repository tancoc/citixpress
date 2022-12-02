import mongoose from 'mongoose'

const DepartmentSchema = mongoose.Schema(
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

const Departments = mongoose.models.Departments || mongoose.model('Departments', DepartmentSchema)

export default Departments
