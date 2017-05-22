import IUserModel = require('./interfaces/UserModel');

class UserModel {

    private _userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this._userModel = userModel;
    }
    get login (): string {
        return this._userModel.login;
    }

    get password (): string {
        return this._userModel.password;
    }

    get salt (): string {
        return this._userModel.salt;
    }

    get hashedPassword (): string {
        return this._userModel.hashedPassword;
    }

}
Object.seal(UserModel);
export =  UserModel;