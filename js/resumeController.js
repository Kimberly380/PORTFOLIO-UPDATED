(function(module) {
  var resumeController = {};

  resumeController.index = function() {
    $('title').text('Kim Resume');
    showSection('#resumeView');  
  };

  module.resumeController = resumeController;
})(window);
