import mongoose from "mongoose";

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
        }
    },
    {
        timestamps: true,
    }
)

const movieModel = new mongoose.model("movie", movieSchema)

export default movieModel