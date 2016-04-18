projectsArray = [];

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
  $('#portfolioPage').append(a.toHtml());
});


$('#portfolioPage').hide();

$('.navLeft1').on('click',function(){
  $

});
