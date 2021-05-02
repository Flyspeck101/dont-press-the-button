/**
 * checks if Push notification and service workers are supported by your browser
 */
function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

/**
 * asks user consent to receive push notifications and returns the response of the user, one of granted, default, denied
 */
function initializePushNotifications() {
  // request user grant to show notification
  return Notification.requestPermission(function(result) {
    return result;
  });
}
/**
 * shows a notification
 */
function sendNotification() {
  const text = "Why did you press me? D:";
  const title = "Message from the button";
  const options = {
    body: text,
  };
  navigator.serviceWorker.ready.then(function(serviceWorker) {
    serviceWorker.showNotification(title, options);
  });
}

/**
 * 
 */
function registerServiceWorker() {
  navigator.serviceWorker.register("/sw.js").then(function(swRegistration) {
    //you can do something with the service wrker registration (swRegistration)
  });
}
