export interface ISettingsState {
    settings_data: {[key: string]: string}[],
}
export const initialState = {
    settings_data: [],
};
export const settings = (state:ISettingsState = initialState, action: any) => {
    switch (action.type) {

        default:
            return state;
    }
};
