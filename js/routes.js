
//incorporate page.js navigation
var $p = $('#loadError');

function setRouteMappings(){
  page.base('/');

  page('', homeController.index);
  page('about',aboutController.index);
  page('contact', contactController.index);
  page('portfolio', portfolioController.index);
  page('resume',resumeController.index);
  page('*',notfound);
 
  page();
}

function notfound(){
  $p.html('Sorry, page not found.');
}

setRouteMappings();