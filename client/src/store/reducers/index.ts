import {combineReducers} from 'redux';

import {auth, IAuthState} from "./auth";
import {profile, IProfileState} from "./profile";
import {notifications, INotificationsState} from "./notifications";
import {settings, ISettingsState} from "./settings";
import {common, ICommonState} from "./common";


export const reducers = combineReducers({
    auth,
    profile,
    notifications,
    settings,
    common,
});

export interface IReduxState{
    auth: IAuthState,
    profile: IProfileState,
    notifications: INotificationsState,
    settings: ISettingsState,
    common: ICommonState,
}
