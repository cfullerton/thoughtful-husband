angular.module('app.controllers', [])
  
.controller('reminderCtrl', function($scope,$rootScope,Reminders,$cordovaLocalNotification) {
 var storage = window.localStorage; 
 var storedPreferences = JSON.parse(storage.getItem('storedPreferences'));
		if (storedPreferences){ 
			$rootScope.preferences = storedPreferences;
		}else{  
			$rootScope.preferences = {
                frequency:8,
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
			storage.setItem('storedPreferences', JSON.stringify($rootScope.preferences));
            
		}
$scope.activate = function(){
    Reminders.add(); 
}
            $scope.ideaText = "";
$scope.addIdea = function(ideaText){
	
	var customID = 0;
    for (var i = 0; i<1000;i++){
        if (!($rootScope.preferences.ideas['custom' + i ])){
            customID = i;
            break;
        }
        if (i =999){
            alert("Custom Idea limit is 999, this idea will overwrite the first one");
        }
    }
	$rootScope.preferences.ideas['custom' + customID ] = {
		content: ideaText,
		enabled:true,
	}
}
})
   
.controller('bioCtrl', function($scope,$rootScope) {
var storage = window.localStorage;
$rootScope.$watch('preferences',function(){
    storage.setItem('storedPreferences', JSON.stringify($rootScope.preferences));
})    
})
   
.controller('preferencesCtrl', function($scope,$rootScope) {

})
    