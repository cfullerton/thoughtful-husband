angular.module('app.controllers', [])
  
.controller('reminderCtrl', function($scope,$rootScope) {
//let storage = new Storage(SqlStorage, options);
/* storage.get('storedPreferences').then((storedPreferences) => {
		if (storedPreferences){
			$rootScope.preferences = storedPreferences;
		}else{ */
			$rootScope.preferences = {
				bio: {
					kids:true,
					sheWorks:true,
					heWorks:true,
					sheTravels:true,
					heTravels:true,
				},
				ideas:{
					flowers:{
					content:"get her flowers",
					enabled:true,					
					},
					dishes:{
					content:"Do the dishes, without being asked",
					enabled:true,
					},
					deliverDinner:{
						content:"Bring home takeout",
						enabled:true,
					},
					takeKids:{
						content:"Take the kids for an evening while she goes out",
						enabled:false,
					},
					workGift:{
						content:"Send a gift to her at work",
						enabled:false,
					},
					
				},
				
			}
			// should probably be moved into a service, maybe the set reminders one
			$rootScope.preferences.ideas.takeKids.enabled = $rootScope.preferences.bio.kids;
			$rootScope.preferences.ideas.workGift.enabled = $rootScope.preferences.bio.sheWorks;
			console.log($rootScope.preferences)
			//storage.set('storedPreferences', 'preferences');
		//}
//});
})
   
.controller('bioCtrl', function($scope,$rootScope) {

})
   
.controller('preferencesCtrl', function($scope,$rootScope) {
$scope.ideaText = "";
$scope.addIdea = function(ideaText){
	console.log($scope.ideaText);
	var customID = Math.floor(Math.random()*100);
	$rootScope.preferences.ideas['custom' + customID ] = {
		content: ideaText,
		enabled:true,
	}
	console.log($rootScope.preferences);
}
})
    