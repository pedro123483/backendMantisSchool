import mongoose from "mongoose";

const studentSchema = mongoose.Schema({ 
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    }
});

export const StudentModel = mongoose.model("Student", studentSchema);