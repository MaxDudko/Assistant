const data: any = {
    user: {
        id: 1,
        userName: "Max",
        firstName: "Max",
        lastName: "Dudko",
        birthday: "24.10.1991",
        location: "Ukraine, ZP-City",
        avatar: "https://media.licdn.com/dms/image/C4D03AQFI1XZ240JlXg/profile-displayphoto-shrink_100_100/0?e=1579737600&v=beta&t=JydIeQO26Zq4YkQlwx0Zwfml-g0MoEc3-8_hg9P-O_I",
        email: "max2410zp@gmail.com",
        registration: "10.11.2019"
    },
    SidebarItems: [
        {
            name: "Dash Board",
            icon: "MdDashboard",
            module: "DashBoard"
        },
        {
            name: "Task Manager",
            icon: "FaTasks",
            module: "TaskManager"
        },
        {
            name: "Agile Kanban",
            icon: "GoProject",
            module: "AgileKanban"
        },
        {
            name: "Personal Finance",
            icon: "MdMonetizationOn",
            module: "PersonalFinance"
        },

    ],
    notifications: [
        {
            id: 1,
            title: "Welcome",
            from: "Assistant",
            to: "Max",
            date: "22.11.2019 12:00",
            text: "Welcome to Assistant!!! Glad to see you here 😊😊😊",
            check: false,
        },
        {
            id: 2,
            title: "About",
            from: "Assistant",
            to: "Max",
            date: "22.11.2019 14:10",
            text: `All what you need in one application... Personal dashboard with convenient customizable interface, include: customizable interface options, different widgets: to-do-list, calendar, weather, news, social networks, payment, etc... notifications, data storage, etc... Docs: https://docs.google.com/document/d/133I9VMq4_CGjn6BMtMuWr7puimJ9lBa3fbLjTqe1pJs/edit Repository: https://github.com/MaxDudko/Assistant`,
            check: false,
        },
        {
            id: 3,
            title: "Lorem Ipsum",
            from: "Lorem Fish",
            to: "Max",
            date: "22.11.2019 16:25",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            check: false,
        },
        {
            id: 4,
            title: "Lorem Ipsum",
            from: "Lorem Fish",
            to: "Max",
            date: "22.11.2019 16:25",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            check: false,
        },
        {
            id: 5,
            title: "Lorem Ipsum",
            from: "Lorem Fish",
            to: "Max",
            date: "22.11.2019 16:25",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            check: false,
        },
    ],
    tasks: {
        "Life": [
            {
                title: "Call John",
                priority: 3,
                created: "18.12.2019",
                date: "30.12.2019 16:20",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt!!!"
            },
            {
                title: "Buy NewYear`s Presents",
                priority: 5,
                created: "15.12.2019",
                date: "25.12.2019 13:00",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "Go to party",
                priority: 0,
                created: "20.12.2019",
                date: "31.12.2019 20:00",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
        ],
        "Work": [
            {
                title: "Work on BackEnd",
                priority: 0,
                created: "25.12.2019",
                date: "10.01.2020 10:00",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "End Project",
                priority: 5,
                created: "20.12.2019",
                date: "20.01.2020 18:00",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Start New Project",
                priority: 4,
                created: "26.12.2019",
                date: "15.02.2020 10:00",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
        ],
    },
};

export default data;
