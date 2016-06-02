// Routes file for the express app
'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('./config');

// Controller for repositories
var Repositories = require('./controllers/repositories');
var Slack        = require('./controllers/slack');

// Root route
router.get('/', function(req, res) {
    res.render('index');
});

// Route for list of repositories
router.get('/repositories', Repositories.getRepositoryList);

// Test route to save info to the database
router.get('/repositories/update', Repositories.saveRepo);

// Route for individual repository pages
router.get('/repositories/:id', Repositories.getRepository);

// Route for slack invite
router.get('/invite', Slack.getSlackInvite);

router.post('/invite', Slack.postSlackInvite);

// Export routes
module.exports = router;
