import data from "../../assets/data";

export interface ITasksState {
    // tasks_data: {[key: string]: string}[],
    tasks_data: any,
}
export const initialState = {
    tasks_data: data.tasks,
};
export const tasks = (state:ITasksState = initialState, action: any) => {
    switch (action.type) {
        case 'RECEIVED_TASKS_DATA':
            return {
                ...state,
                tasks_data: Object.assign(state.tasks_data, action.payload)
            };
        case 'UPDATE_TASK':
            // let tasks = state.tasks_data;
            // tasks[action.payload.index] = action.payload.data;
            return {
                ...state,
                tasks_data: state.tasks_data.map((task: any, i: number) => (
                    (i === action.payload.index) ?
                        {...action.payload.data}
                        :
                        {...task})
                )
            };
        case 'CREATE_TASK':
            // let tasks = state.tasks_data;
            // tasks[tasks.length] = data;
            return {
                ...state,
                tasks_data: [
                    ...state.tasks_data,
                    action.payload.data
                ]
            };
        default:
            return state;
    }
};
