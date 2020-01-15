import {combineReducers} from 'redux';

import {auth, IAuthState} from "./auth";
import {profile, IProfileState} from "./profile";
import {notifications, INotificationsState} from "./notifications";
import {settings, ISettingsState} from "./settings";
import {common, ICommonState} from "./common";

import {calendar, ICalendarState} from "./calendar";
import {tasks, ITasksState} from "./tasks";


export const reducers = combineReducers({
    auth,
    profile,
    notifications,
    settings,
    common,

    calendar,
    tasks,
});

export interface IReduxState{
    auth: IAuthState,
    profile: IProfileState,
    notifications: INotificationsState,
    settings: ISettingsState,
    common: ICommonState,

    calendar: ICalendarState,
    tasks: ITasksState,
}
