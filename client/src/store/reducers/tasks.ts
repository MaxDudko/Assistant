import data from "../../assets/data";

export interface ITasksState {
    // tasks_data: {[key: string]: string}[],
    tasks_data: any,
    categories: string[],
}
export const initialState = {
    tasks_data: data.tasks,
    // tasks_data: [],
    categories: [],
};
export const tasks = (state:ITasksState = initialState, action: any) => {
    switch (action.type) {
        case 'RECEIVED_TASKS_DATA':
            return {
                ...state,
                tasks_data: Object.assign(state.tasks_data, action.payload)
            };
        case 'UPDATE_TASK':
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
            return {
                ...state,
                tasks_data: [
                    ...state.tasks_data,
                    action.payload.data
                ]
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks_data: state.tasks_data.filter((task: any, i: number) => i !== action.payload.index)
            };
        case "GET_CATEGORIES":
            let categories: any = [];
            state.tasks_data.map((task: any, index: number) => {
                if(!categories.includes(task.category)) categories.push(task.category)
            });
            // this.setState({categories: categories})
            return {
                ...state,
                categories: categories
            };

        default:
            return state;
    }
};
