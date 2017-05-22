import AppError = require("./AppError");

class HttpRequestError extends AppError {
  constructor (public status: number, public message: string) {
    super();    
  }
}

export = HttpRequestError;