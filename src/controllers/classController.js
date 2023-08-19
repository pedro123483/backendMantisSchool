import classService from "../services/classService.js";

const create = async (request, response) => {
    try {
        const { name, teacher, students, startDate, endDate } = request.body;

        if(!name || !teacher || !students || !startDate || !endDate) {
            return response.status(400).json({ message: "Please provide all required fields" });
        }

        const subject = await classService.create(request.body);

        if(!subject) {
            return response.status(500).json({ message: "Something went wrong" });
        }

        response.status(201).send({ subject });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const read = async (request, response) => {
    try {
        const subjects = await classService.read();

        if(subjects.length === 0) {
            return response.status(404).send({ message: "There is no classes." });
        }

        response.status(200).send({ subjects });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const update = async (request, response) => {
    try {
        const { name, teacher, students, startDate, endDate } = request.body;
        const { id } = request.params;

        if(!name && !teacher && !students && !startDate && !endDate) {
            return response.status(400).send({ message: "Please provide at least one field." });
        }

        await classService.update(id, request.body);

        return response.status(200).send({ message: "Class updated successfully." });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const remove = async (request, response) => {
    try {
        const { id } = request.params;

        await classService.remove(id);

        return response.status(200).send({ message: "Class deleted successfully." });
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