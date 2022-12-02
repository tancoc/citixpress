import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from 'database'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import connect from 'database/connect'
import Users from 'database/schemas/users'

export const authOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST,
				port: process.env.EMAIL_SERVER_PORT,
				auth: {
					user: process.env.EMAIL_SERVER_USER,
					pass: process.env.EMAIL_SERVER_PASSWORD
				}
			},
			from: process.env.EMAIL_FROM
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		FacebookProvider({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET
		})
	],
	session: {
		strategy: 'database',
		maxAge: 30 * 24 * 60 * 60,
		updateAge: 24 * 60 * 60
	},
	callbacks: {
		async session({ session, user }) {
			await connect()

			if (user && user.role === undefined) {
				await Users.findOneAndDelete({ _id: user.id })

				await Users.create({
					_id: user.id,
					name: user.name,
					email: user.email,
					image: user.image,
					created: new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }),
					updated: new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })
				})
			}

			;(session.user.id = user.id), (session.user.department = user.department), (session.user.designation = user.designation), (session.user.status = user.status), (session.user.role = user.role)

			return session
		}
	}
}

export default NextAuth(authOptions)
