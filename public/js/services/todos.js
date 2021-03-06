angular.module('todoService', [])

	// super simple service
	// each function returns a promise object
	.factory('Todos', ['$http', function($http) {
		return {
			backend: 'https://ahr-dot-sinuous-tine-156112.appspot.com',
			get : function() {
				return $http.get(this.backend + '/api/todos');
			},
			create : function(todoData) {
				return $http.post(this.backend + '/api/todos', todoData);
			},
			delete : function(id) {
				return $http.delete(this.backend + '/api/todos/' + id);
			}
		}
	}]);
