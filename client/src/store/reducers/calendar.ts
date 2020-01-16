import moment from "moment";

export interface ICalendarState {
    period: string,
    next: number,
    prev: number,
    moment: any,
    currentDate: string,
    // isCurrentMonth: boolean,
    calendar_data: any,
}
export const initialState = {
    period: 'month',
    next: 0,
    prev: 0,
    moment: moment(),
    currentDate: "",
    // isCurrentMonth: true,
    calendar_data: [],
};

const createCalendar = (change: string, period: any, next: any, prev: any) => {
    const calendar_data = [];
    let prevDate;
    let nextDate;
    let currentDate;
    // let select = this.state.period;
    // let next = this.state.next;
    // let prev = this.state.prev;

    if(change === 'prev') {
        prev++;
        next--;
        currentDate = moment().subtract(prev, period).format('DD MMMM YYYY');
        prevDate = moment().subtract(prev, period).startOf(period).startOf('isoWeek');
        nextDate = moment().subtract(prev, period).endOf(period).endOf('isoWeek');
    } else if(change === 'next') {
        prev--;
        next++;
        currentDate = moment().add(next, period).format('DD MMMM YYYY');
        prevDate = moment().add(next, period).startOf(period).startOf('isoWeek');
        nextDate = moment().add(next, period).endOf(period).endOf('isoWeek');
    } else {
        prev = 0;
        next = 0;
        currentDate = moment().format('DD MMMM YYYY');
        prevDate = moment().startOf(period).startOf('isoWeek');
        nextDate = moment().endOf(period).endOf('isoWeek');
    }

    while (prevDate.isBefore(nextDate)) {
        calendar_data.push({
            Day: prevDate.format('dddd'),
            DayNumber: +prevDate.format('e') + 1,
            Date: prevDate.format('DD'),
            Month: prevDate.format('MMMM'),
            MonthNumber: prevDate.format('MM'),
            Year: prevDate.format('YYYY'),
            monthYear: prevDate.format('MMMM YYYY'),
            yearMonthDay: prevDate.format('YYYY-MM-DD')
        });
        prevDate.add(1, 'days');
    }

    return {
        data: calendar_data,
        currentDate: currentDate,
        next: next,
        prev: prev
    }
};

export const calendar = (state:ICalendarState = initialState, action: any) => {
    switch (action.type) {
        // case 'CURRENT_MONTH_CHECK':
        //     return {
        //         ...state,
        //         isCurrentMonth: !state.isCurrentMonth
        //     };
        case 'CHANGE_SELECT':
            return {
                ...state,
                period: action.payload.select,
                data: [],
            };
        case 'CREATE_CALENDAR':
            let data = createCalendar(action.payload.change, state.period, state.next, state.prev);
            return {
                ...state,
                calendar_data: data.data,
                currentDate: data.currentDate,
                next: data.next,
                prev: data.prev
            };
        default:
            return state;
    }
};
