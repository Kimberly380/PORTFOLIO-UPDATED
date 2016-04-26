(function(module) {
  var aboutController = {};


  aboutController.index = function() {
    $('title').text('About Kim');
    showSection('#aboutView');  
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
