(function(module) {
  var contactController = {};

  contactController.index = function() {
    $('title').text('Contact Info');
    showSection('#contactView');  
  };

  module.contactController = contactController;
})(window);
