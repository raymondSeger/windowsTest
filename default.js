﻿(function () {
	"use strict";

	var app         = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;


	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
			    // TODO: This application has been newly launched. Initialize your application here.
			    
			    var objectRef = WinJS.Application.local;
			    objectRef.writeText('fileName.txt', 'Raymond Seger').done(function (data) {
			        

			        var value = WinJS.Application.local.readText('fileName.txt', 'defaultValue').done(function (valueData) {
			            jQuery('#pOne').text(valueData);
			        });

			        
			    });

			} else {
				// TODO: This application was suspended and then terminated.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
			}

			args.setPromise(WinJS.UI.processAll().then(function completed() {

			}));

		}
	};

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};

	app.start();
})();
