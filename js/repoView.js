(funciton(module) {
    var repos = {};
    repos.all=[];
    
    
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
    
 module.repos = repos;    
})(window);