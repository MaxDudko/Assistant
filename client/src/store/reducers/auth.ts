export interface IAuthState {
    id: string,
}
export const initialState = {
    id: "",
};
export const auth = (state:IAuthState = initialState, action: any) => {
    switch (action.type) {
        case 'SET_ID':
            return {
              ...state,
              id: action.payload.id
            };
        case 'AUTH_CONTROLLER':
            return state;
        default:
            return state;
    }
};
