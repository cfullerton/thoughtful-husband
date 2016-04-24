angular.module('app.services', [])

.factory('Reminders', function(){
return {
	add : function() {
		var frequency = 8; //needs to equal data object frequency
		var notificationID = 0;
		
		for (var i=0;i<30;i++){
        var alarmTime = new Date();
		var ideaNum = Math.floor(Math.random() * 10); //needs to be dataObject.ideas.length
        notificationID++;
		alarmTime.setMinutes(alarmTime.getMinutes() + 60*24*(30/frequency)*notificationID);	
		$cordovaLocalNotification.clear(notificationID);
        $cordovaLocalNotification.add({
            id: notificationID,
            date: alarmTime,
            message: "This is a message",
            title: "This is a title",
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

