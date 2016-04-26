(function(module) {
  var portfolioController = {};
  
  var $portfolioNav = $('portfolioView');
  var $portfolioData = $('portfolioContent');
  $portfolioNav.on('click',function(){
    $portfolioData.hide();   
  });    

  portfolioController.index = function() {
    $('title').text('My Portfolio');
    showSection('#portfolioView');
  };

 

  module.portfolioController = portfolioController;
})(window);
