import { ClassModel } from "../models/classModel.js";

const create = (body) => ClassModel.create(body);
const read = () => ClassModel.find().populate("teacher").populate("students");
const update = (id, body) => ClassModel.findOneAndUpdate({ _id: id }, body, { rawResult: true });
const remove = (id) => ClassModel.findOneAndDelete({ _id: id });
const readById = (id) => ClassModel.findById(id).populate("teacher").populate("students");

export default {
    create,
    read,
    update,
    remove,
    readById,
};