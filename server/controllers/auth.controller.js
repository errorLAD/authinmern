
const bcrypt = require('bcrypt');
const password = require('passport');
const User = require("../models/User"); 

exports.login = (req,res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if(err) return next(err);
        if(!user) return res.status(400).json({ message: info.message }); 
        
        req.login(user, (err) =>  {
            if(err) return next(err); 
            return res.json(user);
        });

    }) (req, res, next);
};

exports.logout = (req,res) => {
    req.logout();
    res.json({ message: "Logged out sucessfully"})
}