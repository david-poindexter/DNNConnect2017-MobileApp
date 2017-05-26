angular.module('app.services', [])

.service('Sessions', ['$q', '$http', function($q, $http){
    
    var ret = {
        all: function(){
            return $http.get('http://dnn-connect.org/DesktopModules/Connect/Conference/API/Conference/4/Sessions/Agenda?moduleid=1812&tabid=269').then(function(response) {
                return response.data;
            }, function(err){
                alert('An error has occurred in contacting the server');
            });
        },
        one: function(id){
            return $http.get('http://dnn-connect.org/DesktopModules/Connect/Conference/API/Conference/4/Sessions/Get?moduleid=1812&tabid=269&sessionId=' + id).then(function(response) {
                return response.data;
            }, function(err){
                alert('An error has occurred in contacting the server');
            });
        }
    }
    
    return ret;

}])

.service('Schedule', ['$q', '$http', function($q, $http){
    
    var ret = {
        all: function(){
            return $http.get('http://dnn-connect.org/DesktopModules/Connect/Conference/API/Conference/4/Sessions/Schedule?moduleid=1812&tabid=269').then(function(response) {
                return response.data;
            }, function(err){
                alert('An error has occurred in contacting the server');
            });
        }
    }
    
    return ret;

}])