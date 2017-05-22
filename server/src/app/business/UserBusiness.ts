import UserRepository = require("./../repository/UserRepository");
import IUserBusiness = require("./interfaces/UserBusiness");
import IUserModel = require("./../model/interfaces/UserModel");
import UserModel = require("./../model/UserModel");
import AuthError = require("../error/AuthError");
import Constants = require("./../../config/constants/constants");
import * as CryptoJS from 'crypto-js';


class UserBusiness implements IUserBusiness {
    private _userRepository: UserRepository;
    
    constructor () {
        this._userRepository = new UserRepository();
    }

    create (item: IUserModel, callback: (error: any, result: any) => void) {
        this._userRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._userRepository.retrieve(callback);
    }

    update (_id: string, item: IUserModel, callback: (error: any, result: any) => void) {

        this._userRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._userRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._userRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IUserModel) => void) {
        this._userRepository.findById(_id, callback);
    }

    logIn (login: string, password: string, callback: (error: any, result: any) => void) {
        this._userRepository.findByLogin(login, (err, res) => {
            if(err) {
                callback(err, res);
            } else {
                if(res) {
                    let hash = CryptoJS.HmacSHA1(password, res.salt);
                    let encodedPassword = CryptoJS.enc.Base64.stringify(hash);
                    if(encodedPassword == res.hashedPassword) {
                        callback(null, {
                            login: res.login,
                            token: Constants.TOKEN
                        });
                    } else {
                        callback(new AuthError(401, 'Incorrect password'), null);
                    }
                } else {
                    callback(new AuthError(401, 'Incorrect login'), null);
                }
            }
        });
    }
}

Object.seal(UserBusiness);
export = UserBusiness;