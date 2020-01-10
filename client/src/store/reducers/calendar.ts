import moment from "moment";

export interface IProfileState {
    next: any,
    prev: any,
    moment: any,
    currentDate: string,
    isCurrentMonth: boolean,
    data: any,
}
export const initialState = {
    next: 0,
    prev: 0,
    moment: moment(),
    currentDate: "",
    isCurrentMonth: true,
    data: [],
};
export const profile = (state:IProfileState = initialState, action: any) => {
    switch (action.type) {
        case 'CURRENT_MONTH_CHECK':
            return {
                ...state,
                isCurrentMonth: !state.isCurrentMonth
            };
        case 'CHANGE_SELECT':
            return {
                ...state,
                period: action.payload.select,
                data: [],
            };
        default:
            return state;
    }
};
