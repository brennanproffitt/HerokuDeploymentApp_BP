exports.get_birds = function(req, res) {
    res.render('birds', { title: 'Birds' });
}

exports.get_birds_create = function(req,res) {
    res.render('createBird');
}

exports.post_birds_create = function(req,res) {
        //process data/save to db
        console.log(req.body.species);
        console.log(req.body.nickname);
        console.log(req.body.status);
    
        //todo: save these to a database
    
        //what next? Get user to a confirmation page
        res.redirect('/birds/create/conf');
}

exports.get_birds_create_conf = function(req,res) {
    res.render('createBirdConf');
}