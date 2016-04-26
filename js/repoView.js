(function(module){
  var repoView = {};
  
  var ui=function(){
    var $about = $('#aboutView');
    
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };
  
  
  var render = function(repo){
    var repoTemplate = Handlebars.compile($('#repo-template').text());
    return repoTemplate(repo);
  }
  
  repoView.index = function(){
    ui();
    $('#aboutView').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;  
})(window);