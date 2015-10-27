var prismic = require('express-prismic').Prismic,
    fs = require('fs'),
    path = require('path')

exports.page = function(req, res) {
  var uid = req.params['uid']
  console.log(uid, "uid")

  var p = prismic.withContext(req, res);
  p.getByUID('page', uid, function(err, page) {
    if(!page) {
      res.status(404)
        .send('Not found');
    }
    else if (page.uid == uid) {
      var slices =  page.getSliceZone("page.body").value;
      res.render('page', {
        page: page,
        slices: slices,
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