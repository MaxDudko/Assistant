export interface INotificationsState {
    notifications_data: {[key: string]: string}[],
}
export const initialState = {
    notifications_data: [],
};
export const notifications = (state:INotificationsState = initialState, action: any) => {
    switch (action.type) {
        case 'RECEIVED_NOTIFICATIONS_DATA':
            return {
                ...state,
                notifications_data: [...action.payload]
            };
        case 'DELETE_MESSAGE':
            let newData = state.notifications_data.filter((e) => {
                return e.id !== action.payload.id;
            });
            return {
                ...state,
                notifications_data: newData
            };
        default:
            return state;
    }
};
