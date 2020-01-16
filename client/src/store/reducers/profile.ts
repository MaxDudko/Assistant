export interface IProfileState {
    profile_data: {[key: string]: string},
}
export const initialState = {
    profile_data: {},
};
export const profile = (state:IProfileState = initialState, action: any) => {
    switch (action.type) {
        case 'RECEIVED_PROFILE_DATA':
            return {
                ...state,
                profile_data: Object.assign(state.profile_data, action.payload)
            };
        case 'SET_PROFILE_DATA':
            return {
                ...state,
                profile_data: Object.assign(state.profile_data, action.payload.data)
            };
        default:
            return state;
    }
};
