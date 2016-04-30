angular.module('app.services', [])

.factory('Reminders', function($cordovaLocalNotification,$rootScope){
return {
	add : function() {		
		var notificationID = 0;
		
		for (var i=0;i<1;i++){ // 1 notification for dev
        var alarmTime = new Date();
        var ideaKeys = Object.keys($rootScope.preferences.ideas);
		var ideaNum = Math.floor(Math.random() * ideaKeys.length); 
        notificationID++;
		//alarmTime.setMinutes(alarmTime.getMinutes() + 60*24*(30/$rootScope.preferences.frequecy)*notificationID);
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
		}
}
}
})

/* .service('loadPreferences', [function(){
 
}]); */

