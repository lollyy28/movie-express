import mongoose from "mongoose";
import userModel from "./userModel.js";

const movieSchema = new mongoose.Schema (
    {
        judul: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        tahunRilis: {
            type: String,
            required: true,
            trim: true
        },
        sutradara: {
            type: String,
            required: true,
            trim: true
        },
        // Field Relasi 
        createdBy: {
            type : mongoose.Types.ObjectId,
                ref: userModel // Referensi ke model User
        }
    },
    {
        timestamps: true,
    }
)

const movieModel = new mongoose.model("movie", movieSchema)

export default movieModel