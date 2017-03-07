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
  res.render('requests/new-buttons', {
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

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('requests/new');
  }

  const request = new Request({
    user: req.user.id,
    address: req.body.address,
    date: req.body.date,
    time: req.body.time,
    glass: req.body.glass,
    amount: req.body.amount,
    note: req.body.note,
    recurring: req.body.recurring
  });

  request.save((err) => {
    if (err) { return next(err); }
  res.redirect('/requests');
  });
};

/**
 * POST /request/update
 * Update a request.
 */
exports.putRequest = (req, res) => {

  const errors = req.validationErrors();
  if (errors) {
    console.log(errors);
    req.flash('errors', errors);
    return res.redirect('back');
  }

  Request
    .update(
      { _id: req.body.id },
      { $set: {
    address: req.body.address,
    date: req.body.date,
    time: req.body.time,
    glass: req.body.glass,
    amount: req.body.amount,
    note: req.body.note,
    recurring: req.body.recurring
  } },
      (err) => {

        if (err) {
          req.flash('errors', errors);
          return res.redirect('back');
        }
      res.redirect('back') }
      );
};

/**
 * POST /request/delete
 * Deletes a request.
 */
exports.deleteRequest = (req, res) => {
  Request.remove(
    { _id: req.body.id },
    (err) => {
      if (err) {
        console.log("couldn't delete. Doesn't exist?");
        res.redirect('back');
      } else {
        res.redirect('back');
      }
  })
}

/**
 * GET /request/show
 * Show pickups for this user.
 */
exports.getRequests = (req, res) => {
  if (!req.user) {
    return res.redirect('/login');
  }
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

/**
 * GET /request/show
 * Show pickups for this user.
 */
exports.getAdminRequests = (req, res) => {
  if (!req.user.admin) {
    return res.redirect('/login');
  }
    Request
      .find()
      .populate('user')
      .sort({ _id: -1 })
      .limit(20)
      .exec((err, requests) => {
        res.title = 'Show Requests'
        res.render('requests/show', {requests});
      });
};
