/* GET 'home' Page. */
module.exports.homeList = (res,req) => {
    res.render('index',{ title: 'Home'});
};
/* GET 'Location Info' Page. */
module.exports.locationInfo = (res,req) => {
    res.render('index',{ title: 'Location Info'});
};
/* GET 'Add Review' Page. */
module.exports.addReview = (res,req) => {
    res.render('index',{ title: 'Add Review'});
};