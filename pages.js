var prismic = require('express-prismic').Prismic,
    fs = require('fs'),
    path = require('path')

exports.page = function(req, res) {
  var uid = req.params['uid']

  var p = prismic.withContext(req, res);
  p.getByUID('page', uid, function(err, page) {
    if(!page) {
      res.status(404)
        .send('Not found');
    }
    else if (page.uid == uid) {
      res.render('page', {
        page: page,
        helpers: {
          buildMixinName:buildMixinName
        }
      })
    } else res.redirect(("/" + page.uid))
  });
};

function buildMixinName(sliceType, sliceLabel) {
  var labeledFileExists = fs.existsSync(path.resolve('views/slices/' + sliceType + '-' + sliceLabel + '.jade')),
      mixinWithLabel = toCamelcase(sliceType + '-' + sliceLabel),
      mixinName = (labeledFileExists ? mixinWithLabel : toCamelcase(sliceType));
  return mixinName;

}

function toCamelcase(name) {
  return name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase()})
};