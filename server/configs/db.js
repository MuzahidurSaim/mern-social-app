import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database Connected'))
        await mongoose.connect(`${process.env.MONGODB_URL}/mern_social_app`)
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB