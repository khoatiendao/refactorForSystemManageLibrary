import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;

const connMongoose = async() => {
    try {
      await mongoose.connect(MONGODB_URI + DATABASE_NAME).then(() => console.log('Mongoose Connected Successfull'));
    } catch (error) {
      console.log(error);
    }
}

export default connMongoose;
