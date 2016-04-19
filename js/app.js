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
  $('.portfolioContent').append(a.toHtml());
});


//##### begin dynamic navigation ########################

$('nav >ul').on('click',function(){
  console.log($('this').attr('data-link'));

});


$('.navLeft2').on('click',function(){
  $('#portfolioNav').show();
});
