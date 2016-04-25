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
  portfolioClick();
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
  var closures = $('#practiceClosures');
 
  mainId.show();
  $('main > section').not(mainId).hide();
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
    console.log(filteredArray);
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


//##practice closures ##############################
var $button1 = $('#buttonOne');
var $button2 = $('#buttonTwo');
var $printText = $('#output');
var $userName = $('#userName');
var userName;

$userName.change(function(){
  useName($userName.val(), setButton);
  $('label').hide();
})

function useName (name,onClick){
  var currName = name;
  $button1.html('Hi ' + currName + ' Click Here!').show('medium');
  $userName.hide();  
  $button1.on("click",function(){
    onClick(currName);
  });
}

function setButton (name){
  pushTheButton(name);
  $button1.hide();
  $button2.delay(800).show('medium');  
}

function printSomeStuff (a){
  return function(b) {
    $printText.empty().append('Congratulations, '+ b + '!' + a);   
  };   
}
var pushTheButton = printSomeStuff ("You pushed the button!");

$button2.on("click",function(){
  $printText.empty().append("Thanks for Playing!");
  $button2.hide();
  $printText.delay(800).hide('medium');
});

//######################################