export const getTasks = (id: string) => {
    return {
        type: "GET_TASKS_DATA",
        payload: {
            id: id,
            path: 'tasks/get/',
            typed: "RECEIVED_TASKS_DATA"
        }
    }
};

export const updateTask = (data: {[key: string]: string}, index: number, id: string) => {
    return {
        type: "UPDATE_TASK",
        payload: {
            data: data,
            id: id,
            index: index,
            path: "/tasks/update/",
            typed: "UPDATE_TASK"
        }
    }
};

export const createTask = (data: {[key: string]: string}, id: string) => {
  return {
      type: "CREATE_TASK",
      payload: {
          data: data,
          id: id,
          path: "/tasks/create/",
          typed: "CREATE_TASK"
      }
  }
};
