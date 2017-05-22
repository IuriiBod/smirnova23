import AppError = require("./AppError");

class AuthError extends AppError {
  constructor (public status: number, public message: string) {
    super();    
  }
};

export = AuthError;