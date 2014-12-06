// Render the home page
exports.index = function(req, res){
  res.render('layout');
};

// Render the partials
exports.partials = function (req, res) {
  var name = req.params.name;
  // res.render('partials/'+name);
  res.render('partials/' + name, {
      items: [
          {_id:'e32', name:'fjffasfa'},
          {_id:'e42', name:'fsdsfdfs'},
          {_id:'e62', name:'fsdfsdf'}
      ]
  });
};