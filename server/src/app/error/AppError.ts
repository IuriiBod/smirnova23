class AppError {
    constructor () {
        Error.apply(this, arguments);
    }
}

AppError.prototype = new Error();

export = AppError;