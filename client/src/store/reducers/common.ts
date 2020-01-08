export interface ICommonState {
    isCollapsedSidebar: boolean,
    moduleSelected: string,
    modalSelected: string | null,
    settingsSelected: string | null,
}
export const initialState = {
    isCollapsedSidebar: false,
    moduleSelected: "TaskManager",
    modalSelected: null,
    settingsSelected: null,
};
export const common = (state:ICommonState = initialState, action: any) => {
    switch (action.type) {
        case 'COLLAPSE_SIDEBAR':
            return {
                ...state,
                isCollapsedSidebar: !state.isCollapsedSidebar
            };
        case 'SELECT_CONTROLLER':
            if(action.payload.key === "modalSelected" && state.modalSelected === action.payload.name) {
                return {
                    ...state,
                    modalSelected: null
                }
            }
            return {
              ...state,
                [action.payload.key]: action.payload.name || null
            };
        default:
            return state;
    }
};
