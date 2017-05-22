import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/UserModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            login : {
                type: String,
                unique: true,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            salt: {
                type: String,
                required: true
            },
            hashedPassword: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true  
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IUserModel>("Users", UserSchema.schema);
export = schema;""