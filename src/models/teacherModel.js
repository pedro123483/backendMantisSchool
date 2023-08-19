import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({ 
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true 
    },
    background: {
        type: String,
        required: true 
    },
    yearsOfExperience: {
        type: Number,
        required: true 
    },
});

export const TeacherModel = mongoose.model("Teacher", teacherSchema);