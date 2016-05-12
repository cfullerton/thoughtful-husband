angular.module('app.services', [])

.factory('Reminders', function($cordovaLocalNotification,$rootScope){
return {
	add : function() {		
		var notificationID = 0;
		
		for (var i=0;i<10;i++){
           var alarmTime = new Date();
           var ideaKeys = Object.keys($rootScope.preferences.ideas);
		   var ideaNum = Math.floor(Math.random() * ideaKeys.length);
         var delayTime = 20 - $rootScope.preferences.frequency;
           notificationID++;
         if (i ==0){
          alarmTime.setMinutes(alarmTime.getMinutes() + 1);
         }else{
		   alarmTime.setMinutes(alarmTime.getMinutes() + 60*24*delayTime);
         }
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
                   console.log(alarmTime);
           });
		}
}
}
})

/* .service('loadPreferences', [function(){
 
}]); */

