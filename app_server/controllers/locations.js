/* GET 'home' Page. */
module.exports.homeList = (req,res) => {
    res.render('locations-list',{ title: 'Loc8r - find a place to work with wifi',
pageHeader: {
    title: 'Loc8r',
    strapline: 'Find places to work with wifi near you!'
        }
    });
};
/* GET 'Location Info' Page. */
module.exports.locationInfo = (req,res) => {
    res.render('location-info',{ title: 'Location Info'});
};
/* GET 'Add Review' Page. */
module.exports.addReview = (req,res) => {
    res.render('location-review-form',{ title: 'Add review'});
};