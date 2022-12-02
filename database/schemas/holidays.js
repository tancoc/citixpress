import mongoose from 'mongoose'

const HolidaySchema = mongoose.Schema(
	{
		description: {
			type: String,
			default: ''
		},
		date: {
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

const Holidays = mongoose.models.Holidays || mongoose.model('Holidays', HolidaySchema)

export default Holidays
