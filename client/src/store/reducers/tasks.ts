import data from "../../assets/data";

export interface ITasksState {
    tasks_data: any,
    categories: string[],
    selectedCategory: string,
}
export const initialState = {
    tasks_data: [],
    categories: [],
    selectedCategory: "All",
};
export const tasks = (state:ITasksState = initialState, action: any) => {
    switch (action.type) {
        case 'RECEIVED_TASKS_DATA':
            return {
                ...state,
                tasks_data: action.payload
            };
        case 'CREATED_TASK':
            return {
                ...state,
                tasks_data: [
                    ...state.tasks_data,
                    action.payload.data
                ]
            };
        case 'UPDATED_TASK':
            return {
                ...state,
                tasks_data: state.tasks_data.map((task: any, i: number) => (
                    (i === action.payload.index) ?
                        {
                            ...action.payload.data
                        }
                        :
                        {
                            ...task
                        })
                )
            };
        case "DELETED_TASK":
            return {
                ...state,
                tasks_data: state.tasks_data.filter((task: any, i: number) => i !== action.payload.index)
            };
        case "GET_CATEGORIES":
            let categories: any = [];
            state.tasks_data.map((task: any) => {
                if(!categories.includes(task.category)) categories.push(task.category)
            });
            return {
                ...state,
                categories: categories
            };
        case "SELECT_CATEGORY":
            return {
                ...state,
                selectedCategory: action.payload.category
            };
        default:
            return state;
    }
};
