(function(module) {
  var repos = {};
  repos.all=[];

   //call to github API requesting repo data 
   //this function is called in aboutController.js on click of 'about link'
  repos.requestRepos = function(callback){
       
    $.ajax({
      datatype: 'json',
      url: 'https://api.github.com/users/Kimberly380/repos',
      data: 'Authorization token '+githubToken,  //githubToken found in githubToken.js
      success: function(data){
        repos.all = data;
        callback();   
        console.log(data);
      }
    });
  }; 
  
  //function is called on repoView.js
  repos.with = function(attr){
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };
    
  module.repos = repos;    
})(window);

