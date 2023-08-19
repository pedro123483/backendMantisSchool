import { StudentModel } from "../models/studentModel.js";

const create = (body) => StudentModel.create(body);
const read = () => StudentModel.find();
const update = (id, body) => StudentModel.findOneAndUpdate({ _id: id }, body, { rawResult: true });
const remove = (id) => StudentModel.findOneAndDelete({ _id: id });
const readById = (id) => StudentModel.findById(id);

export default {
    create,
    read,
    update,
    remove,
    readById,
};