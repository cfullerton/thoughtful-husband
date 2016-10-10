angular.module('app.controllers', [])

.controller('reminderCtrl', function($scope, $rootScope, Reminders, $cordovaLocalNotification) {
            $scope.promptMessage = "Tell me a little about your wife in the bio section. When you are ready for me to generate some reminders click Actitivate!";
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
            $scope.promptMessage = "Reminders Activated! You should get a test reminder in a few minutes and periodic reminders at random times";
            Reminders.add();
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
            })

.controller('bioCtrl', function($scope, $rootScope) {
            var storage = window.localStorage;
            $rootScope.$watch('preferences', function() {
                              storage.setItem('storedPreferences', JSON.stringify($rootScope.preferences));
                              })
            })

.controller('preferencesCtrl', function($scope, $rootScope) {
            
            })