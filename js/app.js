Project.allData = [];

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
Project.populateArray = function(jData){
  jData.forEach(function(ele){
    Project.allData.push(new Project(ele));
  });
};
  
  
//#### data pull (asynchronous) ######################

if (localStorage.storedData){
  Project.populateArray(
    JSON.parse(localStorage.getItem('storedData'))
  );
} else {
  $.getJSON('data/myData.json').done(function(data){
    Project.populateArray(data);
    localStorage.setItem('storedData',JSON.stringify(data));
  });  
}





//##### begin event listeners ########################

//dynamic navigation for main nav
$('nav >ul').on('click','li',function(){
  $('#'+$(this).attr('data-link')).show();
  $('main').not('#'+$(this).attr('data-link')).hide();
});


//portfolio nav: filter objects being shown by nav category selected
$('#portfolioNavUl').on('click','li',function(){
 
  $('.portfolioContent').remove();  //to remove & then re-create section
  $('#portfolioView').append('<section class=\'portfolioContent\'></section>');
  
  var categorySelected = $(this).attr('data-filter');  //collect category selected
  var filteredArray = [];
    
  filteredArray = $.grep(Project.allData, function(cat,i) {  //filter data by category
    return (cat.category === categorySelected);
  });
  console.log(filteredArray);
  filteredArray.forEach(function(a){  //append filtered data to section
    $('.portfolioContent').append(a.toHtml()).show();
  });
});
  


  



  



