export interface ICoreState {
    profile: any,
    settings: any,
    notifications: any,
}
export const initialState = {
    profile: {},
    settings: [],
    notifications: [],
};
export const coreReducer = (state:ICoreState = initialState, action: any) => {
    switch (action.type) {
        case 'RECEIVED_PROFILE_DATA':
            return {
                ...state,
                profile: Object.assign(state.profile, action.payload)
            };
        case 'UPDATE_PROFILE_DATA':
            return {
                ...state,
                profile: Object.assign(state.profile, action.payload)
            };
        case 'RECEIVED_NOTIFICATIONS_DATA':
            return {
                ...state,
                notifications: [...action.payload]
            };
        default:
            return state;
    }
};
