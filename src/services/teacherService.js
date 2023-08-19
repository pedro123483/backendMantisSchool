import { TeacherModel } from "../models/teacherModel.js";

const create = (body) => TeacherModel.create(body);
const read = () => TeacherModel.find();
const update = (id, body) => TeacherModel.findOneAndUpdate({ _id: id }, body, { rawResult: true });
const remove = (id) => TeacherModel.findOneAndDelete({ _id: id });
const readById = (id) => TeacherModel.findById(id);

export default {
    create,
    read,
    update,
    remove,
    readById,
};