import studentService from "../services/studentService.js";

const create = async (request, response) => {
    try {
        const { firstName, lastName, age, gender, course } = request.body;

        if(!firstName || !lastName || !age || !gender || !course) {
            return response.status(400).json({ message: "Please provide all required fields" });
        }

        const student = await studentService.create(request.body);

        if(!student) {
            return response.status(500).json({ message: "Something went wrong" });
        }

        response.status(201).send({ student });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const read = async (request, response) => {
    try {
        const students = await studentService.read();

        if(students.length === 0) {
            return response.status(404).send({ message: "There is no student." });
        }

        response.status(200).send({ students });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const update = async (request, response) => {
    try {
        const { firstName, lastName, age, gender, course } = request.body;
        const { id } = request.params;

        if(!firstName && !lastName && !age && !gender && !course) {
            return response.status(400).send({ message: "Please provide at least one field." });
        }

        await studentService.update(id, request.body);

        return response.status(200).send({ message: "Student updated successfully." });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const remove = async (request, response) => {
    try {
        const { id } = request.params;

        await studentService.remove(id);

        return response.status(200).send({ message: "Student deleted successfully." });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

export default {
    create,
    read,
    update,
    remove,
};