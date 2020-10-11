exports.get_birds = function(req, res) {
    res.render('birds', { title: 'Birds' });
}

exports.get_birds_create = function(req,res) {
    res.render('createBird');
}

exports.post_birds_create = function(req,res) {
        //format into JSON in order to save to database
        let newBird = {
            species: req.body.species,
            nickname: req.body.nickname,
            status: req.body.status
        }

        //todo: save these to a database
        console.log(newBird);
        //what next? Get user to a confirmation page
        res.redirect('/birds/create/conf');
}

exports.get_birds_create_conf = function(req,res) {
    res.render('createBirdConf');
}