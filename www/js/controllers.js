angular.module('app.controllers', [])

.controller('reminderCtrl', function($scope, $rootScope, Reminders, $cordovaLocalNotification, $cordovaPush, $cordovaDialogs, $cordovaMedia, $cordovaToast, ionPlatform, $http) {
            var storage = window.localStorage;
            var storedPreferences = JSON.parse(storage.getItem('storedPreferences'));
            if (storedPreferences) {
            $rootScope.preferences = storedPreferences;
            } else {
            $rootScope.preferences = {
            active: false,
            frequency: 8,
            bio: {
            kids: true,
            sheWorks: true,
            heWorks: true,
            sheTravels: true,
            heTravels: true,
            },
            ideas: {
            flowers: {
            content: "get her flowers",
            enabled: true,
            },
            dishes: {
            content: "Do the dishes, without being asked",
            enabled: true,
            },
            deliverDinner: {
            content: "Bring home takeout",
            enabled: true,
            },
            takeKids: {
            content: "Take the kids for an evening while she goes out",
            enabled: false,
            },
            workGift: {
            content: "Send a gift to her at work",
            enabled: false,
            walk: {
            content: "Take her for a walk",
            enabled: true,
            },
            spaCert: {
            content: "Give her a spa certificate",
            enabled: true,
            },
            chocolate: {
            content: "Bring her Chocolate (not a Hershey's bar)",
            enabled: true,
            },
            pickMovie: {
            content: "Let Her pick the movie",
            enabled: true,
            },
            cleanCar: {
            content: "Suprise her with a clean car (and a full tank)",
            enabled: true,
            },
            grocery: {
            content: "Do the grocery Shopping",
            enabled: true,
            },
            makeBreakfast: {
            content: "Make Breakfast for her",
            enabled: true,
            },
            iceCream: {
            content: "Bring her favorite Ice cream home",
            enabled: true,
            },
            hourlyText: {
            content: "send her a nice text every hour today",
            enabled: true,
            },
            longHug: {
            content: "give her an uncomfortably long hug when you get home",
            enabled: true,
            },

            }
            }
            }
            // should probably be moved into a service, maybe the set reminders one
            $rootScope.preferences.ideas.takeKids.enabled = $rootScope.preferences.bio.kids;
            $rootScope.preferences.ideas.workGift.enabled = $rootScope.preferences.bio.sheWorks;
            storage.setItem('storedPreferences', JSON.stringify($rootScope.preferences));

            }
            $scope.activate = function() {
            //Reminders.add();
            $rootScope.preferences.active = true;
            }
            $scope.ideaText = "";
            $scope.addIdea = function(ideaText) {

            var customID = 0;
            for (var i = 0; i < 1000; i++) {
            if (!($rootScope.preferences.ideas['custom' + i])) {
            customID = i;
            break;
            }
            if (i == 999) {
            alert("Custom Idea limit is 999, this idea will overwrite the first one");
            }
            }
            $rootScope.preferences.ideas['custom' + customID] = {
            content: ideaText,
            enabled: true,
            }
            }
            $scope.register = function () {
        var config = null;

        if (ionic.Platform.isAndroid()) {
            config = {
                "senderID": "YOUR_GCM_PROJECT_ID" // REPLACE THIS WITH YOURS FROM GCM CONSOLE - also in the project URL like: https://console.developers.google.com/project/434205989073
            };
        }
        else if (ionic.Platform.isIOS()) {
            config = {
                "badge": "true",
                "sound": "true",
                "alert": "true"
            }
        }

        $cordovaPush.register(config).then(function (result) {
            console.log("Register success " + result);

            $cordovaToast.showShortCenter('Registered for push notifications');
            $scope.registerDisabled=true;
            // ** NOTE: Android regid result comes back in the pushNotificationReceived, only iOS returned here
            if (ionic.Platform.isIOS()) {
                $scope.regId = result;
                //storeDeviceToken("ios");
            }
        }, function (err) {
            console.log("Register error " + err)
        });
    }

            })

.controller('bioCtrl', function($scope, $rootScope) {
            var storage = window.localStorage;
            $rootScope.$watch('preferences', function() {
                              storage.setItem('storedPreferences', JSON.stringify($rootScope.preferences));
                              })
            })

.controller('preferencesCtrl', function($scope, $rootScope) {

            })
