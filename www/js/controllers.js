angular.module('app.controllers', [])
  
.controller('reminderCtrl', function($scope,$rootScope,Reminders,$cordovaLocalNotification) {
 //let storage = new Storage(SqlStorage); //let storage = new Storage();
 /*storage.get('storedPreferences').then((storedPreferences) => {
		if (storedPreferences){ 
			$rootScope.preferences = storedPreferences;
		}else{  */
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
			console.log($rootScope.preferences)
			//storage.set('storedPreferences', 'preferences');
		//}
//});
        $scope.add =    function() {
        console.log("ffs");
		var frequency = 8; //needs to equal data object frequency
		var notificationID = 0;
		
		for (var i=0;i<1;i++){ // 1 notification for dev
        var alarmTime = new Date();
        var ideaKeys = Object.keys($rootScope.preferences.ideas);
		var ideaNum = Math.floor(Math.random() * ideaKeys.length); 
        notificationID++;
		//alarmTime.setMinutes(alarmTime.getMinutes() + 60*24*(30/frequency)*notificationID);
        alarmTime.setMinutes(alarmTime.getMinutes() + 1) // 1 min for dev    
		$cordovaLocalNotification.clear(notificationID);
        $cordovaLocalNotification.add({
            id: notificationID,
            date: alarmTime,
            message: $rootScope.preferences.ideas[ideaKeys[ideaNum]].content,
            title: "Time for a thoughtful action",
            autoCancel: true,
            sound: null
        }).then(function () {
            console.log("The notification has been set");
        }); 
        //console.log($rootScope.preferences.ideas[ideaKeys[ideaNum]].content);
		}
}
$scope.activate = function(){
    $scope.add();
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

})
   
.controller('preferencesCtrl', function($scope,$rootScope) {

})
    