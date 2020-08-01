import { Injectable } from '@angular/core';
//import {BMSPush} from '';

@Injectable({
  providedIn: 'root'
})
export class IBMPushNotificationService {

  constructor() { }
  // Initialize for iOS actionable push notifications, custom deviceId and varibales for Parameterize Push Notifications 
   options = {"categories":{
    "Category_Name1":[
        { "IdentifierName":"IdentifierName_1",
          "actionName":"actionName_1",
          "IconName":"IconName_1"
        },
        { "IdentifierName":"IdentifierName_2",
          "actionName":"actionName_2",
          "IconName":"IconName_2"
        }
    ]},
    "deviceId":"mydeviceId",
    "variables":{"username":"UserName","accountNumber":"536475869765475869"}
};

//BMSPush.initialize(appGUID, clientSecret, cloudRegion, options);
 success = function(response) { console.log("Success: " + response); };
failure = function(response) { console.log("Error: " + response); };

    //BMSPush.registerDevice(options, success, failure);

  //  To receive push notification call back
    handleNotificationCallback = function(notification) {
      // notification is a JSON object
      alert(notification.message);
    }
 //   BMSPush.registerNotificationsCallback(handleNotificationCallback);
}
