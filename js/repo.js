(function(module) {
  var repos = {};
  repos.all=[];

   //call to github API requesting repo data 
   //this function is called in aboutController.js on click of 'about link'
  repos.requestRepos = function(callback){
       
    $.ajax({
      url: '/github/user/repos' +
           '?per_page=50'+
            '&sort=update',
      type: 'GET',
      success: function(data, message, xhr){
        repos.all = data;
      }
    }).done(callback);
  }; 
  
  //function is called on repoView.js
  repos.with = function(attr){
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };
    
  module.repos = repos;    
})(window);

