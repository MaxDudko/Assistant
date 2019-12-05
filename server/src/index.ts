import Express, { Request, Response, NextFunction } from "express";
import Mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";
import session from "express-session"
import cors from "cors";
import errorHandler from "errorhandler";
// import * as passport from "./config/passport";
import Router from "./routes/index";
// import Users from "./models/Users";

const App = Express();

App.use(cors());
App.use(require('morgan')('dev'));
App.use(bodyParser.urlencoded({
    extended: true
}));
App.use(bodyParser.json());
App.use(Express.static(
    path.join(__dirname, 'public')
));
App.use(session({
    secret: Math.random().toString(36),
    cookie: {
        maxAge: 60000
    },
    resave: false,
    saveUninitialized: false
}));

const isProduction = process.env.NODE_ENV === 'production';
if(!isProduction) {
    App.use(errorHandler());
    App.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.status || 500);

        res.json({
            errors: {
                message: err.message,
                error: err,
            },
        });
    });
}

App.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);

    res.json({
        errors: {
            message: err.message,
            error: {},
        },
    });
});


Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost/AssistantDB',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB connected...');
    })
    .catch(() => {
        console.log('Mongodb connection failed...')
    });
Mongoose.set('debug', true);
require('./models/Users');
require('./config/passport');
App.use(require('./routes/index'));

App.listen(4000, () => {
    console.log('Server running on http://localhost:4000/');
});
