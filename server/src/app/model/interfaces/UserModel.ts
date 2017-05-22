import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    login: string;
    password: string;
    salt: string;
    hashedPassword: string;
    token: string;
}

export = UserModel;  