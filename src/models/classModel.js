import mongoose from "mongoose";

const classSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    }],
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
});

export const ClassModel = mongoose.model("Class", classSchema);