/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  if (req.user)
    res.redirect('requests/new');
  else
    res.render('home', {
      title: 'Home'
    });
};
