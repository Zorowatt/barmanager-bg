var mongoose = require('mongoose');

var Teacher = mongoose.model('Teacher');

module.exports = function(app){

    app.get('/api/teachers', function(req,res){
        Teacher.find({}).sort( { id: 1 } ).exec(function(err, collection){
            if (err) {
                console.log('User cannot be loaded form DB: ' + err);
            }

            res.send(collection);

        })
    });

    app.get('/partials/:partialArea/:partialName', function(req,res) {
       // console.log(req.params.partialArea+ '/' + req.params.partialName);
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName)
    });
//    app.get('/partials/:partialArea',function(req, res){
//         res.render('../../public/app/' + req.params.partialArea);
//    });


//    app.post('/login', auth.login);
//    app.post('/logout', auth.logout);

    app.get('*',function(req,res){
        res.render('index', {currentUser: req.user});
    });
};