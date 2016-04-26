(function(module) {
  var aboutController = {};


  aboutController.index = function() {
    $('title').text('About Kim');
    showSection('#aboutView');  
  };

  module.aboutController = aboutController;
})(window);
