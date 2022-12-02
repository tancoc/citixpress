import mongoose from 'mongoose'

const AnnouncementSchema = mongoose.Schema(
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

const Announcements = mongoose.models.Announcements || mongoose.model('Announcements', AnnouncementSchema)

export default Announcements
