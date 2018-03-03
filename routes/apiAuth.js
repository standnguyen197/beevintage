var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');
var Auth = require('../models/Auth.js');

/* GET ALL BOOKS */
// router.get('/', function(req, res, next) {
//   Book.find(function (err, products) {
//     if (err) return next(err);
//     res.json(products);
//   });
// });

/* GET SINGLE BOOK BY ID */
// router.get('/:id', function(req, res, next) {
//   Book.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  var _id = req.body.personID;
  var nameProfile = req.body.personName;
  var linkProfile = req.body.personLink;
  var emailProfile = req.body.personProfile;
  var coverProfile = req.body.personPictureCover;
  var pictureProfile = req.body.personPicture;

  var userData = {
    id: _id,
    name: nameProfile,
    link: linkProfile,
    email: emailProfile,
    cover: coverProfile,
    picture: pictureProfile
  }
  // res.json(
  //  {
  //   _id: _id,
  //   nameProfile: nameProfile,
  //   linkProfile: linkProfile,
  //   emailProfile: emailProfile,
  //   coverProfile: coverProfile
  //  }
  // )

  Auth.count({_id: _id}, function(err, countValue) {
   if(countValue == '1'){

    res.json({
      userData
    })

    }else{

      var newAuth = new Auth();

      newAuth._id = _id;
      newAuth.coverProfile = coverProfile;
      newAuth.nameProfile = nameProfile;
      newAuth.linkProfile = linkProfile;
      newAuth.emailProfile = emailProfile;
      newAuth.pictureProfile = pictureProfile;
      newAuth.coverProfile = coverProfile;
    
    
      newAuth.save(function (err) {
        if (err){
          return handleError(err);
        }else{
          res.json({
            imes: 'Thành công!',
            userData
          });
        } 
        // saved!
      });

   }
  });
 

});

/* UPDATE BOOK */
// router.put('/:id', function(req, res, next) {
//   console.log(req.body);
//   Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

/* DELETE BOOK */
// router.delete('/:id', function(req, res, next) {
//   Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
