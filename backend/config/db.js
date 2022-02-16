import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const URL = process.env.MONGO_URL

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://ravivek1234:ravivek1234@lordsmedia.0qxiu.mongodb.net/proshop?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useCreateIndex: true,
      }
    )
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}
export default connectDB
