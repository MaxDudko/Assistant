export const getTasks = (id: string) => {
    return {
        type: "GET_TASKS_DATA",
        payload: {
            id: id,
            path: '/tasks/get/',
            typed: "RECEIVED_TASKS_DATA",
        }
    }
};

export const createTask = (data: any, id: string) => {
    return {
        type: "CREATE_TASK",
        payload: {
            data: data,
            id: id,
            path: "/tasks/create/",
            typed: "CREATED_TASK",
        }
    }
};

export const updateTask = (data: any, index: number, id: string) => {
    return {
        type: "UPDATE_TASK",
        payload: {
            data: data,
            id: id,
            index: index,
            path: "/tasks/update/",
            typed: "UPDATED_TASK",
        }
    }
};

export const deleteTask = (data: any, index: number, id: string) => {
    return {
        type: "DELETE_TASK",
        payload: {
            data: data,
            index: index,
            id: id,
            path: "/tasks/delete/",
            typed: "DELETED_TASK",
        }
    }
};

export const getCategories = () => {
    return {
        type: "GET_CATEGORIES",
        payload: {}
    }
};
export const selectCategory = (category: string) => {
    return {
        type: "SELECT_CATEGORY",
        payload: {
            category: category,
        }
    }
};