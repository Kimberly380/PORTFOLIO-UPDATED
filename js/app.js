projectsArray = [];

//object constructor
function Project (dataObj) {
  for (key in dataObj) this[key] = dataObj[key];
}

Project.prototype.toHtml = function() {
  var source = $('#portfolioTemplate').html();
  var template = Handlebars.compile(source);

  return template(this);
};

//push new projects from raw data into projects Array
projectData.forEach(function(ele){
  projectsArray.push(new Project(ele));
});

//pushes each project in projectsArray to html...
projectsArray.forEach(function(a){
  $('.portfolioContent').append(a.toHtml());
});


//##### begin event listeners ########################

//dynamic navigation
$('nav >ul').on('click','li',function(){
  $("#"+$(this).attr('data-link')).show();
  $('main').not("#"+$(this).attr('data-link')).hide();
});

//portfolio nav: filter objects by category selected

$('#portfolioNavUl').on('click','li',function(){
  console.log($(this).attr('data-filter'));
  
  
  
  $('.portfolioContent').show()
})
    
var filteredArray = $.grep(projectsArray, function(cat,i) {
  return (cat.category==='dataViz');
});
console.log(filteredArray);
  



