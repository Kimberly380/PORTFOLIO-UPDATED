(function(module) {
  var repos = {};
  repos.all=[];

   //call to github API requesting repo data 
  repos.requestRepos = function(callback){
       
    $.ajax({
      datatype: 'json',
      url: 'https://api.github.com/users/Kimberly380/repos',
      data: 'Authorization token '+githubToken,
      success: function(data){
        repos.all = data;
        callback();
        console.log(data);
      }
    });
  } 
  
  
  repos.with = function(attr){
    return repos.all.filter(function(repo){
      return repo[attr];
    });
  };
    
  module.repos = repos;    
})(window);

