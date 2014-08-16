app.factory('TeachersResource', function($resource){
    //var TeachersResource = $resource('/api/teachers');

console.log($resource('/api/teachers'));
    return $resource('/api/teachers');
});