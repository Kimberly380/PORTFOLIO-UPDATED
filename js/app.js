projectsArray = [];

//object constructor
function Project (dataObj) {
  for (key in dataObj) this[key] = dataObj[key];
}

//populate template to display data
Project.prototype.toHtml = function() {
  var source = $('#portfolioTemplate').html();
  var template = Handlebars.compile(source);

  return template(this);
};

//push new projects from raw data into projects Array
projectData.forEach(function(ele){
  projectsArray.push(new Project(ele));
});


//##### begin event listeners ########################

//dynamic navigation for main nav
$('nav >ul').on('click','li',function(){
  $('#'+$(this).attr('data-link')).show();
  $('main').not('#'+$(this).attr('data-link')).hide();
});


//portfolio nav: filter objects being shown by nav category selected
$('#portfolioNavUl').on('click','li',function(){
 
  $('.portfolioContent').remove();  //to remove & then re-create section
  $('#portfolioView').append("<section class='portfolioContent'></section>");
  
  var category = $(this).attr('data-filter');  //collect category selected
  var filteredArray = [];
    
  filteredArray = $.grep(projectsArray, function(cat,i) {  //filter data by category
    return (cat.category=== category);
  });
  
  filteredArray.forEach(function(a){  //append filtered data to section
    $('.portfolioContent').append(a.toHtml()).show()
  });
});
  


  



  



