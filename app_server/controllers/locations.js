/* GET 'home' Page. */
module.exports.homeList = (req,res) => {
    res.render('locations-list',{ title: 'Home'});
};
/* GET 'Location Info' Page. */
module.exports.locationInfo = (req,res) => {
    res.render('index',{ title: 'Location Info'});
};
/* GET 'Add Review' Page. */
module.exports.addReview = (req,res) => {
    res.render('index',{ title: 'Add Review'});
};