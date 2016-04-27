(function(module){
  var repoView = {};
  
  var toHtml=function(){
    var $about = $('#aboutView');
    
    $('.aboutContent').empty();
    showSection($about);   //from app.js
  };
  
  //render is called below as part of map function to append each object to template
  var render = function(repo){
    var repoTemplate = Handlebars.compile($('#repo-template').text());
    return repoTemplate(repo);
  };
  
  repoView.index = function(){
    toHtml();
    $('.aboutContent').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;  
})(window);