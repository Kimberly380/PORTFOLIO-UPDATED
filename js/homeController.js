(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('title').text('Home Page');
    showSection('#homeView');  
    $('#practiceClosures').show();
  };

  module.homeController = homeController;
})(window);
