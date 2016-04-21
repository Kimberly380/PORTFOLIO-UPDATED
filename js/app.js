Project.allData = [];

//object constructor
function Project (dataObj) {
  for (key in dataObj) this[key] = dataObj[key];
};

//populate template to display data
Project.prototype.toHtml = function() {
  var source = $('#portfolioTemplate').html();
  var template = Handlebars.compile(source);

  return template(this);
};


  
//trying to create array of first images from Project.allData.images to add to template
Project.createThumbnails = function() {
  return Project.allData.map(function(img){
    return {thumbnail: img.images[0]};
  });
};




//push new projects from raw data into projects Array
Project.populateArray = function(jData){
  Project.allData = jData.map(function(ele){
    return new Project(ele);
  });
};
  
  
//#### data pull (asynchronous) ######################

if (localStorage.storedData){
  Project.populateArray(
    JSON.parse(localStorage.getItem('storedData'))
  );
  portfolioClick();
  Project.createThumbnails();
} else {
  $.getJSON('data/myData.json').done(function(data){
    Project.populateArray(data);
    localStorage.setItem('storedData',JSON.stringify(data));
    portfolioClick();
  }).fail(alertUser);
}


//##### begin event listeners ########################

//dynamic navigation for main nav
$('nav >ul').on('click','li',function(){
  var mainId = $('#'+$(this).attr('data-link'));
  
  mainId.show();
  $('main').not(mainId).hide();
});


//portfolio nav: filter objects being shown by nav category selected
function portfolioClick(){
  $('#portfolioNavUl').on('click','li',function(){
    $('.portfolioContent').remove();  //to remove & then re-create section
    $('#portfolioView').append('<section class=\'portfolioContent\'></section>');
    
    var categorySelected = $(this).attr('data-filter');  //collect category selected
         
    var filteredArray = $.grep(Project.allData, function(cat,i) {  //filter data by category
      return (cat.category === categorySelected);
    });
    filteredArray.forEach(function(a){  //append filtered data to section
      $('.portfolioContent').append(a.toHtml()).show();
    });
  });
} 
 
function alertUser(){
  $('#portfolioNavUl').on('click','li',(function(){
    $('#dataAlert').show();
  }));
} 




