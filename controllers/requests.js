const passport = require('passport');
const Request = require('../models/Request');

/**
 * GET /request/new
 * Request a pickup page.
 */
exports.getRequest = (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }
  res.render('requests/new', {
    title: 'Request Pickup'
  });
};

/**
 * POST /request/new
 * Create a new request.
 */
exports.postRequest = (req, res) => {
  // req.assert('date', 'Date must be in the past').len(4);
  // req.sanitize('email').normalizeEmail({ remove_dots: false });

  const errors = req.validationErrors();
  console.log(errors);

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('requests/new');
  }
  let requestData = {
    user: req.user.id,
    address: req.body.address,
    date: req.body.date,
    time: req.body.time,
    // type: req.body.type,
    // amount: req.body.amount,
    note: req.body.note
    // recurring: req.body.recurring
  };

  const request = new Request(requestData);

  request.save((err) => {
    if (err) { return next(err); }
  res.redirect('/');
  });
};

/**
 * GET /request/show
 * Show pickups for this user.
 */
exports.getRequests = (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }

  // find the requests for this person

  // if (req.user.admin) {
  //   Request
  //     .find()
  //     .populate('user')
  //     .sort({ _id: -1 })
  //     .limit(30)
  //     .exec((err, requests) => {
  //       res.title = 'Show Requests'
  //       res.render('requests/show', {requests});
  //     });
  // } else {
  // }
    Request
      .find({ user: req.user.id })
      .populate('user')
      .sort({ _id: -1 })
      .limit(10)
      .exec((err, requests) => {
        res.title = 'Show Requests'
        res.render('requests/show', {requests});
      });
};
