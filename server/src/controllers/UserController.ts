import express = require("express");
import UserBusiness = require("./../app/business/UserBusiness");
import IBaseController = require("./BaseController");
import IUserModel = require("./../app/model/interfaces/UserModel");
import AuthError = require("../app/error/AuthError");
import path = require('path');
const multer  = require('multer');


class UserController implements IBaseController <UserBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var hero: IUserModel = <IUserModel>req.body;
            var heroBusiness = new UserBusiness();
            heroBusiness.create(hero, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var hero: IUserModel = <IUserModel>req.body;
            var _id: string = req.params._id;
            var heroBusiness = new UserBusiness();
            heroBusiness.update(_id, hero, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var heroBusiness = new UserBusiness();
            heroBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
            console.log(req.headers['authorization']);
            
            var heroBusiness = new UserBusiness();
            heroBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var heroBusiness = new UserBusiness();
            heroBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    logIn(req: express.Request, res: express.Response): void {
        try {

            var user: IUserModel = <IUserModel>req.body;
            var login: string = user.login;
            var password: string = user.password;
            var userBusiness = new UserBusiness();

            userBusiness.logIn(login, password, (error, result) => {
                if(error) {
                  if(error instanceof AuthError) {
                    res.status(error.status);
                    res.statusMessage = error.message;
                  }
                  res.send(error);
                } else {
                  res.send(result);  
                }
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    upload(req: express.Request, res: express.Response): void {
        var storage = multer.diskStorage({ //multers disk storage settings
            destination: function (req, file, cb) {
                cb(null, './uploads/');
            },
            filename: function (req, file, cb) {
                var datetimestamp = Date.now();
                cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
            }
        });

        var upload = multer({ //multer settings
                    storage: storage
                }).single('file');

        upload(req,res,function(err){
            //console.log(req.file);
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });

        // try {
        
        //     var name = req.body.name;
        //     console.log(name);
            
        //     var upload2 = multer({ 
        //       dest: '/../../uploads',
        //       storage: multer.diskStorage({
        //         filename: (req, file, cb) => {
        //             console.log(req);
        //             console.log(file);
        //           let ext = path.extname(name);
        //           cb(null, `${Math.random().toString(36).substring(7)}${ext}`);
        //         }
        //       }) 
        //     });

        //     upload2.any();
            
        // }
        // catch (e)  {
        //     console.log(e);
        //     res.send({"error": "error in your request"});

        // }
    }

}
export = UserController;