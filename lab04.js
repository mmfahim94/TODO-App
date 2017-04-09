angular.module('ToDo', []).controller('todocntrl' , ['$scope',  function($scope){
		$scope.todos = [{'title' : 'Lab 04' ,  'complete' : false, 'description' : 'Todo App'}];
		$scope.completed = [ ];	
		$scope.count = 0;	

		$scope.addTodo = function(){
			$scope.check($scope.newTitle, $scope.newDescription);
			if($scope.count == 0){
				$scope.todos.push({'title' : $scope.newTitle, 'description' : $scope.newDescription, 'complete' : false})
				$scope.newTitle = ''
				$scope.newDescription = ''
			}
			else{
				window.alert($scope.newTitle + " - " + $scope.newDescription + " exists in the list !!!");
				$scope.count = 0;
			}	
		}

		$scope.check = function(t, d){
			for (var i = 0; i < $scope.todos.length; i++){
				if($scope.todos[i].title === t && $scope.todos[i].description === d){
					$scope.count++;
				}
			}
		}
		
		$scope.removeTask = function(item){
				return $scope.todos.splice($scope.todos.indexOf(item), 1);
		}

		$scope.completeTask = function(item){
				 item.complete = true;
				 $scope.todos.splice($scope.todos.indexOf(item),1);
				 $scope.completed.push(item);			
		}			
		
		$scope.removeCompletedTask = function(item){
				return $scope.completed.splice($scope.completed.indexOf(item), 1);
		}

		$scope.add = function(){
			var f = document.getElementById('file').files[0];
			var r = new FileReader();
			r.onloadend = function(e){
				var data = JSON.parse(e.target.result);
				for (var i = 0; i < data.length; i++){ 					
					$scope.todos.push(data[i]);
					$scope.$apply();
				}
			}
			r.readAsBinaryString(f);
		}
}])