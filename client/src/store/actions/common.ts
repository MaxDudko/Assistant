export const collapseSidebar = () => {
    return {
        type: "COLLAPSE_SIDEBAR",
        payload: {}
    }
};

export const selectController = (key: string, name: string) => {
    return {
        type: "SELECT_CONTROLLER",
        payload: {
            key: key,
            name: name
        }
    }
};

export const TaskManagerView_CHANGE = (view: string) => {
    return {
        type: "TaskManagerView_CHANGE",
        payload: {
            view: view
        }
    }
};
