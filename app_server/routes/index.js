const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET Locations page. */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* GET Other pages. */
router.get('/about', ctrlOthers.about);

module.exports = router;
