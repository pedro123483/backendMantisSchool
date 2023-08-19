import teacherService from "../services/teacherService.js";

const create = async (request, response) => {
    try {
        const { firstName, lastName, background, yearsOfExperience } = request.body;

        if(!firstName || !lastName || !background || !yearsOfExperience) {
            return response.status(400).json({ message: "Please provide all required fields" });
        }

        const teacher = await teacherService.create(request.body);

        if(!teacher) {
            return response.status(500).json({ message: "Something went wrong" });
        }

        response.status(201).send({ teacher });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const read = async (request, response) => {
    try {
        const teachers = await teacherService.read();

        if(teachers.length === 0) {
            return response.status(404).send({ message: "There is no teacher." });
        }

        response.status(200).send({ teachers });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const update = async (request, response) => {
    try {
        const { firstName, lastName, background, yearsOfExperience } = request.body;
        const { id } = request.params;

        if(!firstName && !lastName && !background && !yearsOfExperience) {
            return response.status(400).send({ message: "Please provide at least one field." });
        }

        await teacherService.update(id, request.body);

        return response.status(200).send({ message: "Teacher updated successfully." });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const remove = async (request, response) => {
    try {
        const { id } = request.params;

        await teacherService.remove(id);

        return response.status(200).send({ message: "Teacher deleted successfully." });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

const readById = async (request, response) => {
    try {
        const { id } = request.params;

        const teacher = await teacherService.readById(id);

        if(!teacher) {
            return response.status(404).send({ message: "Teacher not found." });
        }

        response.status(200).send({ teacher });
    } catch (error) {
        return response.status(500).send({ message: error.message });
    }
};

export default {
    create,
    read,
    update,
    remove,
    readById,
};