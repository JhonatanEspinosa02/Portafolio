import mongoose from "mongoose";
import { Schema } from "mongoose";
import { DataSchemaType } from "../types/DataTypes";


const dataSchema : Schema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const Data = mongoose.model<DataSchemaType>('Data', dataSchema);

export default Data;
