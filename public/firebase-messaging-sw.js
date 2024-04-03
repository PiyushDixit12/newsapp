importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyBrLigsp38sImUz-5iAZDxZffa90agJGCU",
    authDomain: "bookstore-tailwind-march-24.firebaseapp.com",
    projectId: "bookstore-tailwind-march-24",
    storageBucket: "bookstore-tailwind-march-24.appspot.com",
    messagingSenderId: "68162882221",
    appId: "1:68162882221:web:52c0e9ac24ca088e885424",
    databaseURL: "https://bookstore-tailwind-march-24-default-rtdb.firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle,notificationOptions);
});
